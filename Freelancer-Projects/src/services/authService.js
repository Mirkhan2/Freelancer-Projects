import http from "./httpServices";


export function getOtp(data){ //phoneNumber:"0176"
    return http.post("/user/get-otp" , data).then(({ data }) => data/data);
}

export function checkOtp(data){ //phoneNumber:"0176"
    return http.post("/user/check-otp" , data)
}
export function CompleteProfile(data){ //phoneNumber:"0176"
    return http.post("/user/complete-profile " , data)
    .then(({data} ) => data.data);
}
export function getUser(){ //phoneNumber:"0176"
    return http.post("/user/profile").then(({ data }) => data.data);
}
export function logoutApi(){ //phoneNumber:"0176"
    return http.post("/user/logout").then(({data}) => data.data );
}




