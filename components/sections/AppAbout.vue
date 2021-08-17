<template>
  <section class="about">
    <div class="container border">
      <div class="mission">
        <div>
          <app-h2 text="Миссия" />
          <p class="t t-blue">
            Повышать КАЧЕСТВО жизни миллионов людей благодаря продвижению
            FinTech компаний
          </p>
        </div>
      </div>
      <div class="target">
        <div>
          <app-h2 text="Цель на 2023 год" />
          <p class="t t-blue">
            Одновременное маркетинговое сопровождение более 2000 финтех
            стартапов в рамках одного календарного месяца, и, как следствие,
            глобальное влияние на распространение новых финансовых технологий в
            мире.
          </p>
        </div>
      </div>
      <div class="video">
        <div class="fd-c ai-c">
          <div class="wrap fd-c ai-c">
            <app-h2
              text="Посмотрите welcome видео"
              sub="Руководителя Александра Тихонова
                о компании и ее ценностях"
            />
            <div class="video-item bg-light">
              <img src="img/video-preview.png" alt="Welcome видео" />
              <a
                href="https://www.youtube.com/watch?v=x4Xf4mmbecE"
                target="_blank"
                class="play"
              >
                <img src="img/play-icon.svg" alt="Просмотреть видео" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  .container {
    background: url("@/static/img/video-bg.png") no-repeat;
    background-position: center bottom;
    padding-bottom: 80px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -2px;
      width: 2px;
      height: 100%;
      display: block;
      border-left: 2px solid #43496b;
    }
    &::after {
      content: "";
      position: absolute;
      top: -100%;
      right: -2px;
      width: 2px;
      height: 100%;
      display: block;
      border-right: 2px solid #43496b;
    }
    .mission {
      padding: 0 60px;
      p {
        margin-top: 35px;
      }
    }
    .target {
      padding: 100px 60px 0 60px;
      p {
        margin-top: 35px;
      }
    }
    .video {
      .wrap {
        transform: translateY(70px);
        z-index: 10;

        h2 {
          span {
            margin-top: 30px;
          }
        }
        .video-item {
          position: relative;
          padding: 20px 20px 10px 20px;
          border-radius: 30px;
          margin-top: 45px;
          max-width: 811px;
          width: 100%;
          background: #3e4568;
          box-shadow: 0 0 26px #33395a;
          img {
            border-radius: 20px;
            width: 100%;
            height: auto;
          }
          .play {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: transparent;
            border: 0;
            transition: 0.2s;
            &:hover {
              filter: brightness(70%);
            }
            img {
              width: 65px;
              height: 65px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .about {
    .container {
      background: url("@/static/img/video-bg.png") no-repeat;
      background-position: center bottom;
      background-size: contain;
      padding-bottom: 80px;
      .mission,
      .target,
      .video {
        padding: 15px 0;
      }
      .video {
        .wrap {
          transform: translateY(30px);
          .video-item {
            max-width: 480px;
            padding: 15px 15px 8px 15px;
          }
        }
      }
    }
  }
}
</style>