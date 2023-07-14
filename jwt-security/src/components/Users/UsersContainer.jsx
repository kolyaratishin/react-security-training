import {Component} from "react";
import {connect} from "react-redux";
import {getAllUsers} from "../../state/user-reducer";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <Users users={this.props.users} isAuth={this.props.isAuth}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.user.usersList,
        isAuth: state.user.currentUser.isAuth,
    }
}

export default connect(mapStateToProps, {
    getAllUsers
})(UsersContainer);