import Vuex from 'vuex'

//Constante pour définir le state
const state = {
    post: [{title:'',body:''}],
    posts:[],
    isEdit : false,

}
//Constante pour regrouper les mutations
const mutations ={
    //delete
    DEL_POST: (state, post) => {
        state.posts.$remove({
            posts:post,
            isEdit : false

        })
    },
    //ajout
    ADD_POST: (state, title, body) => {
        state.post.push({
            title:title,
            body:body
        })
    }
}

//getters
const getters={
}


//Constante pour les actions => mutations
const actions={
    delPost:(store,post) => {
        store.commit('DEL_POST',post)
    }
}


export default new Vuex.Store({
    state:    state,
    mutations:mutations,
    getters:  getters,
    actions:  actions,
})

