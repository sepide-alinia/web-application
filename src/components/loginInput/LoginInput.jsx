import styles from "./loginInput.module.css";

function LoginInput({
  type,
  value,
  placeholder,
  imgURL,
  passwordEye,
  handleChange,
  name,
  handlePasswordEye,
}) {
  return (
    <div className={styles.inputWrapper}>
      <img
        onClick={handlePasswordEye}
        className={styles.passwordEye}
        src={passwordEye}
      />
      <input
        onChange={handleChange}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
      <img src={imgURL} alt="/" />
    </div>
  );
}

export default LoginInput;
