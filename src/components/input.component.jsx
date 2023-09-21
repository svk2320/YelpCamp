import React from "react";

const Input = ({label, type, placeholder, values, InputChanges}) => {
  return (
    <div>
      <label>{label}</label> <br/>
      <input
        type={type}
        // value={values}
        // onChange={InputChanges}
        placeholder={placeholder}
        autocomplete="off"
        className="mt-1 bg-[#f6f7f6] focus:border-none h-[45px] w-full rounded-md"
      />
    </div>
  );
};

export default Input;
