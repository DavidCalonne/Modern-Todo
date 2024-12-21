"use client";

import React, { MouseEvent } from "react";
import { X } from "lucide-react";

export default function Popup(props: any) {
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      props.remove();
    }
  };

  return (
    <div className="popup" onClick={handleOutsideClick}>
      <article className="popup-content">
        <X
          width={16}
          height={16}
          className="close-popup"
          onClick={props.remove}
        />
        {props.children}
      </article>
    </div>
  );
}
