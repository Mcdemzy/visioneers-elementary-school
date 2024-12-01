import { cardData } from "./data";

function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center bg-[#F5E9FF] w-[60px] h-[60px] rounded-full mb-5">
              <img src={card.icon} alt={card.title} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#57007B] mb-5">
              {card.title}
            </h3>
            <div className="w-12 rounded-sm border-[#7B02A1] border-2 mb-5"></div>
            <p className="text-[#000000] font-normal text-xs leading-4">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
