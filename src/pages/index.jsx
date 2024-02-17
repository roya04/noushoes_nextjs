
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';


import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Slide1 from '../images/1.webp'
import Slide2 from '../images/2.webp'
import Slide3 from '../images/3.webp'
import Banner1 from '../images/home-banner-1.webp'
import Banner2 from '../images/home-banner-2.webp'
import Qoute1 from '../images/quote1.png'
import Qoute2 from '../images/quote2.png'
import Qoute3 from '../images/quote3.png'

import Link from 'next/link';
import Communication from '@/components/communication/Communication';
import ProductList from '@/components/showProducts/ProductList';
import data from '../shoesAPI/data'
import TabMenu from '@/components/tabmenu/TabMenu';
const allBrands = ['All Brands', ...new Set(data.map((shoe) => shoe.brand))];
export default function Home() {
  const swiper = useSwiper();
  const [activeBrand, setActiveBrand] = useState('All Brands');
  const filteredShoes = activeBrand === 'All Brands' ? data : data.filter((shoe) => shoe.brand === activeBrand);

const discountedShoes = data.filter((shoe) => shoe.discount > 0);

  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
  };
  return (
    <>
      <section className={`${styles.home1}`}>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="background: rgb(94, 238, 156);"></span>`;
            },
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className={`${styles.mySwiper}`}
        >
          <SwiperSlide><Image src={Slide1} alt='' />
            <div className={`${styles.overlay}`}>
              <h3>MARCH 2002 <br />NIKE SB DUNK LOW PRO</h3><hr style={{ width: '40%', height: '2px', borderColor: 'gray' }} />
              <h1 style={{ color: '#C94250' }}>SUBA</h1>
              <p>Supa wanted something that was going to rep his East Coast <br /> roots and, more specifically, his hometown of <br /> New York City in  a big way.</p>
            </div></SwiperSlide>
          <SwiperSlide><Image src={Slide2} alt='' />
            <div className={`${styles.overlay}`}>
              <h3 style={{ color: 'black' }}>BEST ITEM <br /> THIS SUMMER</h3><hr style={{ width: '40%', height: '2px', borderColor: 'black' }} />
              <h1 style={{ color: '#FE7094' }}>RECOVERY</h1>
              <p style={{ color: 'black' }}>Supa wanted something that was going to rep his East Coast <br /> roots and, more specifically, his hometown of <br /> New York City in  a big way.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide><Image src={Slide3} alt='' />
            <div className={`${styles.overlay}`}>
              <h3>MARCH 2002 <br />NIKE SB DUNK LOW PRO</h3> <hr style={{ width: '40%', height: '2px', borderColor: 'white' }} />
              <h1>SUBA</h1>
              <p>Supa wanted something that was going to rep his East Coast <br /> roots and, more specifically, his hometown of <br /> New York City in  a big way.</p>
            </div>  </SwiperSlide>

        </Swiper>
        <div className={`${styles.button}`}>
          <Link href='/shop'>PURCHASE NOW</Link>
        </div>
      </section>
      <section className={styles.productList}>
        <div className={styles.container}><TabMenu brands={allBrands} activeBrand={activeBrand} onBrandChange={handleBrandChange} />
     
    <ProductList data={filteredShoes}/></div>
      
      </section>
      <section className={styles.sale}>
        <div className={styles.full}>
          <div className={styles.banner}>
            <Link href='/shop'> <Image src={Banner1} /></Link>
          </div>
          <div className={styles.banner}>
            <Link href='/shop'> <Image src={Banner2} /></Link>
          </div>

        </div>

      </section>
     
<section className={styles.discountedItems}>
<div className={styles.container}>
<div className={styles.textbox}>
            <h1>BEST SALES</h1>
            <h6>- TOP SALES</h6>
          </div>
  <ProductList data={discountedShoes} /></div>
  
</section>

      <section className={styles.quotes}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="background: white;"></span>`;
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className={`${styles.mySwiper}`}
        >
        
          <SwiperSlide>
            <div className={styles.slideContent}>
              <div className={styles.person}>
                <div className={styles.imgbox}>
                  <Image src={Qoute1} />
                </div>
                <div className={styles.name}><span><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></span>
                <h5>Jane - Manager</h5>
                </div>
              </div>
              <div className={styles.textbox}><p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideContent}>
              <div className={styles.person}>
                <div className={styles.imgbox}>
                  <Image src={Qoute2} />
                </div>
                <div className={styles.name}><span><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></span>
                <h5>Lanna - Designer</h5>
                </div>
              </div>
              <div className={styles.textbox}><p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”</p></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideContent}>
              <div className={styles.person}>
                <div className={styles.imgbox}>
                  <Image src={Qoute3} />
                </div>
                <div className={styles.name}><span><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></span>
                <h5>Beck - Accoutant</h5>
                </div>
              </div>
              <div className={styles.textbox}><p>“Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.”</p></div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
      <section className={styles.contact}>

        <Communication />
      </section>
    </>
  )
}

