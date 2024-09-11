export function NextArrow(props) {
    return (
      <div
        className={props.className} // Use the className passed from react-slick
        style={{ ...props.style, opacity: 0.5, background: "transparent"}} // Apply styles from react-slick
        onClick={props.onClick} // Attach the click handler
      >
        {/* Add arrow content or icon here */}
      </div>
    );
  }
  
  export function PrevArrow(props) {
    return (
      <div
        className={props.className} // Use the className passed from react-slick
        style={{ ...props.style, opacity: 0.5, background: "transparent"}} // Apply styles from react-slick
        onClick={props.onClick} // Attach the click handler
      >
        {/* Add arrow content or icon here */}
      </div>
    );
  }
  





// import React from 'react'

// export function NextArrow(props) {
//   return (
//     <>
//     <div className={props.classname} style={{...props.style}} onClick={props.onClick}></div>
//     </>
//   )
// }

// export function PrevArrow(props) {
//   return (
//     <>
//     <div className={props.classname} style={{...props.style}} onClick={props.onClick}></div>
//     </>
//   )
// }

