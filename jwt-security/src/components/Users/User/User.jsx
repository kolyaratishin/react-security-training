import classes from "./User.module.css";

const User = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.profile}>
                    <h2>Ім'я Користувача</h2>
                    <p>Email: user@example.com</p>
                    <p>Місто: Місто Користувача</p>
                </div>
            </div>
        </div>
    )
}

export default User;