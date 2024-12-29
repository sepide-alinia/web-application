import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./button.module.css";
function Button({ text, type, path }) {
  let navigate = useNavigate();
  return (
    <div>
      <button
        type={type}
        onClick={() => navigate(path)}
        className={styles.loginBtn}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
