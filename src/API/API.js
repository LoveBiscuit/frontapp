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
    },
    getStatus(profileID) {
        return instance.get(`profile/status/${profileID}`)
            .then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    userLogin(data) {
        return instance.post(`auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe
        })
            .then(res => res.data)
    },
    userLogout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}