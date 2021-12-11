import React from "react";

import './LoadingSpinner.css'

const LoadingSpinner = ()=>{
return <div id="container">
  <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
          floodColor="#000000"/>
      </filter>
    </defs>
    <circle id="spinner" style={{fill:"transparent" ,stroke:"#774936",strokeWidth: "7px",strokeLinecap: "round",filter:"url(#shadow)"}} cx="50" cy="50" r="45"/>
</svg>
</div>
}

export default LoadingSpinner