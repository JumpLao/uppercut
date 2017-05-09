<template>
  <section class="section flex">
    <div class="floating-top has-text-centered">
      <part-selector v-if="currentStepIndex === 2"></part-selector>
    </div>
    <div class="flex editor-wrapper" style="padding:20px;width:100%;padding-top:40px;">
      <div class="columns flex-expand">
        <div class="padding">
          <stepper></stepper>
          <budget max=1000000 v-if="currentStepIndex===2 || currentStepIndex === 3"></budget>
          <part-summary v-if="currentStepIndex === 3"></part-summary>
        </div>
        <div class="column has-text-right">
          <vehicle-selector class="" v-if="currentStepIndex===0"></vehicle-selector>
          <styleinfo v-if="currentStepIndex===1"></styleinfo>
          <part-summary-right v-if="currentStepIndex===3"></part-summary-right>
          <select-dealer v-if="currentStepIndex===4"></select-dealer>
        </div>
      </div>
      <div class="has-text-centered">
        <styleselector v-if="currentStepIndex===1"></styleselector>
        <part-picker-container v-if="currentStepIndex===2">
        </part-picker-container>
        <pagination></pagination>
      </div>
    </div>
    <div class="image-container">
      <div class="step4-bg" v-if="currentStepIndex===3"></div>
      <vehicle-select-image-preview v-if="currentStepIndex === 0"></vehicle-select-image-preview>
      <styleselectimagepreview v-if="currentStepIndex === 1"></styleselectimagepreview>
      <part-select-image-preview v-if="currentStepIndex === 2 || currentStepIndex === 3"></part-select-image-preview>
    </div>
  </section>
</template>
<script>
import Stepper from './Stepper'
import Pagination from './Pagination'
import VehicleSelector from './VehicleSelector'
import Styleselector from './StyleSelector'
import Styleinfo from './StyleInfo'
import Budget from './Budget'
import VehicleSelectImagePreview from './VehicleSelectImagePreview'
import Styleselectimagepreview from './StyleSelectImagePreview'
import PartSelector from './PartSelector'
import PartPickerContainer from './PartPickerContainer'
import PartSelectImagePreview from './PartSelectImagePreview'
import PartSummary from './PartSummary'
import PartSummaryRight from './PartSummaryRight'
import SelectDealer from './SelectDealer'
export default {
  components: {
    Stepper,
    Pagination,
    VehicleSelector,
    Styleselector,
    Styleinfo,
    Budget,
    VehicleSelectImagePreview,
    Styleselectimagepreview,
    PartSelector,
    PartPickerContainer,
    PartSelectImagePreview,
    PartSummary,
    PartSummaryRight,
    SelectDealer
  },
  created () {
    this.$store.dispatch('Editor/reset')
    this.$store.dispatch('Editor/setBudget', 150000)
  },
  computed: {
    currentStepIndex () {
      return this.$store.getters['Editor/currentStepIndex']
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
  .section {
    position: relative; 
    background-color:$background;
    width:100vw;
    top: 0;
    left: 0;
    z-index: 0;
    padding-top: 0px !important;
  }
  .floating-top{
    position:absolute;
    width:100%;
    top:0px;
  }
  .image-container{
    position:absolute;
    width:100%;
    height:100%;
    z-index: -1;
    top:0px;
    left:0px;
  }
  .editor-wrapper{
    flex-direction: column;
  }
  .flex-expand{
    -webkit-box-flex: 1;   /* OLD - iOS 6-, Safari 3.1-6 */
               /* For old syntax, otherwise collapses. */
    -webkit-flex: 1;       /* Safari 6.1+. iOS 7.1+, BB10 */
    -ms-flex: 1;           /* IE 10 */
    flex: 1;               /* NEW, Spec - Firefox, Chrome, Opera */
  }
  .step4-bg{
    width:100%;
    height:100%;
    background-image: url(/static/img/editor/step4.png);
    background-size: cover;
    background-position: center center;
    position:absolute;
    top:0px;
    left:0px;
    z-index:-1;
  }
  .padding{
    padding:0.75rem
  }
</style>
