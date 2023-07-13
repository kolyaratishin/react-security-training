import {Component} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Profile currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
})(ProfileContainer);