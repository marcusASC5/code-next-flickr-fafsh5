import React, { useState, useEffect } from "react";

export const Search = (props) => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onClick = () => {
    props.onSearch(value);
  };

  useEffect(() => {
    const hasEnoughText = value.length > 1;
    setDisabled(!hasEnoughText);
    }, [value]);

  return (
    <div className="input-group mb-3">
      <input 
      type="text" 
      onChange={onChange}
      value={value} 
      className="form-control" 
      placeholder="Search..."
      />
  <div className="input-group-append">
    <button
    className="btn-btn-primary"
    type="button"
    disabled={disabled}
    onClick={onClick}
    >
    Search...
    </button>
  </div>
  </div>
  );
}