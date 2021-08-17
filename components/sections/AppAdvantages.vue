<template>
  <section class="advantages">
    <div class="container border bg-light">
      <app-h2 text="Ваши преимущества" sub="быть частью нашей команды" />
      <div class="row fd-r jc-c fw-w">
        <div
          v-for="(item, idx) in advantages"
          :key="idx"
          class="item fd-c ai-c bg-dark"
        >
          <div class="img-wrap">
            <img :src="`img/adv${idx+1}.png`" :alt="item.name" />
          </div>
          <h3 class="t-b-small t-white ta-c">{{ item.name }}</h3>
          <p class="t-b-small t-blue">{{ item.text }}</p>
        </div>
      </div>
      <div class="add-point fd-c ai-c">
        <img src="img/adv-point.png" alt="И еще один пункт" />
        <span class="t-b-small t-white">и еще один пункт</span>
        <p class="t-b-small t-blue ta-c" style="max-width: 750px">
          Мы стараемся выращивать руководителей внутри компании, поэтому если вы
          амбициозны и готовы брать ответственность - у вас все шансы постоянно
          расти и финансово и как сотрудник.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import advIcon1 from "@/static/img/adv1.png";
// import advIcon2 from "@/static/img/adv2.png";
// import advIcon3 from "@/static/img/adv3.png";
// import advIcon4 from "@/static/img/adv4.png";
// import advIcon5 from "@/static/img/adv5.png";
// import advIcon6 from "@/static/img/adv6.png";
export default {
  data: () => ({
    advantages: [
      {
        // icon: advIcon1,
        name: "Полностью удаленная работа",
        text: "Работайте в комфортных для вас условиях из любой точки мира. На некоторых позициях отсутствует фиксированный график работы - работайте тогда когда вам удобно, главное - результат.",
      },
      {
        // icon: advIcon2,
        name: "Постоянная практика английского языка",
        text: "Благодаря постоянному использованию английского в работе - вы не только не забудете то что учили в школе/вузах/курсах, но и будете постоянно улучшать свой навык общения. Ведь как известно - язык быстро забывается без практики.",
      },
      {
        // icon: advIcon3,
        name: "Доступ к международным клиентам и связям",
        text: "Благодаря общению с международными компаниями вы не только расширите свой кругозор и будете лучше знать менталитет разных стран, но так же существенно повысите стоимость на рынке труда.",
      },
      {
        // icon: advIcon4,
        name: "Своевременные выплаты заработной платы",
        text: "Мы заботимся о своих сотрудниках, и на время испытательного срока выплачиваем зарплату еженедельно, чтобы вы чувствовали себя более уверенно и комфортно. После испытательного срока своевременные выплаты дважды в месяц.",
      },
      {
        // icon: advIcon5,
        name: "Вы сами влияете на вашу зону ответственности",
        text: "Никакой бюрократии, любая инициатива будет рассмотрена незамедлительно, ваш голос БУДЕТ всегда услышан, более того - мы постоянно транслируем это среди сотрудников и приветствуем любую обратную связь.",
      },
      {
        // icon: advIcon6,
        name: "Нам важны ваши цели",
        text: "Раз в 2 месяца наш HR менеджер собирает обратную связь с каждого сотрудника и доносит до руководителя ее, нам важно, чтобы раскрылся каждый сотрудник. Так же у вас будет дорожная карта вашего личного обучения и повышения квалификации.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.advantages {
  .container {
    position: relative;
    padding: 80px 30px 30px 30px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -100px;
      display: block;
      width: 100%;
      height: 100px;
      background: #33395a;
    }
    .row {
      padding-top: 30px;
      .item {
        max-width: 340px;
        width: 100%;
        padding: 40px 15px;
        margin: 15px 15px;
        border-radius: 20px;
        border: 3px solid #676f91;
        transition: 0.2s;
        &:hover {
          background: #3e456d;
          transform: scale(0.99);
        }
        .img-wrap {
          height: 70px;
          display: flex;
          align-items: center;
          img {
            max-width: 70px;
            width: 100%;
            height: auto;
          }
        }
        h3 {
          margin: 20px 0 30px 0;
          font-size: 21px;
        }
        p {
          font-size: 18px;
        }
      }
    }
    .add-point {
      margin-top: 50px;
      img {
        max-width: 70px;
        height: auto;
      }
      span {
        margin: 10px 0 20px 0;
      }
    }
  }
}
@media (max-width: 834px) {
  .advantages {
    .container {
      padding: 0 15px 30px 15px;
    }
  }
}
</style>