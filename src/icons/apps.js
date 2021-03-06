import React from 'react';

const Sketch = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FDB300"
        d="M21.818 7.963L50 5l28.182 2.963L100 37.093 50 95 0 37.093z"
      />
      <path
        fill="#EA6C00"
        d="M20.212 37l29.687 57.985L0 37zM79.587 37L49.899 94.985 99.8 37z"
      />
      <path fill="#FDAD00" d="M20.212 37h59.375L49.899 94.985z" />
      <g>
        <path
          fill="#FDD231"
          d="M49.9 5L21.773 7.952 20.212 36.97zM49.9 5l28.124 2.952 1.563 29.018z"
        />
        <path
          fill="#FDAD00"
          d="M99.798 36.97L78.024 7.952l1.563 29.018zM0 36.97L21.774 7.952 20.212 36.97z"
        />
        <path fill="#FEEEB7" d="M49.9 5L20.211 36.97h59.375z" />
      </g>
    </g>
  </svg>
);

const VSCode = () => (
  <svg
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient x1="0%" y1="0%" y2="100%" id="c">
        <stop stop-color="#FFF" stop-opacity=".18" offset="0%" />
        <stop stop-color="gray" stop-opacity=".08" offset="48.762%" />
        <stop stop-opacity=".183" offset="100%" />
      </linearGradient>
      <rect
        id="b"
        x="68.167"
        y="53.799"
        width="744.89"
        height="907.021"
        rx="23.755"
      />
      <filter
        x="-2.4%"
        y="-1.3%"
        width="104%"
        height="103.3%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dx="-3" dy="3" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="4.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M464.152 236.712l65.33 421.186a4.32 4.32 0 0 0 6.615 2.964l91.582-59.27a4.32 4.32 0 0 0 1.92-4.3l-53.082-335.555a4.32 4.32 0 0 0-3.203-3.512l-103.831-26.361a4.32 4.32 0 0 0-5.331 4.848z"
        id="d"
      />
      <linearGradient x1="5.234%" y1="3.683%" x2="50%" y2="50%" id="f">
        <stop stop-opacity=".09" offset="0%" />
        <stop stop-opacity="0" offset="100%" />
      </linearGradient>
      <path
        d="M627.51 601.73l-96.54 62.636a4.32 4.32 0 0 1-4.889-.129L156.958 396.103a4.32 4.32 0 0 1 .418-7.258l33.349-18.788a4.32 4.32 0 0 1 4.109-.071l432.315 224.287a4.32 4.32 0 0 1 .362 7.458z"
        id="e"
      />
      <path
        d="M575.234 265.486L233.697 612.592a4.32 4.32 0 0 1-3.607 1.258l-38.804-4.778a4.32 4.32 0 0 1-2.928-6.878l276.51-368.699a4.32 4.32 0 0 1 4.519-1.595l103.831 26.37a4.32 4.32 0 0 1 2.016 7.216z"
        id="h"
      />
      <filter
        x="-9%"
        y="-5.8%"
        width="118%"
        height="118.3%"
        filterUnits="objectBoundingBox"
        id="g"
      >
        <feOffset dy="13" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="9.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <linearGradient x1="100%" y1="0%" x2="50%" y2="5.905%" id="j">
        <stop stop-opacity=".3" offset="0%" />
        <stop stop-opacity="0" offset="100%" />
      </linearGradient>
      <path id="i" d="M163.41 759.002l606.605 99.918 179.667-110.796z" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="rotate(-9.2 459.112 277.376)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#1E252B" xlinkHref="#b" />
        <use fill="url(#c)" xlinkHref="#b" />
      </g>
      <g transform="translate(37)">
        <use fill="#6C97DC" xlinkHref="#d" />
        <use
          fill="#E0E0E0"
          style={{ mixBlendMode: 'multiply' }}
          xlinkHref="#d"
        />
      </g>
      <g transform="translate(37)">
        <use fill="#6C97DC" xlinkHref="#e" />
        <use fill="url(#f)" xlinkHref="#e" />
      </g>
      <g transform="translate(37)">
        <use fill="#000" filter="url(#g)" xlinkHref="#h" />
        <use fill="#6C97DC" xlinkHref="#h" />
      </g>
      <g transform="translate(37)">
        <use fill="#6C97DC" xlinkHref="#i" />
        <use fill="url(#j)" xlinkHref="#i" />
      </g>
      <path
        fill="#6C97DC"
        d="M684.533 90.582l202.32 47.99 99.77 609.565-179.334 110.195z"
      />
    </g>
  </svg>
);
export { Sketch, VSCode };
