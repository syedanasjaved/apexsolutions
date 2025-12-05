"use client";
import React, { useEffect, useRef } from "react";
import useCustomSelect from "../../customHooks/useCustomSelect";

const SelectComponent = ({ options, placeholder, open, customClass, onSelect }) => {
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (option, event) => {
    event.stopPropagation(); // prevent re-toggle
    selectOption(option);
    closeDropdown();

    if (onSelect) {
      onSelect(option);
    }
  };

  const dropdownClassName = `nice-select ${customClass || ""} ${isOpen ? "open" : ""}`;

  return (
    <div
      className={dropdownClassName}
      tabIndex="0"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <span className="current">{selectedOption || placeholder}</span>
      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option${selectedOption === option ? " selected focus" : ""}`}
            onClick={(e) => handleOptionSelect(option, e)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;
