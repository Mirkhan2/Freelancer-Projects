import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryServices";

export default function useCategories(){
    const {data, isLoading} = useQuery({

    })
    useQuery({
        queryKey:["categories"],
        queryFn: getCategoryApi,
    });
    const {categories : rawCategories = [] } = data || {};

    //
    const categories = rawCategories.map(item => ({
        label: item.title,
        value:item._id,
    }));

    const transformCategories = rawCategories.map(item => ({
        label: item.title,
        value:item.englishTitle,
    }));
    return {isLoading , categories, transformCategories}
}