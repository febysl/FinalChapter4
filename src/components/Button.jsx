import React from 'react'

const Button = ({variant, children, ...props}) => {
  let isButton = 'px-4 py-2 rounded-full '
  if (variant === 'color'){
    isButton += 'bg-red-500 text-white font-normal outline outline-1 outline-red-500'
  } else if (variant === 'transparent'){
    isButton += 'bg-transparent text-red-500 font-normal outline outline-1 outline-red-500 '
  }
  return(
    <button className={isButton} {...props}>
        {children}
    </button>
  )
}
export default Button