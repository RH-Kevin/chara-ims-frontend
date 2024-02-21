import React from "react";

export const NotesInput = ({ value, onChange, className }) => {
  

  return (
    <>
      <textarea
        className={"resize-y w-full h-32 p-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-500"}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};

NotesInput.defaultProps = {
  className: "",
  label: "",
  labelName: "",
  value: "",
  onChange: () => {},
};