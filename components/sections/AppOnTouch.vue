<template>
  <section class="onTouch">
    <div class="container bg-light border">
      <div class="content">
        <app-h2 text="Всегда на связи" />
        <p class="t t-blue">
          Несмотря на расстояние, мы все поддерживаем теплые отношения с
          коллегами: Проводим совместные созвоны, создаем чаты, в которых
          общаемся не на рабочие темы. Например в нашей компании практикуется
          Чат Радости, куда каждый может прислать свою радость дня: от вкусного
          кофе, до прыжка с парашюта. Мы вместе празднуем Дни Рождения и наши
          большие и маленькие победы!
        </p>
      </div>
      <client-only>
        <VueSlickCarousel v-bind="settings" class="slick">
          <div v-for="(chat, idx) in chats" :key="idx" class="slide">
            <div class="wrap">
              <img :src="`img/chat${idx+1}.png`" alt="Наш 'чат радостей'" />
            </div>
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

// import chat1 from "@/static/img/chat1.png";
// import chat2 from "@/static/img/chat2.png";
// import chat3 from "@/static/img/chat3.png";
// import chat4 from "@/static/img/chat4.png";
// import chat5 from "@/static/img/chat5.png";
// import chat6 from "@/static/img/chat6.png";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      chats: 6,
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
            breakpoint: 550,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" >
.onTouch {
  .container {
    padding: 70px 0 0 0;
    background: url("@/static/img/onTouch-bg.png") no-repeat center 30px;
    background-size: 95%;
    background-color: #33395a;
    .content {
      padding: 0 91px;
      p {
        margin-top: 35px;
      }
    }
    .slick {
      margin-top: 110px;
      padding: 0 15px;
      width: 100%;
      .slide {
        padding: 0 15px;
        outline: 0;
        .wrap {
          background: #3e4568;
          transition: 0.2s;
          border-radius: 30px;
          padding: 15px;
          width: 100%;
          &:hover {
            transform: scale(0.99);
            img {
              filter: brightness(85%);
            }
          }
          img {
            border-radius: 20px;
            transition: 0.2s;
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .slick-dots {
      z-index: 5;
      bottom: -60px;
      left: 50%;
      transform: translateX(-50%);
      margin: 60px auto 0 auto;
      li {
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

@media (max-width: 834px) {
  .onTouch {
    .container {
      padding: 20px 15px 0 15px;
      background-image: none;
      .content {
        padding: 0 0;
      }
    }
  }
}
</style>