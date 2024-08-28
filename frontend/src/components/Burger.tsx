import React from "react";

const Burger = () => {
  return (
    <div
      className="fixed z-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-violet-800/20"
      style={{ top: "16px", right: "16px", width: "80px", height: "80px" }}
    >
      <button className="group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 rounded-xl">
        <span
          className="absolute block h-1 w-10 bg-white"
          style={{
            left: "50%",
            top: "35%",
            transform:
              "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
          }}
        ></span>
        <span
          className="absolute block h-1 w-10 bg-white"
          style={{
            left: "50%",
            top: "50%",
            transform:
              "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
          }}
        ></span>
        <span
          className="absolute block h-1 w-5 bg-white"
          style={{
            left: "calc(50% + 10px)",
            bottom: "30%",
            transform:
              "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
          }}
        ></span>
      </button>
    </div>
  );
};

export default Burger;
