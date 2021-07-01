import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9391724f-64ec-40e6-8148-159b3093c6f5"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data;
        });
    },
    getAuth() {
        return authAPI.getAuthAPI()
    },
    followUser(userId) {
        return instance.post(`follow/` + userId).then(response => {
                return response.data
            }
        )
    },
    unFollowUser(userId, data = null) {
        return instance.delete(`follow/` + userId, data).then(response => {
                return response.data
            }
        )
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
                return response.data
            }
        )
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
}
export const authAPI = {
    getAuthAPI(userId) {
        return instance.get(`/auth/me`).then(response => {
                return response.data
            }
        )
    },

    Login(email,password,rememberMe = false) {
        return instance.post(`/auth/login`,{email,password,rememberMe});
    },

    LogOut(userId) {
        return instance.delete(`/auth/login`);
    }

}


