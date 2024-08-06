import React from 'react';

function Button({
    children,  // Correctly spelled and lowercase
    type = 'button',  // Providing a default value for type
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 ${className} ${textColor} ${bgColor}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
