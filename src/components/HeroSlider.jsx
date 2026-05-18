import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <div
        className="bg-banner1"
          // style={{
          //   height: "450px",
          //   backgroundImage: "url('/tools-banner.jpg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   position: "relative",
          //   color: "white"
          // }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
            }}
          ></div>

          <div style={{ position: "relative", textAlign: "center" }}>
            <h1 className="banner-title"><span className="red">Super</span> <span className="blue">Cutting Tools</span></h1>
            <p className="banner-dec">
            Premium Quality Carbon & Cutting Tools for the Brass Industry. Designed for precision machining, longer tool life, 
            <br />and superior performance. Your reliable manufacturing partner in Jamnagar, Gujarat, India.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
        className="bg-banner2"
          // style={{
          //   height: "450px",
          //   backgroundImage: "url('/drilling-tools.jpg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   position: "relative",
          //   color: "white"
            
          // }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
            }}
          ></div>

          <div style={{ position: "relative", textAlign: "center" }}>
            <h1 className="banner-title"><span className="red">Super</span> <span className="blue">Cutting Tools</span></h1>
            <p className="banner-dec">
            Precision Carbon & Tungsten Carbide Tools for Brass Manufacturing. Delivering high-quality, durable, and performance-driven cutting 
            <br />tools trusted by industries across India. Proudly serving from Jamnagar, Gujarat – The Brass City of India.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default HeroSlider;
