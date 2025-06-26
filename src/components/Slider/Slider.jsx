import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import firstSliderImg from "../../assets/slider-1.png";
import secondSliderImg from "../../assets/slider.jpg";
import thirdSliderImg from "../../assets/slider-3.jpg";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div className=" h-[60vh]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          className="h-full  rounded-2xl"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src={firstSliderImg}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src={secondSliderImg}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src={thirdSliderImg}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Text over slider */}
      <div className="flex bg-transparent items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-blue-500 mt-4 font-bold text-center px-4">
          <Typewriter
            words={["Find Roommates", "Get Matched", "Move In"]}
            loop={true}
            cursor
          />
        </h1>
      </div>
    </div>
  );
};

export default Slider;