// src/components/Gallery.tsx
import { useState, useEffect } from "react";
import { galleryImages, GalleryImage } from "../../data/GalleryImageData";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    "all",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openModal = (image: GalleryImage) => {
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage
      ? filteredImages.length - 1
      : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === filteredImages.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex, filteredImages]);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Photo Gallery
        </h1>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 lg:left-12 xl:left-20 text-white hover:text-gray-300 text-4xl md:text-5xl z-10"
              aria-label="Previous image"
            >
              &larr;
            </button>

            <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl"
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white">
                <p className="text-xl">
                  {selectedImage.alt} ({currentImageIndex + 1} of{" "}
                  {filteredImages.length})
                </p>
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 lg:right-12 xl:right-20 text-white hover:text-gray-300 text-4xl md:text-5xl z-10"
              aria-label="Next image"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Gallery;
