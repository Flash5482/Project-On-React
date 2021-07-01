import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}



export default compose(connect(mapStateToProps,
    {addPostActionCreator})
)(MyPost);