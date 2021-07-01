import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {
    addPostActionCreator,
    getStatusThunk,
    profileThunk,
    setUserProfile,
    updateStatusThunk
} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.profileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId:state.auth.userId,
        isAuth: state.auth.isAuth
    }
);

export default compose(connect(mapStateToProps, {
        setUserProfile,
        addPostActionCreator,
        profileThunk,
        getStatusThunk,
        updateStatusThunk
    }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)


