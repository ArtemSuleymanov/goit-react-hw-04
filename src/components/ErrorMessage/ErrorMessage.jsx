import { RiErrorWarningLine } from "react-icons/ri";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.errorContainer}>
      <RiErrorWarningLine size={24} />
      <p>{message || "Something went wrong. Please try again!"}</p>
    </div>
  );
};

export default ErrorMessage;
