import classes from "./User.module.css";

const User = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.profile}>
                    <h2>{props.user.username}</h2>
                    <p>Email: {props.user.email}</p>
                    <p>Місто: Місто Користувача</p>
                    <p>Role: {props.user.role}</p>
                </div>
            </div>
        </div>
    )
}

export default User;