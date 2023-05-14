import axios from "axios";
import { unfollow } from "../redux/users-reducer";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers: {
    //     "API-KEY": "vcvcvcc44"
    // }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {return response.data});
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/2` + userId);
    }
};

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}
 

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`,)
        .then(response => {return response.data});
};


//----before 
// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true,
//         })
//         .then(response => {return response.data});
// };