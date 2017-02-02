# PostVueJs

This Application enables you to display fake data (fake articles,comments..) .
It is created with VUEJS2 and Semantic Ui

# Installation

## NPM
1. Download it as zip
2. unzip and extract it and go to Documents/web/vuejs/vuejs/
3. open terminal in this folder 
4. exec 'npm i'
5. exec 'npm run dev'

## Dev mode => localhost:8080
npm run dev

## Build mode for production
npm run build


# Usage 

The main page shows you all posts and enables you to post your own article (the first box which is in grey)
When you click on any **'title'** (blue link) you are redirected to the page of the article 
If you'd like to **delete** the post you can click on 'supprimer'
Otherwise you can **change** your post by clicking 'Modifier' and then 'Sauvegarder'
You can also check all the comments by clicking on the icon 'comments' in the post

# TodoList
What have been done : 
- [x] Using VUEJS2
- [x] Using Vue-loader
- [x] Using Vue-resource
- [x] Request to https://jsonplaceholder.typicode.com
  - [x] GET  /posts
  - [x] GET  /posts/1
  - [x] GET  /posts/1/comments
  - [x] POST /posts
  - [x] PUT  /posts/1
  - [x] DELETE /posts/1  
- [ ] Using vuex (being done currently)


#Pictures

![alt tag](https://github.com/TimPrd/VueJs2/blob/master/Posts.png)
(Add a post and display all others)
------------------------------------------------------------------
![alt tag](https://github.com/TimPrd/VueJs2/blob/master/Modification.png)
(Edit function)
------------------------------------------------------------------
![alt tag](https://github.com/TimPrd/VueJs2/blob/master/Commentaires.png)
(Comments)
