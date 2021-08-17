<template>
  <section class="reviews">
    <div class="container border bg-light">
      <div class="wrap">
        <app-h2 text="Отзывы сотрудников" />

        <client-only>
          <VueSlickCarousel v-bind="settings" class="slick">
            <div v-for="(review, idx) in reviews" :key="idx" class="slide">
              <div class="video-item bg-light">
                <img :src="`img/review${idx+1}.png`" alt="Отзыв сотрудника" />
                <a :href="review.url" target="_blank" class="play">
                  <img src="img/play-icon.svg" alt="Просмотреть видео" />
                </a>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
        <div class="swiper-pagination2" slot="pagination"></div>
      </div>
    </div>
  </section>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

// import reviewPic1 from "@/static/img/review1.png";
// import reviewPic2 from "@/static/img/review2.png";
// import reviewPic3 from "@/static/img/review3.png";
// import reviewPic4 from "@/static/img/review4.png";
// import reviewPic5 from "@/static/img/review5.png";
// import reviewPic6 from "@/static/img/review6.png";

export default {
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    reviews: [
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic1,
      },
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic2,
      },
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic3,
      },
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic4,
      },
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic5,
      },
      {
        url: "https://www.youtube.com/watch?v=x4Xf4mmbecE",
        // icon: reviewPic6,
      },
    ],
    settings: {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 834,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
};
</script>

<style lang="scss">
.reviews {
  .container {
    padding: 0;
    overflow: hidden;

    .wrap {
      margin-top: 150px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 190px;
        background-color: #232740;
      }
      h2 {
        text-align: center;
      }

      .slick {
        margin-top: 65px;
        padding: 0 30px;
        .slide {
          padding: 15px 20px;
          outline: 0;
          .video-item {
            background: #3e4568;
            width: 100%;
            border-radius: 20px;
            padding: 7px;
            transition: 0.2s;
            width: 100%;
            position: relative;
            box-shadow: 0 0 26px #33395a;
            img {
              width: 100%;
              height: auto;
              border-radius: 15px;
            }
            .play {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              position: absolute;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: transparent;
              border: 0;
              transition: 0.2s;
              &:hover {
                filter: brightness(70%);
              }
              img {
                width: 50px;
                height: 50px;
              }
            }
          }
        }
      }
      .slick-dots {
        position: static;
        display: flex;
        justify-content: center;
        z-index: 5;
        margin: 20px auto 0 auto;
        padding-bottom: 10px;
        list-style: none;
        li {
          list-style: none;
          border-radius: 50%;
          outline: 0;
          background: rgb(64, 71, 108);
          background: linear-gradient(135deg, #3a4061 0%, #586396 100%);
          box-shadow: -5px -2px 10px rgb(74 81 119 / 76%),
            inset -1px -1px 4px rgb(83 92 136 / 12%);
          width: 16px;
          height: 16px;
          margin: 0 5px;
          opacity: 1;
          transition: 0.2s;
          button {
            opacity: 0;
          }
        }
        .slick-active {
          transform: scale(1.4);
          margin: 0 8px;
          background: rgb(64, 71, 108);
          background: linear-gradient(135deg, #3a4061 0%, #586396 100%);
          opacity: 1;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            width: 10px;
            height: 10px;
            background: #648fff;
            background: linear-gradient(180deg, #648fff 0%, #3b60e4 100%);
          }
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .reviews {
    .container {
      padding: 0 15px;
      .wrap {
        &:before {
          content: "";
          position: absolute;
          left: -15px;
          bottom: -10px;
          width: calc(100% + 30px);
          height: 160px;
          background-color: #232740;
        }
        .content {
          padding: 0 0;
        }
        .slick {
          margin-top: 30px;
          padding: 0;
          .slide {
            padding: 0 15px;
          }
        }
      }
    }
  }
}
</style>
