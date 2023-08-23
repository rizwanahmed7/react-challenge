import { useEffect, useState } from "react";
import { Form } from "../components";
import { Link } from "react-router-dom";

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      style={{ width: "18px", height: "18px", color: "rgb(0, 76, 255)" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
};

const Item = ({ id, name, sector }) => {
  return (
    <div className="formItem">
      <div>
        <p className="name">{name}</p>
        <p className="sector">
          {sector.length > 17 ? sector.slice(0, 17) + "..." : sector}
        </p>
      </div>
      <Link to={`/edit/${id}`} className="edit">
        <EditIcon />
      </Link>
    </div>
  );
};

const View = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-coding-challeng-backend-production.up.railway.app/data",
      {
        method: "GET",
        headers: { "Session-ID": localStorage.getItem("sessionID") },
      }
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="formItemBlock">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          sector={item.sector__name}
        />
      ))}
      <Link to="/create" className="link">
        Create
      </Link>
    </div>
  );
};
export default View;
