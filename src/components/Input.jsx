const Input = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} value={value} onChange={onChange} type="text" />
    </div>
  );
};
export default Input;
