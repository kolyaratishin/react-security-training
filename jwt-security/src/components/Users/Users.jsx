import classes from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
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