<template>
  <section class="faq">
    <div class="container border">
      <app-h2 text="FAQ" />
      <div v-for="(item, idx) in faq" :key="idx" class="item">
        <div
          class="question t-b-small t-white fd-r jc-b ai-c"
          :class="[{ 'bg-light': item.active }, { active: item.active }]"
        >
          {{ item.question }}
          <button @click="item.active = !item.active">
            <img
              src="img/arrow.svg"
              :class="{ rotate: item.active }"
              alt="Показать/скрыть"
            />
          </button>
        </div>
        <transition name="dropdown">
          <div v-show="item.active" class="answer t t-blue">
            <p>{{ item.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        question: "Как откликнуться на несколько вакансий?",
        answer:
          "Вы можете отправить своё резюме на почту и мы предложим вам открытые вакансии, в соотвествии с вашим опытом.",
        active: true,
      },
      {
        question: "Как подготовиться к собеседованию?",
        answer:
          "Если у вас есть подтвержденные результаты работы или кейсы, подготовьте их заранее, мы будем рады ознакомиться с ними. Также будет здорово если вы предоставите рекомендальные письма. В остальнои главное быть открытым и честным при разговоре с менеджером!",
        active: false,
      },
      {
        question: "Когда вы сообщите результаты собеседования?",
        answer:
          "На каждую вакансию сроки рассмотрения кандидатуры индивидуальны. В среднем это занимает неделю.",
        active: false,
      },
      {
        question: " Возможно ли работать из офиса?",
        answer:
          "Все наши позиции имеют полностью удаленный формат и не предполагают работы в офисе.",
        active: false,
      },
    ],
  }),
};
</script>

<style lang="scss">
.faq {
  padding-bottom: 275px;
  .container {
    border-bottom: 2px solid #43496b;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding-top: 100px;
    padding-bottom: 30px;
    h2 {
      padding-left: 60px;
      margin-bottom: 40px;
    }
    .item {
      margin-bottom: 30px;
      * {
        transition: 0.2s;
      }
      .question {
        padding: 15px 59px;
      }
      .answer {
        padding: 30px 59px;
      }
      .active {
        background: #33395a;
        border: 0;
        border-radius: 20px 20px 0 0 !important;
      }
      .question {
        border-radius: 20px;
        border: 2px solid #33395a;

        .rotate {
          transform: rotate(-90deg);
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 57px;
          height: 57px;
          min-width: 57px;
          min-height: 57px;
          border: 0;
          outline: 0;
          background: linear-gradient(135deg, #58618a 0%, #58618a 100%);
          box-shadow: 0 0 10px rgb(74 81 119 / 56%);
          border-radius: 20px;
          position: relative;
          z-index: 2;
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
          img {
            transform: rotate(90deg);
            width: 10px;
            height: auto;
            transition: 0.2s;
          }
        }
      }
      .answer {
        font-size: 18px;
        border: 2px solid #517af3;
        border-top: 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
}

@media (max-width: 834px) {
  .faq {
    padding-bottom: 100px;
    .container {
      h2 {
        padding-left: 0;
      }
      .item {
        .answer {
          padding: 20px 30px;
        }
        .question {
          padding: 10px 30px;
          button {
            border-radius: 15px;
            width: 47px;
            height: 47px;
            min-width: 47px;
            min-height: 47px;
            img {
              width: 7px;
            }
            &::before {
              border-radius: 15px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .faq {
    padding-bottom: 30px;
  }
}
</style>