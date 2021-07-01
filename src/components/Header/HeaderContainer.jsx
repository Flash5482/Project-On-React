import React from "react";
import Header from "./Header";
import {getAuthUserDataThunk, logOutThunk, setUserData, setUserDataFromProfile} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {

        this.props.getAuthUserDataThunk();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId,
    userDate: state.auth.userDate
});


export default connect(mapStateToProps, {setUserData, getAuthUserDataThunk, setUserDataFromProfile,logOutThunk})(HeaderContainer);