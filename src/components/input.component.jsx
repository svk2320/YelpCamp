import React from "react";

const Input = ({label, type, placeholder, values, InputChanges}) => {
  return (
    <div className="my-3">
      <label>{label}</label> <br/>
      <input
        type={type}
        // value={values}
        // onChange={InputChanges}
        placeholder={placeholder}
        autocomplete="off"
        className="mt-1 pl-4 focus:border-transparent focus:ring-0 bg-[#f6f7f6] focus:border-none h-[45px] w-full rounded-md"
      />
    </div>
  );
};

export default Input;
