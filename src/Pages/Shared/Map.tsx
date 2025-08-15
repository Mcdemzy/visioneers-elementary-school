const Map = () => {
  return (
    <div className="relative h-96 w-full lg:px-36 px-9">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.2383803440096!2d3.819339977049789!3d7.352769928989053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398dc17267d541%3A0x5b6b87adb39999bd!2sVisioneers%20Elementary%20School!5e1!3m2!1sen!2sng!4v1755193638373!5m2!1sen!2sng" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Map;