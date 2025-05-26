function SchoolPrayer() {
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
          School <span className="text-[#7B02A1]">Prayer</span>
        </h1>
        <p className="lg:text-2xl text-sm font-medium lg:leading-[48px] leading-6 text-[#000000]">
          With our hands put together and our head bowed, we <br /> ask the Lord
          Almighty to bless Visioneers Elementary <br />
          School, enrich the management, enrich our parents, <br /> develop the
          minds of our teachers, give we the <br />
          students; wisdom, knowledge and understanding to
          <br /> become global leading light and excel in our
          <br /> endeavours. So, help me God.
        </p>
      </div>
    </div>
  );
}

export default SchoolPrayer;
