export default {
  findByName (arr, name) {
    return arr.filter((a) => { return a.name === name })[0]
  }
}
