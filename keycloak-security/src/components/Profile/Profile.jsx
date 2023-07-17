import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div className={classes.container}>
                <h1>Профіль користувача</h1>
                <div className={classes.profile}>
                    <h2>USERNAME</h2>
                    <p>Email: user@example.com</p>
                    <p>Місто: Місто Користувача</p>
                    <p>Roles: ROLES</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
