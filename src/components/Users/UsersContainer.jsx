import {connect} from "react-redux";
import React from "react";
import User from "./User/User";
import Spinner from '../../img/Spinner-1s-200px.svg'
import Styles from './Styles.module.css'
import {
    changeCurrentPage,
    followThunk,
    getUsersThunk,
    toggleIsFollowingProgress,
    unfollowThunk
} from "../../redux/userReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        /* this.props.toggleIsFetching(true);
         usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize).then(response => {
             this.props.toggleIsFetching(false);
             this.props.setUsers(response.items);
             this.props.setTotalUserCount(response.totalCount);
         });*/
        this.props.getUsersThunk(this.props.state.currentPage, this.props.state.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.state.pageSize);

        /*  this.props.toggleIsFetching(true);
          this.props.changeCurrentPage(pageNumber);
          usersAPI.getUsers(pageNumber, this.props.state.pageSize)
              .then(response => {
                  this.props.toggleIsFetching(false);
                  this.props.setUsers(response.items);
              });*/
    }

    render() {
        return <>
            {this.props.state.isFetching ? <div className={Styles.spinner}><img src={Spinner}/></div> : null}
            <User onPageChanged={this.onPageChanged}
                  state={this.props.state}
                  unfollow={this.props.unfollowThunk}
                  follow={this.props.followThunk}
                  toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    }
};

export default connect(mapStateToProps, {
    getUsersThunk,
    followThunk,
    unfollowThunk,
    changeCurrentPage,
    toggleIsFollowingProgress
})(UsersContainer);



