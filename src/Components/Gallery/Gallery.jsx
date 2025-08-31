import React from "react";

const Gallery = () => {
  return (
    <>
      <section id="gallery" className=" body-font ">
        <div className="flex justify-center items-center mt-12 ">
          <h2 className="md:text-5xl underline text-4xl font-semi-bold">
            Gallery
          </h2>
        </div>
        <div className="container px-5 py-20 mx-auto flex flex-wrap ">
          <div className="flex flex-wrap md:-m-2 -m-1 ">
            {/* left div */}
            <div className="flex flex-wrap w-1/2 ">
              <div className="md:p-2 p-1 w-1/2 ">
                <img
                  alt="gallery"
                  className="w-full object-fill h-full object-center block transform transition-transform duration-400 ease-in hover:scale-90"
                  src="headphone.jpeg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-fill h-full object-center block transform transition-transform duration-400 ease-in hover:scale-90"
                  src="img6.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-fill object-center block transform transition-transform duration-400 ease-in hover:scale-90"
                  src="img5.webp"
                />
              </div>
            </div>

            {/* right div */}
            <div className="flex flex-wrap w-1/2 ">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-fill object-center block transform transition-transform duration-400 ease-in hover:scale-90"
                  src="imgb3.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-fill h-full object-center block transform transition-transform duration-400 ease-in hover:scale-90"
                  src="cos2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-fill h-full object-center block  transform transition-transform duration-400 ease-in hover:scale-90"
                  src="img8.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
