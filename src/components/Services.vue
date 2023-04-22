<template>
  <div class="services" id="service">
    <div><h1>Наши услуги</h1></div>
    <div class="services__description">
      <p>Мы проектируем и монтируем системы: отопления, водоснабжения, канализации, а также котельные в частных домах.</p>
    </div>
    <div class="services__images">
      <ServiceItem
      v-for="imageObj in images"
      :image="imageObj.image"
      :description="imageObj.description"
      :key="imageObj.id"
      ></ServiceItem>
    </div>
    <div class="services__downloadLink">
      <a href="../assets/files/Price_aqua_service.pdf" download="">СКАЧАТЬ ПРАЙС-ЛИСТ</a>
    </div>
  </div>
</template>

<script>
import ServiceItem from "@/components/ServiceItem";
import image from "@/assets/images/serviceImg1.jpg"

export default {
  data() {
    return {
      images: [
        {
          id: 1,
          image,
          description: "Котельные и тепловые пункты"
        },
        {
          id: 2,
          image,
          description: "Водоснабжение и канализация"
        },
        {
          id: 3,
          image,
          description: "Теплый пол"
        },
        {
          id: 4,
          image,
          description: "Радиаторное отопление"
        },
      ]
    }
  },
  name: "Services",
  components: {
    ServiceItem
  }
}
</script>

<style scoped>
  .services {
    height: 110vh;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }

  .services__description {
    width: 40vw;
    height: 100px;
    color: black;
    padding-top: 20px;
    position: relative;
  }

  .services__images {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }

  .services__downloadLink {
    background-color: white;
    padding: 15px;
    margin-top: 40px;
    border-radius: 10px;
  }

  h1 {
    color: black;
    font-size: 45px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 20px;
    font-size: 20px;
  }
</style>
