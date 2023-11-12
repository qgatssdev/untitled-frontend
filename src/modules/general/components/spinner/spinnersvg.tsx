import React from 'react';

type Props = {
  color: string;
};

const Spinnersvg = ({ color }: Props) => (
  <div className="object-fit">
    <svg
      width="16"
      height="16"
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="77.9995"
        cy="77.9995"
        rx="57.0181"
        ry="57.0181"
        stroke={color}
        strokeOpacity="0.25"
        strokeWidth="14"
      />
      <path
        d="M135.823 77.6499C135.919 92.5609 129.918 106.898 119.142 117.508C108.366 128.117 93.6967 134.129 78.3611 134.222"
        stroke="url(#paint0_linear_364_37351)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_364_37351"
          x1="48.7832"
          y1="126.518"
          x2="104.807"
          y2="28.1106"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="0.755208" stopColor={color} stopOpacity="0.01" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Spinnersvg;
