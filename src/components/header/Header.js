import style from "./Header.module.css";
import logo from "../../images/1600w-qJptouniZ0A.webp"


function Header() {
    return (
        <div className={style.header}>
           <img src={logo}/>
        </div>
    )

}

export default Header