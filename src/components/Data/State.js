import { rerenderTree } from "../../render"
import Dialogs from "../dialogs/Dialogs"
import Profile from "../profile/Profile"
// import (rerenderTree)
let store={
_state:{
profilePage:{
    postsData:[
        {text:"Ку",id:1 ,like:2},
        {text:"даров",id:2,like:2},
        {text:"как дела?",id:3,like:2}
    ]
},
dialogsPage:{
    
    dialogNames : [{name:'Игорь', id:1},{name:'Маша', id:2},{name:'Петя', id:3},{name:'Ваня', id:4}],

    messageItems :[{message:'Привет',id:1},{message:'Го на Марс',id:2},{message:'Где мой чип?',id:3}]
}
    

},
addPost(postText){
let newPost={
    text:postText,
    id:4,
    likes:0
}
this._state.profilePage.postsData.unshift(newPost)
this._state.profilePage.neoPostText=""
console.log(state)
this.rerenderTree(this._state)
} 
}
export default store
