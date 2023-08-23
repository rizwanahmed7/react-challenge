import { useStateContext } from "../context/ContextProvider";

const Notification = ({ notify: { type, message } }) => {
  const { handleNotification } = useStateContext();
  return (
    <div
      className="notification"
      style={{ backgroundColor: type === "error" ? "#E74C3C" : "#50C878" }}
    >
      <p>{message}</p>
      <div
        style={{
          backgroundColor:
            type === "error" ? "rgb(255, 138, 126)" : "#70ff7082",
        }}
        onClick={() => handleNotification({ type: null, message: null })}
      >
        X
      </div>
    </div>
  );
};
export default Notification;
