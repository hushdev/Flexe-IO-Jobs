<template>
  <section class="howTo">
    <div class="container border">
      <app-h2
        text="Как попасть в нашу команду?"
        sub="Расскажите о своем результате"
      />
      <p class="t t-blue">
        Отправьте свое резюме на почту <a href="mailto:ekaterina@flexe.io" class="t-white">ekaterina@flexe.io</a> и укажите результат
        своей работы на прошлом месте.
      </p>
      <p class="t t-blue">
        Если нас заинтересует ваш опыт и результаты, в течение 3 рабочих дней с
        HR менеджер свяжется с вами и проведет первичное ознакомительное
        собеседование.
      </p>
      <p class="t t-blue">
        Так же в нашей компании есть небольшой тест на 20 минут и нам крайне
        важна обратная связь ваших руководителей с прошлых мест работы, если вам
        нечего скрывать - welcome, ждем у нас в команде.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.howTo {
  .container {
    padding: 80px 91px 0 91px;
    p {
      margin-top: 25px;
      a {
        text-decoration: underline !important;
      }
      &:first-child {
        margin-top: 40px;
      }
    }
  }
}

@media (max-width: 834px) {
  .howTo {
    .container {
      padding: 40px 15px 0 15px;
    }
  }
}
</style>