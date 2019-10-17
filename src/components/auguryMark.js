import React from "react"

const AuguryMark = (props) => {
  let size = props.size ? props.size : 100;
  return (
    <svg id="Layer_1" width={size} height={size} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.22 379.17">
      <path fill={props.fill} d="M117.32 445.58c-6.1-1.84-12.59-2.9-18.23-5.68-20.47-10.07-31.76-26.9-32.33-49.68-.7-27.39-.19-54.81-.21-82.22v-15.78h37.91v94.68c0 13.08 7.74 20.8 20.83 20.8h96.27v37.9z" transform="translate(-66.39 -66.42)" id="SPLINE" />
      <path fill={props.fill} d="M445.61 220.18H407.7v-4.24-90.68c0-13.09-7.73-20.82-20.81-20.83h-93.28v-37.9h3.93c29.55 0 59.11.37 88.65-.1 31.55-.51 55.63 22.25 58.88 49.67a4.22 4.22 0 00.54 1.19z" transform="translate(-66.39 -66.42)" id="SPLINE-2" data-name="SPLINE" />
      <path fill={props.fill} d="M293.31 445.58v-37.9h93.57c13.09 0 20.82-7.73 20.82-20.81V291.94h37.91v102.88A15.85 15.85 0 00445 397c-3.28 19.45-13.57 33.93-31.29 42.56-5.86 2.85-12.52 4.05-18.82 6z" transform="translate(-66.39 -66.42)" id="SPLINE-3" data-name="SPLINE" />
      <path fill={props.fill} d="M104.46 220.06H66.77c-.07-1-.21-2-.21-2.95 0-31.13-.12-62.26 0-93.39.13-27.88 19-50.71 46.08-56.08a58.76 58.76 0 0111.08-1.06c31.58-.09 63.17 0 94.75 0 .88 0 1.76.08 2.82.13v37.77h-95.85c-13.32 0-21 7.67-21 21v94.64z" transform="translate(-66.39 -66.42)" id="SPLINE-4" data-name="SPLINE" />
    </svg>
  )
}

export default AuguryMark;