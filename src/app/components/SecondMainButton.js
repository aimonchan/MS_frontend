const SecondMainButton = ({ children, onClick, className = '' }) => {
    return (
      <button
        className={`scndbtn ${className}`} // Apply the btn class and any additional classes
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default SecondMainButton;