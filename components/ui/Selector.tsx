"use client";

import { useState, useEffect, useRef } from "react";
import Button from "./Button";

interface SelectorProps {
  options: any[];
  onClick: (option: any) => void;
  className?: string;
  children: React.ReactNode;
  optionClassName?: string;
  isDisabled?: boolean;
}

export default function Selector({
  options,
  onClick,
  className = "",
  children,
  optionClassName = "",
  isDisabled = false,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectorRef} className={`selector ${className}`}>
      <Button
        className={`button primary ${isDisabled ? "disabled" : ""}`}
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
      >
        {children}
      </Button>
      {isOpen && (
        <ul className="selector-options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`button ${optionClassName}`}
              onClick={() => {
                onClick(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
