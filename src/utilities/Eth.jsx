const Eth = ({ data }) => {
  return (
    <p className="flex  items-center gap-2 text-[#3A3A3A] text-xs font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
      >
        <g clipPath="url(#clip0_0_213)">
          <path
            d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z"
            fill="#3A3A3A"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_213">
            <rect
              width="13"
              height="21.3333"
              fill="white"
              transform="translate(0 0.589722)"
            />
          </clipPath>
        </defs>
      </svg>
      {data}
    </p>
  );
};

export default Eth;
