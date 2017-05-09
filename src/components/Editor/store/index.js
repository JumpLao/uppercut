import Cars from './cars.json'

const state = {
  currentStep: 0,
  steps: [{
    name: 'Select a vehicle'
  },
  {
    name: 'Select style'
  },
  {
    name: 'Select budget & parts'
  },
  {
    name: 'Navigation'
  },
  {
    name: 'Select dealer'
  }],
  budget: 0,
  currentCost: 0,
  currentPart: '',
  cars: Cars,
  currentCar: {}
}
const getters = {
  currentStep (state) {
    return state.steps[state.currentStep]
  },
  currentStepIndex (state) {
    return state.currentStep
  },
  steps (state) {
    return state.steps
  },
  nextStepEnable (state) {
    let enable = state.currentStep < (state.steps.length - 1)
    if (state.currentStep === 1) {
      enable = enable && state.currentCar.parts['color'] !== undefined
    }
    if (state.currentStep === 2) {
      enable = enable && state.budget >= getters.currentCost(state)
    }
    console.log(enable)
    return enable
  },
  prevStepEnable (state) {
    return state.currentStep > 0
  },
  cars (state) {
    return state.cars
  },
  currentCar (state) {
    return state.currentCar
  },
  brands (state) {
    return state.cars.map((car) => {
      return car.brand
    })
  },
  models (state) {
    if (state.currentCar.brand) {
      return state.cars.filter((car) => { return car.brand === state.currentCar.brand })[0].models
    } else {
      return state.cars[0].models
    }
  },
  years (state) {
    console.log('year')
    if (state.currentCar.model) {
      console.log(1)
      return getters.models(state).filter((model) => { return model.model === state.currentCar.model })[0].years
    } else {
      console.log(2)
      return getters.models(state)[0].years
    }
  },
  types (state) {
    console.log('type')
    if (state.currentCar.year) {
      console.log(1)
      return getters.years(state).filter((year) => { return year.year === state.currentCar.year })[0].types
    } else {
      console.log(2)
      return getters.years(state)[0].types
    }
  },
  styles (state) {
    console.log('style')
    if (state.currentCar.type) {
      console.log(1)
      return getters.types(state).filter((type) => { return type.type === state.currentCar.type })[0].styles
    } else {
      console.log(2)
      return getters.types(state)[0].styles
    }
  },
  parts (state) {
    console.log('parts')
    if (state.currentCar.style) {
      return getters.styles(state).filter((style) => { return style.style === state.currentCar.style })[0].parts
    } else {
      return getters.styles(state)[0].parts
    }
  },
  colors (state) {
    let parts = getters.parts(state)
    return parts.length > 0 ? parts.filter((part) => { return part.part === 'Color' })[0].data : []
  },
  currentPart (state) {
    return getters.parts(state).filter((part) => { return part.part === state.currentPart })[0]
  },
  budget (state) {
    return state.budget
  },
  currentCost (state) {
    let cost = Object.keys(state.currentCar.parts || {}).reduce((result, part) => {
      console.log(result)
      return result + parseInt(state.currentCar.parts[part].price)
    }, 0)
    return cost
  }
}
const mutations = {
  NEXT_STEP (state) {
    state.currentStep++
  },
  PREV_STEP (state) {
    state.currentStep--
  },
  SET_CURRENT_CAR (state, car) {
    console.log('set car', car)
    state.currentCar = car
    state.currentCar.model = state.currentCar.model || getters.models(state)[0].model
    state.currentCar.year = state.currentCar.year || getters.years(state)[0].year
    state.currentCar.type = state.currentCar.type || getters.types(state)[0].type
    state.currentCar.style = state.currentCar.style || getters.styles(state)[0].style

    // Select default part
    let parts = getters.parts(state)
    if (parts.length > 0) {
      state.currentPart = parts[0].part
    }
    // set default part
    state.currentCar.parts = {}
    // select default color
    let colors = getters.colors(state)
    if (colors.length > 0) {
      state.currentCar.parts.color = colors[0]
    }
  },
  RESET (state) {
    state.currentCar = {}
    state.currentStep = 0
    state.currentPart = ''
    state.budget = 0
  },
  SET_BUDGET (state, budget) {
    state.budget = budget
  },
  SET_PART_INDEX (state, part) {
    state.currentPart = part
  },
  SET_CAR_PART (state, {part, data}) {
    let car = {...state.currentCar}
    let parts = car.parts
    if (!parts[part.toLowerCase()] || parts[part.toLowerCase()].name !== data.name) {
      parts[part.toLowerCase()] = data
    } else if (part.toLowerCase() !== 'color') {
      delete parts[part.toLowerCase()]
    }
    car.parts = parts
    state.currentCar = car
  }
}
const actions = {
  nextStep ({commit, state, dispatch}) {
    commit('NEXT_STEP')
  },
  prevStep ({commit, state, dispatch}) {
    commit('PREV_STEP')
  },
  setCar ({commit, state, dispatch}, car) {
    commit('SET_CURRENT_CAR', car)
  },
  setBrand ({commit, state, dispatch, getters}, brand) {
    if (brand === state.currentCar.brand) {
      return
    }
    /* let model = Object.keys(state.cars[brand])[0]
    let year = Object.keys(state.cars[brand][model])[0]
    let type = Object.keys(state.cars[brand][model][year])[0]
    let style = Object.keys(state.cars[brand][model][year][type])[0] */
    let model = getters.models[0].model
    let year = getters.years[0].year
    let type = getters.types[0].type
    let style = getters.styles[0].style
    let car = {
      brand,
      model,
      year,
      type,
      style
    }
    commit('SET_CURRENT_CAR', car)
  },
  setModel ({commit, state, dispatch, getters}, model) {
    if (model === state.currentCar.model) {
      return
    }
    let brand = state.currentCar.brand
    let car = {
      brand,
      model
    }
    commit('SET_CURRENT_CAR', car)
  },
  setYear ({commit, state, dispatch, getters}, year) {
    if (year === state.currentCar.year) {
      return
    }
    let brand = state.currentCar.brand
    let model = state.currentCar.model
    let car = {
      brand,
      model,
      year
    }
    commit('SET_CURRENT_CAR', car)
  },
  setType ({commit, state, dispatch, getters}, type) {
    if (type === state.currentCar.type) {
      return
    }
    let brand = state.currentCar.brand
    let model = state.currentCar.model
    let year = state.currentCar.year
    let car = {
      brand,
      model,
      year,
      type
    }
    commit('SET_CURRENT_CAR', car)
  },
  setStyle ({commit, state, dispatch, getters}, style) {
    if (style === state.currentCar.style) {
      return
    }
    let brand = state.currentCar.brand
    let model = state.currentCar.model
    let year = state.currentCar.year
    let type = state.currentCar.type
    let car = {
      brand,
      model,
      year,
      type,
      style
    }
    commit('SET_CURRENT_CAR', car)
  },
  setBudget ({commit, state, dispatch, getters}, budget) {
    commit('SET_BUDGET', budget)
  },
  setPart ({commit, state, dispatch, getters}, part) {
    commit('SET_PART_INDEX', part)
  },
  setCarPart ({commit, state, dispatch, getters}, {part, data}) {
    commit('SET_CAR_PART', {part, data})
  },
  reset ({commit, state, dispatch, getters}) {
    commit('RESET')
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
