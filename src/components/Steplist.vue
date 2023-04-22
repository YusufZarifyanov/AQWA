<template>
  <div class="steplist">
    <div class="steplist__title">
      <h1>Процесс заказа</h1>
    </div>

    <ol class="steplist__proc circle-big">
      <li>
        1
        <div class="steplist__proc__text">
          <div>
            <h3>Согласование</h3>
          </div>
          <div class="steplist__proc__text__description">
            <p align="justify">Заказчик согласовывает стоимость и состав проектирования с менеджером проекта.</p>
          </div>
        </div>
      </li>

      <li>
        2
        <div class="steplist__proc__text">
          <div>
            <h3>Техническое задание</h3>
          </div>
          <div class="steplist__proc__text__description">
            <p align="justify">Составляется техническое задание для проекта.</p>
          </div>
        </div>
      </li>

      <li>
        3
        <div class="steplist__proc__text">
          <div>
            <h3>Договор</h3>
          </div>
          <div class="steplist__proc__text__description">
            <p align="justify">Заключается договор на проектирование и вносится предоплата.</p>
          </div>
        </div>
      </li>

      <li>
        4
        <div class="steplist__proc__text">
          <div>
            <h3>Правки и сдача проекта</h3>
          </div>
          <div class="steplist__proc__text__description">
            <p align="justify">Заказчик вносит правки и после оплачивает остаток по договору. Заказчику передается спецификация на материалы и оборудование.</p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Steplist"
}
</script>

<style scoped>
*, ::after, ::before { box-sizing: border-box; }

.steplist {
  height: 100vh;
  background-color: yellow;
}

.steplist__title {
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 10vh;
}

.steplist__proc {
  border-top: 3px solid black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  list-style-type: none;
  /*gap: 3em;*/
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 30vh;

}

.steplist__proc li {
  color: black;
  cursor: pointer;
  padding: calc(5px + var(--circle-radius)) 0 0;
  margin: 0;
  position: relative;
  text-align: center;

}

.steplist__proc li::before {
  background-color: black;
  border-radius: 50%;
  border: 2px solid #ccc;

  content: '';
  position: absolute;
  height: calc(2 * var(--circle-radius));
  width: calc(2 * var(--circle-radius));
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

}

.steplist__proc li:first-child::after {
  display: none;
}

.steplist__proc li:last-child::after {
  display: none;
}

.circle-big {
  --circle-radius: 18px;
}

.steplist__proc__text {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.steplist__proc__text__description {
  /*text-align: start;*/
  margin-top: 20px;
  width: 100%;

}

</style>
