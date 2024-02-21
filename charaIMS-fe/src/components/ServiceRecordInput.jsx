import React from "react";

export const ServiceRecordInput = (props) => {
  const { className, label, labelName, placeholder, value, onChange } = props;

  return (
    <>
      <label htmlFor={label}>{labelName}</label>
      <input
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};

ServiceRecordInput.defaultProps = {
  className: "",
  label: "",
  labelName: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};