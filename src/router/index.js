import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function load (component) {
  return () => System.import(`@/pages/${component}.vue`)
}
export default new Router({
  routes: [
    {
      path: '/', name: 'Home', component: load('Home')
    },
    {
      path: '/customize', name: 'Customize', component: load('Customize')
    },
    {
      path: '/customize/editor', name: 'Editor', component: load('Editor')
    },
    {
      path: '/inspire', name: 'Inspire', component: load('Inspire')
    },
    {
      path: '/culture',
      name: 'Culture',
      component: load('Culture')
    },
    {
      path: '/culture/:id',
      name: 'Blog',
      component: load('Blog')
    },
    {
      path: '/contact', name: 'Contact', component: load('Contact')
    }
  ]
})
