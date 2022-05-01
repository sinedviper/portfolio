import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { react, layout } from "./storage";

import "./Main.css";
import "swiper/css";
import "swiper/css/pagination";

const Main = () => {
  return (
    <main>
      <section>
        <h2>React projects</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {react.map(({ name, text, img, storage, link }) => {
            return (
              <SwiperSlide key={name}>
                <div className="post">
                  <div className="posts">
                    <a href={link} target="_blank">
                      <img src={img} alt={name} />
                    </a>

                    <p>Library</p>
                    <ul>
                      {text.map((index, element) => {
                        return <li key={element}>{index}</li>;
                      })}
                    </ul>
                    <a href={storage} target="_blank" className="storage">
                      Storage
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section>
        <h2>Layouts projects</h2>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {layout.map(({ name, img, storage, link }) => {
            return (
              <SwiperSlide key={name}>
                <div className="post layout">
                  <div className="posts layouts">
                    <a href={link} target="_blank">
                      <img src={img} alt={name} />
                    </a>
                    <a href={storage} target="_blank" className="storage">
                      Storage
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
};

export default Main;
