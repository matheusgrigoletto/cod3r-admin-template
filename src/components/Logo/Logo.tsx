const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-10 h-10 rounded-full">
      <div className="h-2 w-2 bg-red-600 rounded-full mb-0.5"></div>
      <div className="flex">
        <div className="h-2 w-2 bg-yellow-600 rounded-full mr-0.5"></div>
        <div className="h-2 w-2 bg-green-600 rounded-full ml-0.5"></div>
      </div>
    </div>
  );
};

export default Logo;
