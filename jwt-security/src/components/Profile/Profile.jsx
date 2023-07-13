import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <h1>Профіль користувача</h1>
                <div className={classes.profile}>
                    <h2>{props.currentUser.username}</h2>
                    <p>Email: user@example.com</p>
                    <p>Місто: Місто Користувача</p>
                    <p>Roles: {props.currentUser.roles.map(role => role + " ")}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
