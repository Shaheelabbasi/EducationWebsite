import React from 'react'

const Button = ({
    text,
    className="w-[161px] h-[65px]",
    ...props
}) => {
  return (
    <button className={` ${className}`}>
  
   {text}
    </button>
  )
}

export default Button
