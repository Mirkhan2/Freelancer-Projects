import RadioInput from './RadioInput';
import React from './RadioInput';

function RadioInputGroup({register , watch, errors , configs}) {
    const {name , validationSchema = { } , options} = configs;
  return (
  <div>
    <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label , value}) => (
            <RadioInput
            label = {label} 
            value ={value}
             register ={register}
             name={name}
              id={value}
              key={value}
              
             validationSchema={validationSchema}
             
             errors={errors}
             watch={watch}
             />
        ))}
        </div>
        {errors && errors[name] && (
            <span className="text-error block text-sm mt-2 flex-1"> 
            {errors[name]?.name}
            </span>
        )}
        </div>
  );
}

export default RadioInputGroup;