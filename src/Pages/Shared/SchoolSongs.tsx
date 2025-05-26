function SchoolSongs() {
  return (
    <div
      className="relative w-full h-auto flex items-center justify-center rounded-xl lg:py-24 py-12 shadow-md"
      style={{
        backgroundImage: "url('/images/flower.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#FFFFFF] lg:opacity-60 opacity-75"></div>

      <div className="relative text-center w-full lg:space-y-16 space-y-6">
        <h1 className="lg:text-[44px] text-3xl font-bold mb-4">
          School <span className="text-[#7B02A1]">Songs</span>
        </h1>
        <div className="w-[80%] gap-x-20 m-auto flex flex-col lg:flex-row gap-y-12 justify-center items-center ">
          <p className="font-medium lg:text-[20px] text-sm lg:leading-[48px] leading-6 text-[#000000]">
             We are young visionaries,  <br /> We are young visionaries,  <br />{" "}
            We know we are,  <br /> We are sure, we are <br /> We are young
            visionaries.
          </p>
          {/*  */}
          <p className="md:max-w-[34%] font-medium lg:text-[20px] text-sm lg:leading-[48px] leading-6 text-[#000000]">
            Let there be love shared amongst us Let there be love in our heart,{" "}
            <br />
            May now your love sweep this school <br /> Cause us oh Lord to
            arise, <br />
            Give us a fresh understanding 
            <br /> Of brotherly love that is real, <br /> Let there be love
            shared among us, Let there be love
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolSongs;
