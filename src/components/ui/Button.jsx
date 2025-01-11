export const Button = ({ children, primary, onClick }) => {
  const baseClasses =
    "inline-flex items-center px-12 py-6 rounded-full transition-colors shadow-lg hover:shadow-xl text-xl font-semibold"; // Increased padding and font size
  const primaryClasses = "text-white bg-orange-500 hover:bg-orange-600";
  const secondaryClasses = "text-orange-600 bg-white hover:bg-orange-50 border-2 border-orange-500";

  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
