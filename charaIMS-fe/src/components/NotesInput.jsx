import React from "react";

export const NotesInput = (props) => {
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

NotesInput.defaultProps = {
  className: "",
  label: "",
  labelName: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};