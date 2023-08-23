import { useEffect, useState } from "react";
import { Form } from "../components";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Edit = () => {
  const { handleNotification } = useStateContext();
  const [data, setData] = useState({ name: "", sector: null, agree: false });
  const param = useParams();

  const update = () => {
    if (data.name === "") {
      handleNotification({ type: "error", message: "Please enter your name" });
      return;
    }
    if (!data.sector) {
      handleNotification({ type: "error", message: "Please pick a sector" });
      return;
    }
    if (!data.agree) {
      handleNotification({ type: "error", message: "Please agree to terms" });
      return;
    }
    fetch(
      `https://react-coding-challeng-backend-production.up.railway.app/update/${param.id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.type)
          handleNotification({ type: res.type, message: res.message });
      });
  };
  useEffect(() => {
    fetch(
      `https://react-coding-challeng-backend-production.up.railway.app/update/${param.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.type)
          handleNotification({ type: res.type, message: res.message });
        setData({
          name: res.name,
          sector: { id: res.sector__id, name: res.sector__name },
          agree: true,
        });
      });
  }, []);

  return (
    <>
      <Link to="/" className="link">
        Back
      </Link>
      <Form data={data} onChange={setData} onSubmit={update} />;
    </>
  );
};
export default Edit;
