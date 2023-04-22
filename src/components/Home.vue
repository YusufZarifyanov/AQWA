<template>
  <div class="home">
    <div class="home__title">
      <p>Проектирование и монтаж систем отопления в частных домах под ключ</p>
    </div>
    <div class="home__btns">
      <div class="home__btn1">
        <a>Рассчитать стоимость</a>
      </div>
      <div class="home__btn2" hr>
        <a href="#service" style="color: white">Услуги</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  background-image:
      linear-gradient(to bottom, rgba(4, 69, 87, 0.80), rgba(117, 19, 93, 0.73)),
      url("@/assets/images/homeImg.jpg");
  background-size: cover;
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  padding: 100px;
}

.home__title {
 width: 45vw;
}

.home__btns {
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-around;
  margin-top: 40px;
}

.home__btn1 {
  width: 250px;
  height: 50px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__btn2 {
  width: 150px;
  height: 50px;
  background: none;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
}

p {
  color: white;
  font-size: 40px;
  font-weight: 600;
}

a {
  text-decoration: none;
}
</style>
