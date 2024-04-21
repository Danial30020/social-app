
import React from 'react'
import foto from "../../../../images/346856428420130.jpg"
import style from "./Post.module.css"
function Post(props){
return(

<div className={style.post}>
<img src={foto} alt='profile mini photo' />
<span>{props.name}</span>
<p>{props.messages}</p>
</div>

)
}
export default Post
