import React from "react";

function Promotion() {
  const images = [
    "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    "https://images.unsplash.com/photo-1560807707-8cc77767d783",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-8 min-h-screen">
      {/* Text Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Print-On-Demand: Personalize Your Activewear with FlexLinen
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-gray-700">
          Bring Your Style to Life!
        </p>
        <p className="text-base md:text-lg text-gray-600">
          At FlexLinen, we believe your activewear should be as unique as you
          are. Our Print-on-Demand service lets you customize premium-quality
          sportswear with your designs, logos, or text. Whether you’re creating
          team gear, personalizing workout outfits, or gifting something
          special, FlexLinen makes it effortless.
        </p>
        <div>
          <button className="text-white font-bold bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition">
            Create It
          </button>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:w-1/2">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={src} alt={`Design ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
