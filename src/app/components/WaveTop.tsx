const WaveTop = () => {
  return (
    <div className="absolute top-[-70px] left-0 w-full overflow-hidden leading-[0] rotate-180">
      <svg
        className="relative block w-full h-[220px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        {/* Wave 1 */}
        <path
          d="M0,100 C300,160 900,40 1200,100 V200 H0 Z"
          fill="#ffffff"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,100 C300,160 900,40 1200,100 V200 H0 Z;
              M0,120 C300,60 900,160 1200,120 V200 H0 Z;
              M0,100 C300,160 900,40 1200,100 V200 H0 Z
            "
          />
        </path>

        {/* Wave 2 */}
        <path
          d="M0,100 C300,160 900,40 1200,100 V200 H0 Z"
          fill="#ffffff"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M0,100 C300,160 900,40 1200,100 V200 H0 Z;
              M0,120 C300,60 900,160 1200,120 V200 H0 Z;
              M0,100 C300,160 900,40 1200,100 V200 H0 Z
            "
          />
        </path>

        {/* Wave 3 */}
        <path
          d="M0,120 C400,180 800,60 1200,120 V200 H0 Z"
          fill="#ffffff"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="
              M0,120 C400,180 800,60 1200,120 V200 H0 Z;
              M0,140 C400,100 800,160 1200,140 V200 H0 Z;
              M0,120 C400,180 800,60 1200,120 V200 H0 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveTop;
