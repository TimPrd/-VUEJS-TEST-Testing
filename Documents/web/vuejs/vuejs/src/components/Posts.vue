<template>
    <div class="ui one column grid">
        <div class="ui centered card">
            <div class=" ui  centered tertiary   segment">
                <div class="content">
                    <div class="header ">
                        <div class="ui center aligned "> Nouveau Post</div>
                        <input type="text" placeholder="Titre" v-model="title"> </input>{{title}}
                    </div>
                </div>

                <div class="content floated right">
                    <i class="write square icon"></i>
                    <div class="header ">
                        <textarea placeholder="Corps du text " v-model="body"></textarea>
                        {{body}}
                    </div>
                </div>


                <div class="extra content">
                    <div class=" center aligned grid">
                        <div class="ui basic green button" @lick="poster(title, body)">Publier</div>
                    </div>
                </div>
            </div>
        </div>


    <div class="column" v-for="post in posts">
        <div class="ui centered card">
            <div class="content">
                <div class="right floated meta"> utilisateur : {{post.userId}}</div>
                <img class="ui avatar image" src="src/assets/question_mark.png">
            </div>
            <div class="content">
                <div v-if="isEdit" class="header ">
                    <input type="text" v-model="post.title">
                </div>
                <div v-else class="header ">
                    <router-link
                    :to="{ name: 'post', params: { id: post.id }}">                {{post.title}}
                </router-link>
            </div>
        </div>
        <div class="content floated right">
            <i class="write square icon"></i>
            <div v-if="isEdit" class="header ">
                <textarea v-model="post.body"></textarea>
            </div>
            <div v-else>
                {{post.body}}
            </div>
            <div class="right floated left aligned six wide column">
                <router-link
                :to="{ name: 'comments', params: { id: post.id }}">
                <button class="ui segment icon basic button ">
                    <i class="comments icon"></i>
                </button>
            </router-link>

        </div>


    </div>
    <div class="extra content">
        <div class=" center aligned grid">
            <div v-if="!isEdit">
                <div class="ui basic green button" @click="modifier(post)">Modification  </div>
            </div>
            <div v-else>
                <div class="ui basic green button" @click="save(post)">Sauvegarder   </div>
            </div>
            <div class="ui basic red button"        @click="supprimer(post)">Supprimer</div>
        </div>

    </div>
</div>
</div>

</div>
</template>

<script>
    //import du store
    import store from './PostsStore.js'

    export default
    {
        store : store,
        //données
        data ()
        {
            return {
            posts: [],
            isEdit : false,
            title:'',
            body:''
            }
        },

        mounted()
        {
            this.$post = this.$resource('posts{/id}')
            this.$post.query().then((response)=> {
            this.posts=response.data
            }, (response) => {
            console.log('erreur',response)
            })
        },
        //fonctions
        methods:
        {

            //Permet l'enregistrement
            save(post)
            {
                //redéfinition du bouton sur "modifier"
                this.isEdit = false
                //On met à jour les informations
                this.$post.update({id: post.id}).then((response)=> {

            }, (response) => {
                console.log('erreur',response)
            })
            },

            //Permet de modifier un post
            modifier()
            {
                //On met le bouton sur "Sauvegarder"
                this.isEdit = true
                this.$post.query().then((response)=> {
                this.posts=response.data
            }, (response) => {
                console.log('erreur',response)
            })
            },

            //Permet de poster un post
            poster(title,body)
            {
                this.$post.post({id: (this.posts.length+1), title:title, body:body}).then((response)=> {

            }, (response) => {
                console.log('erreur',response)
            })
            },

            //permet de supprimer un post
            supprimer(post)
            {
                //retire le post en fonction de l'id passé en paramètre
                this.$post.remove({id: post.id}).then((response)=> {
                //on filtre pour ne plus afficher le post
                this.posts = this.posts.filter(u=> u !== post)

            }, (response) => {
                console.log('erreur',response)
            })

            }

        }
    }
</script>