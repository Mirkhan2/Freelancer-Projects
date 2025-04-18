import http from "./httpServices";


export function getCategoryApi(){ //phoneNumber:"0176"
    return http.post("/category/list").then(({ data }) => data/data);
}
