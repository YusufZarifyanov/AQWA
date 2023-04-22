<template>
  <div class="serviceItem">
    <img :src="image">

    <div class="serviceItem__description">
      <p>{{description}}</p>
    </div>

    <div class="serviceItem__link">
      <a>Рассчитать стоимость</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    image: {
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.serviceItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}

.serviceItem__description {
  height: 60px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 10px;
}

.serviceItem__link {
  margin-top: 20px;
  background-color: black;
  color: yellow;
  padding: 10px;
  border-radius: 10px;
}

img {
  width: 200px;
  height: 200px;
}

p {
  font-size: 22px;
}

</style>
