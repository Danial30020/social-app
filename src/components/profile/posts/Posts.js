import React from 'react'
import foto from "../../../images/346856428420130.jpg"
import style from "./Posts.module.css"
import Post from "./post/Post"
let postText = React.createRef(React)
function Posts(props){
    let addPost =()=>{
        props.addPost(postText.current.value,
        postText.current.value=""
        )
    }
return(
<div className={style.posts}>
<h2>My posts</h2>
<input ref={postText}
 placeholder='enter the post' />
<button onClick={addPost}>Add post</button>
{/* <Post messages="hi" name="masc"/>
<Post messages="hui"/>
<Post messages="bn"/> */}
{/* {postsItem.map((e)=><Post messages={e.messages} id={e.id} />)} */}
{props.postsData.map((e)=><Post messages={e.text} id={e.id} like={e.like} />)} 
</div>
)
}
export default Posts
