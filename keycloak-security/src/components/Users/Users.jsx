import classes from "./Users.module.css";
import User from "./User/User";

const Users = () => {
    const users = [
        {username: "user1", email: "user1@gmail.com", role: "ADMIN"},
        {username: "user2", email: "user2@gmail.com", role: "ADMIN"},
        {username: "user3", email: "user3@gmail.com", role: "USER"}
    ]
    return (
        <div>
            <h1 className={classes.header}>USER LIST</h1>
            <div className={classes.list}>
                {users.map(user => <User user={user}/>)}
            </div>
        </div>
    )
}

export default Users;