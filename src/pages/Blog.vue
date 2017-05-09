<template>
  <div>
    <blog-header :blog="blog"></blog-header>
    <blog :blog="blog"></blog>
    <related-post :posts="blog.relatedPosts"></related-post>
    <footerbar></footerbar>
  </div>
</template>
<script>
import BlogHeader from '@/components/Blog/BlogHeader.vue'
import Blog from '@/components/Blog/Blog.vue'
import RelatedPost from '@/components/Blog/RelatedPost.vue'
import Footerbar from '@/components/Footerbar'
export default {
  components: {
    BlogHeader,
    Blog,
    RelatedPost,
    Footerbar
  },
  data () {
    return {
      blog: {}
    }
  },
  created () {
    this.$store.dispatch('setDarkMode', true)
    this.fetchData()
  },
  methods: {
    fetchData () {
      let blogs = [{
        id: 1,
        cover: 'static/img/cultures/1/header.jpg',
        title: 'LESS IS MORE // BRIAN JENSEN’S FITTED CITY',
        subtitle: 'MORGAN WILSONFEBRUARY 18, 2017AIRBAGSCAR FEATURESEUROFLUSH',
        body: [
          {type: 'paragraph', data: 'When the first iteration of the Volkswagen .:R32 made its way to our side of the pond in 2004 it was a breath of fresh air for performance-based, water-cooled VW enthusiasts. The Haldex all-wheel-drive system coupled to the legendary 3.2 liter VR6 power plant was a match made in heaven when it came to tuning capabilities. Plus it looked really damn cool. Since then Volkswagen has released its special edition hot-hatch every four years, aside from the Mk7 which hit stateside dealer lots last year. Over time various changes have been made to this iconic nameplate. From the DSG transmission being the only available gearbox in 2008’s model to the now turbocharged four pot examples of the last two generations, Wolfsburg has always kept us guessing, but never seemed to disappoint. Much like Brian Jensen.'},
          {type: 'images', data: ['static/img/cultures/1/1.jpg']},
          {type: 'paragraph', data: 'While a majority of cars in the US scene are more show than go these days it was nice to see that Brian made time to fit a healthy amount of go-fast parts under the bonnet. The car is stage 2+ with full bolt-ons and produces 330 horsepower to all four corners. The exhaust note may not mimic the signature sound of an angered Chewbacca, but the CTS turbo back ensures a menacing sound from the 2.0 liter nonetheless.'},
          {type: 'images', data: ['static/img/cultures/1/2.jpg', 'static/img/cultures/1/3.jpg', 'static/img/cultures/1/4.jpg']}
        ],
        relatedPosts: [
          {
            cover: 'static/img/cultures/1/relatedPosts/1.jpg',
            title: 'Tokyo auto salon 2017 photo coverage // part 2'
          },
          {
            cover: 'static/img/cultures/1/relatedPosts/2.jpg',
            title: 'Tokyo auto salon 2017 // the parking finds'
          }
        ]
      }, {
        id: 2,
        cover: 'static/img/cultures/2/header.jpg',
        title: 'LESS IS MORE // BRIAN JENSEN’S FITTED CITY',
        subtitle: 'MORGAN WILSONFEBRUARY 18, 2017AIRBAGSCAR FEATURESEUROFLUSH',
        body: [
          {type: 'paragraph', data: 'When the first iteration of the Volkswagen .:R32 made its way to our side of the pond in 2004 it was a breath of fresh air for performance-based, water-cooled VW enthusiasts. The Haldex all-wheel-drive system coupled to the legendary 3.2 liter VR6 power plant was a match made in heaven when it came to tuning capabilities. Plus it looked really damn cool. Since then Volkswagen has released its special edition hot-hatch every four years, aside from the Mk7 which hit stateside dealer lots last year. Over time various changes have been made to this iconic nameplate. From the DSG transmission being the only available gearbox in 2008’s model to the now turbocharged four pot examples of the last two generations, Wolfsburg has always kept us guessing, but never seemed to disappoint. Much like Brian Jensen.'},
          {type: 'images', data: ['static/img/cultures/2/1.jpg']},
          {type: 'paragraph', data: 'While a majority of cars in the US scene are more show than go these days it was nice to see that Brian made time to fit a healthy amount of go-fast parts under the bonnet. The car is stage 2+ with full bolt-ons and produces 330 horsepower to all four corners. The exhaust note may not mimic the signature sound of an angered Chewbacca, but the CTS turbo back ensures a menacing sound from the 2.0 liter nonetheless.'},
          {type: 'images', data: ['static/img/cultures/2/2.jpg', 'static/img/cultures/2/3.jpg', 'static/img/cultures/2/4.jpg']}
        ],
        relatedPosts: [
          {
            cover: 'static/img/cultures/2/relatedPosts/1.jpg',
            title: 'Tokyo auto salon 2017 photo coverage // part 2'
          },
          {
            cover: 'static/img/cultures/2/relatedPosts/2.jpg',
            title: 'Tokyo auto salon 2017 // the parking finds'
          }
        ]
      }]
      this.blog = blogs.filter((blog) => { return blog.id === parseInt(this.$route.params.id) })[0]
      console.log(this.blog, this.$route.params.id)
    }
  }
}
</script>
<style lang='scss'>
</style>
