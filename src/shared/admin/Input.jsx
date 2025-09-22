function Input({ label, error, hint, ...rest }) {
  return (
    <div
      style={{
        border: "1px solid #999",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <label>
        {label && <p> {label}</p>}
        <input {...rest} />
      </label>
      {hint && !error && <p> {hint}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
