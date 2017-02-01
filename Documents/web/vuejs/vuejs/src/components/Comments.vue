<template>
    <div class="ui row  ">
        <div class="ui centered card">
            <div v-for="post in posts">
                <div class="content">
                    <div class="right floated meta"> De : {{post.email}}</div>
                    <i class ="pin icon"></i>
                </div>
                <div class="content">
                    <div class="ui  violet small header">{{post.name}}</div>
                </div>
                <div class="content floated right">
                    <i class="write square icon"></i> {{post.body}}
                </div>
                <div class="ui divider"></div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data () {
            return {
                posts: [],
            }
        },

        mounted(){
            //Remplissage du tableau "posts" avec les commentaires suivant le bon chemin de l'api Jsonplaceholder
            // this.$route.params.id => permet de connaitre l'id du post
            this.$post = this.$resource('posts/'+this.$route.params.id+'/comments')
            this.$post.query().then((response)=> {
                this.posts=response.data
            }, (response) => {
                //gestion d'erreur
                console.log('erreur',response)
            })
        },

    }
</script>