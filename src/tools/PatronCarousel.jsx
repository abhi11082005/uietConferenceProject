import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const patrons = [
  {
    role: 'Chief Patron',
    name: 'Prof. Vinay Kumar Pathak',
    title: 'Honorable ViceChancellor, CSJM University, Kanpur',
    image: 'https://csjmu.ac.in/wp-content/uploads/2022/08/vc-sir-csjmu.jpg',
  },
  {
    role: 'Chief Patron',
    name: 'Prof. Vinay Kumar Pathak',
    title: 'Honorable ViceChancellor, CSJM University, Kanpur',
    image: 'https://csjmu.ac.in/wp-content/uploads/2022/08/vc-sir-csjmu.jpg',
  },
  {
    role: 'Patron',
    name: 'Prof. Sudhir Kumar Awasthi',
    title: 'Pro ViceChancellor, CSJM University, Kanpur',
    image: 'https://your-image-url-2.jpg',
  },
  {
    role: 'Patron',
    name: 'Dr. Anil Kumar Yadav',
    title: 'Registrar, CSJM University, Kanpur',
    image: 'https://your-image-url-3.jpg',
  },
  {
    role: 'Co-Patron',
    name: 'Prof. Bristhi Mitra',
    title: 'Director, UIET, CSJM University, Kanpur',
    image: 'https://your-image-url-4.jpg',
  },
];

export default function PatronCarousel() {
  return (
    <div className="w-full py-10 px-4 bg- rounded-2xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop
      >
        {patrons.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white  bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center text-white shadow-lg">
              <img
                src={p.image}
                alt={p.name}
                className="w-45 h-40 object-cover rounded-xl mx-auto mb-4 border-4 border-white"
              />
              <h3 className="text-xl font-bold">{p.role}</h3>
              <p className="mt-1 font-semibold">{p.name}</p>
              <p className="text-sm">{p.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
