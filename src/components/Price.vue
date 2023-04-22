<template>
  <div id="price" class="price">
    <h1>Расчет стоимости проектирования и монтажных работ</h1>
    <p>С вами свяжется наш специалист</p>
    <form @submit.prevent>
      <Input
          v-model="name"
          type="text"
          placeholder="Имя"
      />
      <Input
          v-model="phone"
          type="text"
          placeholder="Телефон"
      />
      <Input
          v-model="email"
          type="text"
          placeholder="E-mail"
      />

      <button
          class="price__button"
          @click="sendMsgToEmail"
      >
        Отправить заявку
      </button>
    </form>
  </div>
</template>

<script>
import Input from "@/components/UI/Input";

export default {
  name: "Price",
  components: {
    Input
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    sendMsgToEmail() {
      console.log(this.name, this.phone, this.email)
    }
  }
}
</script>

<style scoped>
.price {
  min-height: 100vh;
  background-image: url("@/assets/images/priceImg.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.price__button {
  width: 100%;
  background-color: yellow;
  margin: 15px;
  border-radius: 5px;

}

form {
  display: flex;
  flex-direction: row;
}

h1 {
  color: black;
  margin: 20px 0;
}

p {
  font-size: 20px;
  margin: 20px 0;
}
</style>
