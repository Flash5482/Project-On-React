const follow = 'FOLLOW';
const unFollow = 'UNFOLLOW';
const setUsers = 'SET_USERS';
const changeCurrentPage = 'CHANGE_CURRENT_PAGE';
const setUsersCount = 'SET_USERS_COUNT';


let initialState = {
    usersDate: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                usersDate: state.usersDate.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: true};
                    }
                    return item;
                })
            }
        case unFollow:
            return {
                ...state,
                usersDate: state.usersDate.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: false};
                    }
                    return item;
                })
            }
        case setUsers:
            return {
                ...state,
                usersDate: action.users
            }
        case changeCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setUsersCount:
            return {
                ...state,
                totalUserCount: action.totalCountUser
            }

        default :
            return state;
    }


}

export const followActionCreator = (userId) => ({type: follow, userId: userId});
export const unFollowActionCreator = (userId) => ({type: unFollow, userId: userId});
export const setUsersActionCreator = (users) => ({type: setUsers, users: users});
export const changeCurrentPageActionCreator = (currentPage) => ({type: changeCurrentPage, currentPage});
export const setTotalCountUserActionCreator = (totalCountUser) => ({type: setUsersCount, totalCountUser});


export default userReducer;