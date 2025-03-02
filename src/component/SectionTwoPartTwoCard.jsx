import React from "react";

function SectionTwoPartTwoCard({heading, description}) {
  return (
    <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://picsum.photos/200/300?random=4"
        ></img>
      </div>
      <h2 className="text-xl font-medium title-font mt-5">{heading}</h2>
      <p className="text-base leading-relaxed mt-2">
        {description}
      </p>
      <a className="text-indigo-500 inline-flex items-center mt-3">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
}

export default SectionTwoPartTwoCard;
