import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div className={classes.container}>
                <h1>Профіль користувача</h1>
                <div className={classes.profile}>
                    <h2>Ім'я Користувача</h2>
                    <p>Email: user@example.com</p>
                    <p>Місто: Місто Користувача</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
