import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import RoutePaths from '../config';

import slider1 from "../assets/img/slider1.jpg"

type Slide = {
  id: number;
  image: string;
  text: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "https://t3.ftcdn.net/jpg/04/55/53/78/360_F_455537818_2AwVoujHe2gH7IRYTgrZ932Nt4MdwTXD.jpg",
    text: "Exclusive Deals on Latest Products",
  },
  {
    id: 2,
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-st-patrick-s-day-ecommerce-shop-and-deliver-via-mobile-app-image_3859384.jpg",
    text: "Free Shipping on All Your Orders",
  },
  {
    id: 3,
    image: "https://thumbs.dreamstime.com/b/realistic-empty-green-shopping-cart-png-night-isolated-background-ecommerce-product-photography-retail-visuals-showcase-357741048.jpg",
    text: "New Arrivals Just for You!",
  },
];

const SlideShow = () => {
  return (
    <Carousel 
      autoPlay 
      showArrows={false} 
      showStatus={false} 
      showThumbs={false} 
      swipeable 
      infiniteLoop 
      interval={3000}
    >
      {slides.map((slide) => (
        <div className="f-slide position-relative shadow h-100" key={slide.id}>
          <img src={slide.image} alt={slide.text} className="w-100 h-100" />
          <div 
            className="f-slide-text position-absolute text-start" 
            style={{ width: '50%', top: '30%', left: '5%' }}
          >
            <div>
              <h1 className='fw-bold'>{slide.text}</h1>
              <h5 className='my-3 fw-bold'>Free Shipping on all Your Orders</h5>
              <Link to={RoutePaths.shop} className="fd-btn col-12 col-lg-6 text-center p-3">
                SHOP NOW <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideShow;
