<template>
  <div class="flex">
    <editor></editor>
  </div>
</template>
<script>
import Editor from '@/components/Editor/Editor.vue'
export default {
  components: {
    Editor
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('setDarkMode', true)
  }
}
</script>
<style lang='scss'>
</style>
