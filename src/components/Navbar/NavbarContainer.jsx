import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {

    return {
        friendsData: state.navbar.friendsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;