"use client";
import { useState } from "react";

function FaListItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={props.faqItem.question}>
      {/* clickable interrogation */}
      <button
        className="link link-hover py-5 font-semibold border-b w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{props.faqItem.question}</p>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>

      {/* answer */}
      {isOpen ? (
        <div className="opacity-80 mt-4 mb-6">{props.faqItem.answer}</div>
      ) : (
        <></>
      )}
    </li>
  );
}

export default FaListItem;
