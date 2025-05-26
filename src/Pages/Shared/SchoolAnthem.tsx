function SchoolAnthem() {
  return (
    <div
      className="relative w-full h-auto flex items-center justify-center rounded-xl lg:py-24 py-12"
      style={{
        backgroundImage: "url('/images/flower.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#FFFFFF] lg:opacity-60 opacity-75"></div>

      <div className="relative text-center w-full lg:space-y-16 space-y-6">
        <h1 className="lg:text-[44px] text-3xl font-bold mb-4">
          School <span className="text-[#7B02A1]">Anthem</span>
        </h1>
        <div className="w-[80%] gap-x-20 m-auto flex flex-col lg:flex-row gap-y-12 justify-center items-center ">
          <p className="font-medium lg:text-[20px] text-sm lg:leading-[48px] leading-6 text-[#000000]">
            We are VISIONARIES/VISIONEERS <br /> We beam the touch of excellence{" "}
            <br />
            We will ensure we rise and shine  <br /> We dare to leap into
            relevance
          </p>
          {/*  */}
          <p className="md:max-w-[34%] font-medium lg:text-[20px] text-sm lg:leading-[48px] leading-6 text-[#000000]">
            Let there be love in our hearts <br /> Let there be love (2ce){" "}
            <br /> Let there be love shared amongst us Let there be love (2ce){" "}
            <br />
            Love your neighbor just like yourself <br /> Let there be love – the
            will of God.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolAnthem;
