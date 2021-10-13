interface AuthInputProps {
  value: string | number | readonly string[] | undefined;
  label: string;
  id: string;
  onChange?: (event: any) => void;
  type?: "text" | "email" | "password";
  [key: string]: any;
}

const AuthInput = ({
  type,
  label,
  id,
  value,
  onChange,
  ...props
}: AuthInputProps) => {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type ?? "text"}
        id={id}
        value={value}
        onChange={({ target }) => onChange?.(target.value)}
        className={`
          px-4 py-3 mt-2
          bg-gray-200
          border rounded-lg
          focus:border-blue-500 focus:outline-none focus:bg-white
          transition-colors
        `}
        {...props}
      />
    </div>
  );
};

export default AuthInput;
