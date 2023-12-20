const Button = ({ title, type, btnStyle, handleClick }) => {
  return (
    <button
      title={title}
      type={type ? type : "button"}
      onClick={handleClick}
      className={`px-8 py-4 rounded-full bg-[#3D00B7] text-white transition text-xl font-semibold ${
        btnStyle && btnStyle
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
