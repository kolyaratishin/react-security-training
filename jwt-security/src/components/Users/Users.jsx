import classes from "./Users.module.css";
import User from "./User/User";

const Users = () => {
    return (
        <div>
            <h1 className={classes.header}>USER LIST</h1>
            <div className={classes.list}>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    )
}

export default Users;