function Textarea({ value, onChange, disabled, placeholder }) {
  return (
    <textarea
      className="w-full resize-none p-3 border-2 shadow-custom my-2 rounded-e-lg rounded-b-lg max-h-16 text-sm outline-none font-normal bg-white"
      maxLength={1001}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
    ></textarea>
  );
}

export default Textarea;
