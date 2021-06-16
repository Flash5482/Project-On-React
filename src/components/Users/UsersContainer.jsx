import {connect} from "react-redux";
import React from "react";
import User from "./User/User";
import Spinner from '../../img/Spinner-1s-200px.svg'
import Styles from './Styles.module.css'
import {
    changeCurrentPage,
    follows,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/userReducer";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.state.currentPage, this.props.state.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUserCount(response.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.changeCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.state.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        return <>
            {this.props.state.isFetching ? <div className={Styles.spinner}><img src={Spinner}/></div> : null}
            <User onPageChanged={this.onPageChanged}
                  state={this.props.state}
                  unFollow={this.props.unFollow}
                  follows={this.props.follows}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersPage
    }
};

export default connect(mapStateToProps, {
    follows,
    unFollow,
    setUsers,
    changeCurrentPage,
    setTotalUserCount,
    toggleIsFetching
})(UsersContainer);



