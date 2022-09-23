import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../data";

export default function CarouselElement() {
  return (
    <>
      <Carousel
        autoPlay
        swipeable
        showIndicators={false}
        emulateTouch
        showThumbs={false}
        infiniteLoop
      >
        {data.carousel.map((v, i) => (
          <div>
            <img src={v} alt="promotion" />
          </div>
        ))}
      </Carousel>
    </>
  );
}
