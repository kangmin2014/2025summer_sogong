// src/components/ui/mycheckbox.jsx
import React from "react";
import "./mycheckbox.css";

export const Checkbox = ({ id, checked, onCheckedChange, className = "", children }) => {
  return (
    <label htmlFor={id} className={`custom-checkbox-wrapper ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="custom-checkbox-input"
      />
      <span className="custom-checkbox-checkmark" />
      {children && <span className="custom-checkbox-label">{children}</span>}
    </label>
  );
};
