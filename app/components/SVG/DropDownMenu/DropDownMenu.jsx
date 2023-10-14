import React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#ff9200">
        <path d="M4 7a1 1 0 011-1h19a1 1 0 110 2H5a1 1 0 01-1-1zM4 14a1 1 0 011-1h11a1 1 0 110 2H5a1 1 0 01-1-1zM5 20a1 1 0 100 2h17a1 1 0 100-2H5z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
