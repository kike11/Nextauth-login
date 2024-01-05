export function Label({ children, ...props }) {
  return (
    <label
      className="block text-sm font-medium leading-6 text-gray-300"
      {...props}
    >
      {children}
    </label>
  );
}
