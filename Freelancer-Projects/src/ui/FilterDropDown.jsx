import React from 'react'
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({options , filterField}) {
    const [searchParams , setSearchParams ] =useSearchParams();
    const filtervalue = searchParams.get(filterField) || "";

    function handleChange(e){
        searchParams.set(filterField , e.target.value);
        setSearchParams(searchParams);
    }

  return (
   <Select onChange={handleChange} value={filtervalue } options={options} />
  );
}

export default FilterDropDown;