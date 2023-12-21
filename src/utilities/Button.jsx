const Button = ({ title, type, btnStyle, handleClick }) => {
  return (
    <button
      title={title}
      type={type ? type : "button"}
      onClick={handleClick}
      className={`px-2 md:px-8 py-1 md:py-4 rounded-full hover:bg-[#210064] bg-[#3D00B7] text-white transition text-xl font-semibold ${
        btnStyle && btnStyle
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
