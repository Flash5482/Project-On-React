const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = "TOOGGLE_IS_FETCHING"

let initialState = {
    usersDate: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersDate: state.usersDate.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: true};
                    }
                    return item;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                usersDate: state.usersDate.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: false};
                    }
                    return item;
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersDate: action.users
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCountUser
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default :
            return state;
    }
}

export const follows = (userId) => ({type: FOLLOW, userId: userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalCountUser) => ({type: SET_USERS_COUNT, totalCountUser});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default userReducer;