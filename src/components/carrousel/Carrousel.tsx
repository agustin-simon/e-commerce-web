import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/features/products/productsSlice";
// Libreria swiper carrousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// componentes
import ProductCard from "../product-card/ProductCard";
// model
import Product from "../../models/product.model";
import { Flex } from "@chakra-ui/react";

/**
  Este componente renderiza una lista de Product Card que funciona como carrousel.
 */

const Carrousel: React.FC = () => {
  const products = useSelector(selectAllProducts);
  const [items, setItems] = useState<Product[]>([]);

  const showProducts = (amount: number) => {
    const itemsList = [];
    for (let i = 0; i < amount; i++) {
      itemsList.push(products[i]);
    }
    setItems(itemsList);
  };

  useEffect(() => {
    showProducts(5);
  }, []);

  return (
    <Flex>
      <Swiper
        loop={false}
        spaceBetween={4}
        navigation={true}
        pagination={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Thumbs, Autoplay]}
        grabCursor={true}
        autoplay={true}
        className="swiper-container"
        direction="horizontal"
      >
        {items &&
          items.map((product) => {
            return (
              <SwiperSlide className="swiper-slide">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Flex>
  );
};

export default Carrousel;
