import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3a8e4cf8-d55d-4a75-8794-f42b20e9724f'
    },
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
    },
    updateAvatar(avatarFile) {
        const formData = new FormData();
        formData.append('image', avatarFile,)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    updateProfile(data) {
        return instance.put(`profile`, {
            fullName: data.fullName,
            aboutMe: data.aboutMe,
            contacts: data.contacts,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription
        })
            .then(res => res.data)
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
            .then(res => res.data)
    },
    userLogin(data) {
        return instance.post(`auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        })
            .then(res => res.data)
    },
    userLogout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}