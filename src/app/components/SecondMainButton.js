// const SecondMainButton = ({ children, onClick, className = '' }) => {
//     return (
//       <button
//         className={`scndbtn ${className}`} // Apply the btn class and any additional classes
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     );
//   };
  
//   export default SecondMainButton;

import Link from 'next/link';
import React from 'react';

// Accept `href` as an optional prop, and capture any other props with `...rest`
const SecondMainButton = ({ children, onClick, className = '', href, ...rest }) => {
 

  // If an `href` prop is provided, render a Next.js Link
  if (href) {
    return (
      <Link
        href={href}
        className={`scndbtn ${className}`}
        onClick={onClick} // Pass onClick if you need it for tracking, etc.
        {...rest} // Pass any other props like `aria-label`
      >
        {children}
      </Link>
    );
  }

  // Otherwise, render a standard button
  return (
    <button
      className={`scndbtn ${className}`}
      onClick={onClick}
      {...rest} // Pass any other props like `type="submit"` or `disabled`
    >
      {children}
    </button>
  );
};

export default SecondMainButton;



