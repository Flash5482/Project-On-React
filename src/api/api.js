import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "faa2fab4-2a99-4190-a276-f837369aafcc"
    }
});

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    ).then(response => {
        return response.data;
    });
}
export const getAuth = () => {
    return instance.get(`/auth/me`).then(response => {
            return response.data
        }
    )
}
export const followUser = (userId) => {
    return instance.post(`follow/`+userId).then(response => {
            return response.data
        }
    )
}
export const unFollowUser = (userId,data=null) => {
    return instance.delete(`follow/`+userId,data).then(response => {
            return response.data
        }
    )
}