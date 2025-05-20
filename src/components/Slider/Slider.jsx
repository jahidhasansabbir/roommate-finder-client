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
    <div className="w-11/12 mx-auto">
      
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
      >
        <SwiperSlide>
          {" "}
          <img
            className="h-[180px] w-full md:h-[350px] rounded-lg object-cover"
            src={firstSliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-[180px] w-full md:h-[350px] rounded-lg object-cover"
            src={secondSliderImg}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-[180px] w-full md:h-[350px] rounded-lg object-cover"
            src={thirdSliderImg}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="text-2xl text-blue-500 font-bold text-center">
        <Typewriter
          words={["Find Roommates", "Get Matched", "Move In"]}
          loop={true}
          cursor
        />
      </h1>
    </div>
  );
};

export default Slider;
