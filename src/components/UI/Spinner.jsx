// Spinner.jsx

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-8 border-gray-200 border-t-[#523939] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
