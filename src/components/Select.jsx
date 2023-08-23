import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const DownIcon = ({ reverse }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      style={{ width: "20px", height: "20px", rotate: reverse && "180deg" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const DropDown = ({ sectors, onClick }) => {
  const [toggle, setToggle] = useState(null);
  const handleOnClick = (sector) => {
    onClick(sector);
    if (toggle === sector.id) {
      setToggle(null);
    } else {
      setToggle(sector.id);
    }
  };
  return sectors?.map((sector) => (
    <div key={sector.id}>
      <p className="item" onClick={(e) => handleOnClick(sector)}>
        {sector.name}
        {sector.related.length > 0 &&
          (toggle === sector.id ? <DownIcon reverse={true} /> : <DownIcon />)}
      </p>

      <div style={{ marginLeft: "30px" }}>
        {sector.related.length > 0 && toggle === sector.id && (
          <DropDown sectors={sector.related} onClick={onClick} />
        )}
      </div>
    </div>
  ));
};

const Select = ({ value, onChange }) => {
  const { sectors } = useStateContext();
  const [toggle, setToggle] = useState(false);
  const handleOnChange = (sector) => {
    if (sector.related.length === 0) {
      setToggle(!toggle);
    }
    onChange((data) => ({ ...data, sector: sector }));
  };
  return (
    <div className="select">
      <label htmlFor="sectors">Sectors :</label>
      <div className="selected" onClick={() => setToggle(!toggle)}>
        <p>{value?.name || "Select sector"}</p>
        <DownIcon />
      </div>
      {toggle && (
        <div className="dropDown">
          <DropDown sectors={sectors} onClick={handleOnChange} />
        </div>
      )}
    </div>
  );
};

export default Select;
