<template>
    <div class="ui one column grid">
        <div class="column">
            <div class="ui centered card">
                <div class="content">
                    <div class="right floated meta"> utilisateur : {{post.userId}}</div>
                    <img class="ui avatar image" src="src/assets/question_mark.png">
                </div>
                <div class="content">
                    <div v-if="isEdit" class="header ">
                        <input type ="text"  v-model="post.title">
                    </div>
                    <div v-else class="header ">
                        <router-link :to="{ name: 'post', params: { id: post.id }}">                {{post.title}}
                    </router-link>
                </div>
            </div>
            <div class="content floated right">
                <i class="write square icon"></i>
                <div v-if="isEdit" class="header ">
                    <textarea  v-model="post.body"></textarea>
                </div>
                <div v-else>
                    {{post.body}}
                </div>
                <div class="right floated left aligned six wide column">
                    <router-link :to="{ name: 'comments', params: { id: post.id }}">
                    <button class="ui segment icon basic button ">
                        <i class="comments icon"></i>
                    </button>
                </router-link>

            </div>


        </div>
        <div class="extra content">
            <div class=" center aligned grid">
                <div v-if="!isEdit">
                    <div class="ui basic green button" @click="modifier(post)">Modification</div>
            </div>
            <div v-else>
                <div class="ui basic green button" @click="save(post)">Sauvegarder</div>
        </div>



        <div class="ui basic red button" @click="supprimer(post)">Supprimer</div>
</div>

</div>
</div>
</div>

</div>
</template>

<script>
    import store from './PostsStore.js'

    export default
    {
        store: store,
        data ()
        {
            return {
            post: "",
            isEdit : false
            }
        },

        mounted()
        {
            this.$post = this.$resource('posts/'+this.$route.params.id)
            this.$post.query().then((response)=> {
            this.post=response.data
            }, (response) => {
            console.log('erreur',response)
            })
        },


        methods:
        {
            //Permet l'enregistrement
            save(post)
                {
                this.isEdit = false
                this.$post.update({id: 1}).then((response)=> {

                }, (response) => {
                console.log('erreur',response)
                })
            },
            //Permet de modifier le post
            modifier()
            {
                this.isEdit = true
                this.$post.query().then((response)=> {
                this.posts=response.data
                }, (response) => {
                console.log('erreur',response)
                })
            },
            //Permet de supprimer le post

            supprimer(post)
            {
                this.$post.remove({id: this.$route.params.id}).then((response)=> {
                this.posts = this.posts.filter(u=> u !== post)

                 }, (response) => {
                console.log('erreur',response)
                })
            }

        }
    }
</script>