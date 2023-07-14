import classes from "./Users.module.css";
import User from "./User/User";
import {Navigate} from "react-router-dom";

const Users = (props) => {
    if (!props.isAuth){
        return <Navigate to={"/login"}/>
    }
    return (
        <div>
            <h1 className={classes.header}>USER LIST</h1>
            <div className={classes.list}>
                {props.users.map(user => <User user={user}/>)}
            </div>
        </div>
    )
}

export default Users;