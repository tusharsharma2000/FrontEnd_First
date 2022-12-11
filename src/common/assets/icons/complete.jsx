import React from "react";

const CompleteIcon =(props)=>{
    const {width="20", height="20"} = props;
    return(
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#21C17A"/>
        <path d="M7 10.7473L8.96429 13L14.1429 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
    )
}

export default CompleteIcon