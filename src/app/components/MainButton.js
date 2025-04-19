// src/components/Button.js

const MainButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`btn ${className}`} // Apply the btn class and any additional classes
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
