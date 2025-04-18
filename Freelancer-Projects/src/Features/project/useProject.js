import { useQuery } from "@tanstack/react-query";
import { getProjectapi } from "../../services/projectService";
import {useParams} from "react-router-dom";

export default function useOProject(){
    const {id} = useParams();

    const {data, isLoading} =  useQuery({
        queryKey:["project" , id],
        queryFn: () => getProjectapi(id),
        return: false,
    });


    const{projects } = data || {};

    return {isLoading , projects};
}