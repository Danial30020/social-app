import style from "./Profile.module.css";
import foto from "../../images/346856428420130.jpg"
import Posts from "./posts/Posts";
import ProfileInfo from './profileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={style.profile}>
            {/* <div className={style.me}>
                <img src={foto} alt="profile mini photo" />
                <p>{props.name}</p>
            </div> */}
<ProfileInfo/>
            {/* <Posts messages={props.messages} /> */}
            <Posts postsData={props.postsData} addPost={props.addPost} />
            {/* <Posts ghj={props.postsData} /> */}
        </div>

    )

}

export default Profile