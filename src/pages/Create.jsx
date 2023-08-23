import { useState } from "react";
import { Form } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

const EMPTY_FORM = {
  name: "",
  sector: null,
  agree: false,
};

const Create = () => {
  const { handleNotification } = useStateContext();
  const [data, setData] = useState(EMPTY_FORM);

  const submit = () => {
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
      "https://react-coding-challeng-backend-production.up.railway.app/create/",
      {
        method: "POST",
        headers: {
          "Session-ID": localStorage.getItem("sessionID"),
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        handleNotification(data);
        setData(EMPTY_FORM);
      });
  };
  return (
    <>
      <Link to="/" className="link">
        Back
      </Link>
      <Form data={data} onChange={setData} onSubmit={() => submit()} />
    </>
  );
};
export default Create;
