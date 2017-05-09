<template>
  <div>
    <router-link :to="{name: 'Blog', params: {id:blog.id}}" v-for="(blog, index) in blogs" :key="index">
      <blog-list-item :blog="blog" ></blog-list-item>
    </router-link>
  </div>
</template>
<script>
import BlogListItem from './BlogListItem'
export default {
  components: {
    BlogListItem
  },
  data () {
    return {
      blogs: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.blogs = [
        {
          id: 1,
          thumbnail: 'static/img/cultures/1/header.jpg',
          title: 'Less is more // Brain Jensen\'s Fitted MK6 R.',
          author: 'Stancenation',
          created: new Date(2017, 0, 26),
          content: 'When the first iteration of the Volkswagen ,:R32 made its way to our side of the pond in 2004 it was a breath of fresh air for performance-based, water-cooled VW enthusiasts. The Haldex all-wheel-drive system coupled to the legendary 3.2 liter VR6 po...'
        },
        {
          id: 2,
          thumbnail: 'static/img/cultures/2/header.jpg',
          title: 'Tokyo Auto Salon 2017 Photo Coverage // Part 2',
          author: 'Stancenation',
          created: new Date(2017, 0, 23),
          content: 'We\'re back with the second part of our Tokyo Auto Salon coverage and this time we\'re sharing a few photos from Hayato Tsuchiya AKA HT3 images. Just like SEMA, it is next to impossible for a single photographer to capture everything especially when yo...'
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
</style>
