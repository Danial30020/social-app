import React from 'react'
import foto from "../../../images/346856428420130.jpg"
import style from "./Posts.module.css"
import Post from "./post/Post"
let postsItem = [{ messages:"hi", id:1},{ messages:"hid", id:2}, { messages:"ffi", id:3}]
function Posts(){
return(
<div className={style.posts}>
<h2>My posts</h2>
<input placeholder='enter the post' />
<button>Add post</button>
{/* <Post messages="hi" name="masc"/>
<Post messages="hui"/>
<Post messages="bn"/> */}
{postsItem.map((e)=><Post messages={e.messages} id={e.id} />)}

</div>
)
}
export default Posts
