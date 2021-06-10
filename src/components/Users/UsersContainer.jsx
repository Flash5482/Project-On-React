import {connect} from "react-redux";
import {
    changeCurrentPageActionCreator,
    followActionCreator,
    setTotalCountUserActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/userReducer";
import React from "react";
import axios from "axios";
import User from "./User/User";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (<User onPageChanged={this.onPageChanged}
                      state={this.props.state}
                      unFollow={this.props.unFollow}
                      follows={this.props.follows}/>);
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follows: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageActionCreator(currentPage));
        },
        setTotalUserCount: (totalCountUser) => {
            dispatch(setTotalCountUserActionCreator(totalCountUser));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



