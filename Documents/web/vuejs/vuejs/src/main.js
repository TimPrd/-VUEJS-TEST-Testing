import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)


//Définition des chemins
const router= new VueRouter({
    mode:'history',
    routes:[{
        //Accueil/Root
        path:'/',
        //Renvoie le composant avec tout les posts
        component: require('./components/Posts.vue')

    },{
        //Post unique
        name:'post',
        path:'/posts/:id',
        //renvoie vers un seul post
        component: require('./components/Post.vue')
    },
    {
        //Commentaires
        name:'comments',
        path:'/posts/:id/comments',
        //renvoie vers les commentaires du post
        component: require('./components/Comments.vue')
    }]
})


//Définition de la racine pour jsonplaceholder (plus facilement modifiable en cas de changement)
Vue.http.options.root = 'http://jsonplaceholder.typicode.com'

new Vue({
  el: '#app',
    router,
  render: h => h(require('./App.vue'))
})
