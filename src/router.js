import Vue from 'vue'
import VueRouter from 'vue-router'

import Creation from './Creation'
import Filmlist from './Filmlist'
import About from './About'
import Fiche from './Fiche'
import Categorielist from './Categorielist'



Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        {path: "/", component: app},
        {path: "/filmlist", component: Filmlist},
        {path: "/creation", component: Creation},
        {path: "/about", component: About},
        {path: "/fiche/:nomdufilm", name:'fiche', component: Fiche},
        {path: "/categorielist", component: Categorielist},
        
        
    ]
})