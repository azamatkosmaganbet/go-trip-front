import { FC} from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TourmateCard from "../TourmateCard/TourmateCard";
import "./TourmateList.scss";

interface TourmateListProps {
  data: any;
  title?: string;
  type?: "default" | "city";
}

const TourmateList: FC<TourmateListProps> = ({ data, title, type }) => {
  return (
    <div className="tourmate">
      <h2 className="tourmate-title">{title}</h2>

      <div className="tourmate-cards">
        <Swiper
          slidesPerView={Math.min(3, data?.length)}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.map((el: any) => (
            <SwiperSlide key={el._id}>
              <TourmateCard key={el.id} type={type} tourmate={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TourmateList;
