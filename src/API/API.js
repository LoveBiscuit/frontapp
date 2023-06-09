import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    userFollow(userID) {
        return instance.post(`follow/${userID}`)
            .then(res => res.data)
    },
    userUnfollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(profileID) {
        return instance.get(`profile/${profileID}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}