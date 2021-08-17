<template>
  <section class="header">
    <div class="container fd-c ai-c">
      <img src="img/logo.svg" alt="FLEXE.IO" />
      <h1 class="h1 t-white ta-c">
        Международое агентство <br />
        digital маркетинга
      </h1>
      <a href="#vacancies" v-smooth-scroll class="button t-white"
        >посмотреть вакансии</a
      >
      <div class="about">
        <app-h2 text="О нас" />
        <div class="bg-gradient-light content">
          <p class="t t-blue">
            Международное агентство, предоставляющее услуги интернет маркетинга
            и PR для компаний в области <span class="t-white">FinTech</span> -
            быстроразвивающейся отрасли, которая создает новые технологии (с
            помощью искусственного интеллекта, блокчейна) в области финансов.
          </p>
          <p class="t t-blue">
            К нам обращаются компании с
            <span class="t-white">5 континентов</span>: от Бразилии до Японии.
          </p>
          <p class="t t-blue">
            Агентство успешно работает <span class="t-white">более 3 лет</span>,
            команда из <span class="t-white">25 экспертов</span> из России,
            Украины и Германии.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 55px;
  .container {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 180px;
      background-color: #232740;
    }
    border: 2px solid #43496b;
    border-radius: 25px 25px 0 0;
    border-bottom: 0;
    background: url("@/static/img/header-bg.png") top center no-repeat;
    background-size: contain;
    background-color: #33395a;
    img {
      margin: 100px 0 40px 0;
      max-width: 250px;
      width: 100%;
      height: auto;
    }
    .button {
      padding: 30px 40px;
      margin-top: 55px;
      background: linear-gradient(180deg, #648fff 0%, #3b60e4 100%);
      box-shadow: 0px 16px 16px rgb(35 43 79 / 24%),
        0px -12px 16px rgb(77 95 179 / 32%);
      border-radius: 20px;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 500;
      transition: 0.4s;
      outline: none;
      &:hover {
        transform: translateY(-15px);
      }
    }
    .about {
      margin-top: 130px;
      z-index: 2;
      h2 {
        margin-left: 55px;
      }
      .content {
        margin-top: 55px;
        padding: 50px 66px;
        border-radius: 20px;

        p {
          margin-bottom: 25px;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .header {
    padding-top: 30px;
  }
}
@media (max-width: 834px) {
  .header {
    .container {
      &:after {
        height: 130px;
      }
      img {
        margin: 60px 0 30px 0;
        max-width: 150px;
      }
      .button {
        padding: 20px 30px;
        margin-top: 35px;
        font-size: 16px;
      }
      .about {
        margin-top: 50px;
        h2 {
          margin-left: 30px;
        }
        .content {
          padding: 20px 30px;
          margin-top: 30px;

          p {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .header {
    .container {
      background: url("@/static/img/mobile-header-bg.png") top center no-repeat;
      background-size: 150%;
      background-color: #33395a;
      .button {
        padding: 20px 30px;
        font-size: 13px;
      }
    }
  }
}

</style>