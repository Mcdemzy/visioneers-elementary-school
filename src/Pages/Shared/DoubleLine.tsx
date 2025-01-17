function DoubleLine() {
  return (
    <div className="w-[100px] md:h-3 h-2 mx-auto mt-2 relative group">
      <div className="absolute top-0 left-0 group-hover:w-full md:border-2 border rounded-sm border-[#000000] w-16 transition-all duration-500"></div>
      <div className="absolute bottom-0 right-0 group-hover:w-full md:border-2 border rounded-sm border-[#7B02A1] w-16 transition-all duration-500"></div>
    </div>
  );
}

export default DoubleLine;
