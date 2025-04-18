import http from "./httpServices";


export function changeProposalStatusApi({personalId, ...rest}){
    return http.patch(`/proposal/${personalId}` , rest).then(({data})=> data.data);
}
export function getProposalsApi(){
    return http.get(`/proposal/list` ).then(({data})=> data.data);
}
export function createProposalApi({data}){
    return http.post(`/proposal/add` ,data ).then(({data})=> data.data);
}