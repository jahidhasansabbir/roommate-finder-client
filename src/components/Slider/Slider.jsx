import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import firstSliderImg from "../../assets/slider-1.png"
import secondSliderImg from '../../assets/slider.jpg'
import thirdSliderImg from '../../assets/slider-3.jpg'

const Slider = () => {
    return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
    >
      <SwiperSlide> <img className='h-[250px] w-full md:h-[450px] object-cover' src={firstSliderImg} alt="" /></SwiperSlide>
      <SwiperSlide> <img className='h-[250px] w-full md:h-[450px] object-cover' src={secondSliderImg} alt="" /></SwiperSlide>
      <SwiperSlide> <img className='h-[250px] w-full md:h-[450px] object-cover' src={thirdSliderImg} alt="" /></SwiperSlide>
      
    </Swiper>
  );
};

export default Slider;
