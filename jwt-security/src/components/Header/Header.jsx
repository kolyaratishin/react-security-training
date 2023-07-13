import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.content_links}>
                <div className={classes.item}>
                    <NavLink to={"/profile"}  className={isActive}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={"/users"}  className={isActive}>User List</NavLink>
                </div>
            </div>
        </header>
    )
}

function isActive({isActive, isPending}) {
    return isPending ? classes["pending"] : isActive ? classes["active"] : "";
}

export default Header;
