<template>
  <section class="career" id="vacancies">
    <div class="container border">
      <app-h2 text="Открытые вакансии" />
      <div class="row fd-r jc-c fw-w">
        <div v-for="(item, idx) in items" :key="idx" class="item fd-c jc-b">
          <div class="head fd-r ai-c">
            <img :src="`img/career${idx+1}.png`" :alt="item.text" />
            <h3 class="t t-blue">{{ item.text }}</h3>
          </div>
          <a :href="item.href" target="_blank" class="t-white t-b-small"
            >ПОДРОБНЕЕ</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import careerIcon1 from "@/static/img/career1.png";
// import careerIcon2 from "@/static/img/career2.png";
// import careerIcon3 from "@/static/img/career3.png";
// import careerIcon4 from "@/static/img/career4.png";
// import careerIcon5 from "@/static/img/career5.png";

export default {
  data: () => ({
    items: [
      {
        // icon: careerIcon1,
        text: "Менеджер по продажам",
        href: "https://hh/ru",
      },
      {
        //  icon: careerIcon2,
        text: "PR менеджер",
        href: "https://hh/ru",
      },
      {
        // icon: careerIcon3,
        text: "Руководитель отдела продаж",
        href: "https://hh.ru/vacancy/46257650",
      },
      {
        // icon: careerIcon4,
        text: "Проектный менеджер",
        href: "https://hh.ru/vacancy/46653928",
      },
      {
        // icon: careerIcon5,
        text: "Маркетолог",
        href: "https://hh.ru/vacancy/45555122",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.career {
  .container {
    padding-top: 100px;
    h2 {
      text-align: center;
    }
    .row {
      align-items: stretch;
      margin-top: 40px;
      .item {
        max-width: 205px;
        width: 100%;
        padding: 25px 15px;
        border-radius: 20px;
        border: 2px solid #646c8e;
        box-shadow: -6px -6px 24px rgb(85 93 131 / 48%),
          inset -1px -1px 4px rgb(83 92 136 / 12%);
        background: transparent;
        transition: 0.4s;
        margin: 15px;
        &:hover {
          transform: translateY(-10px);
          box-shadow: -6px -6px 44px rgb(85 93 131 / 48%),
            inset -1px -1px 14px rgb(83 92 136 / 12%);
        }
        .head {
          img {
            margin-right: 10px;
          }
        }
        h3 {
          font-size: 18px;
        }
        a {
          background: linear-gradient(135deg, #393f5c 0%, #353b57 100%);
          box-shadow: -6px -6px 20px rgb(74 81 119 / 56%),
            8px 8px 18px rgb(54 59 87 / 20%),
            inset 1px 1px 1px rgb(38 49 105 / 5%),
            inset -1px -1px 4px rgb(83 92 136 / 12%);
          border-radius: 20px;
          padding: 20px;
          margin-top: 25px;
          position: relative;
          z-index: 2;
          font-size: 14px;
          text-align: center;
          border: 1px solid #646c8e;
          &:hover {
            &::before {
              box-shadow: inset 0px 1px 50px #7aafff;
            }
          }
          &::before {
            content: "";
            z-index: -1;
            position: absolute;
            top: 4px;
            right: 4px;
            bottom: 4px;
            left: 4px;
            border: 2px solid #517af3;
            box-sizing: border-box;
            box-shadow: inset 0px 0px 0px #7aafff;
            border-radius: 20px;
            transition: 0.35s;
          }
        }
      }
    }
  }
}
</style>