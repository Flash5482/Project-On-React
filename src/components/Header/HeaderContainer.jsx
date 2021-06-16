import React from "react";
import Header from "./Header";
import {setUserData, setUserDataFromProfile} from "../../redux/authReducer";
import {connect} from "react-redux";
import {getAuth} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {

        getAuth().then(response => {
            if (response.resultCode === 0) {
                /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile`)
                     .then(response => {
                         this.props.setUserDataFromProfile(response.data);
                     });*/
                let {id, login, email} = response.data;
                this.props.setUserData(id, email, login);
            }
        });
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


export default connect(mapStateToProps, {setUserData, setUserDataFromProfile})(HeaderContainer);