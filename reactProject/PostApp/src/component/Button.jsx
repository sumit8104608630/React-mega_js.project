import React,  from 'react'

function Button({Children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 ${className} ${textColor} ${bgColor} `} {...props}>{Children} </button>
  )
}

export default Button