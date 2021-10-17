import React from "react";
import "../Styles/Input.css";

const Input = ({
  d,
  iconClass,
  data,
  setData,
  type,
  placeholder,
  name,
  err,
  msg,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center input-con">
        <div className="tooltipcont mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="40"
            fill="currentColor"
            className={iconClass + " icon " + (err ? "text-danger" : "")}
            viewBox="0 0 16 16"
          >
            <path d={d} />
          </svg>
          {err ? <span className="tooltiptext">{msg}</span> : null}
        </div>
        <div>
          <input
            value={data.value}
            onChange={(e) => {
              setData((prev) => ({ ...prev, value: e.target.value }));
            }}
            type={type}
            placeholder={placeholder}
            name={name}
            className="input"
          />
          <div className="mb-4"></div>
        </div>
      </div>
    </>
  );
};

{
  /* <div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div> */
}

export default Input;
