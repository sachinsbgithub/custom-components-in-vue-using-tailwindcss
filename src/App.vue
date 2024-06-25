<template>
  <div class="bg-blue-500 flex items-center justify-center h-screen">
    <custom-button>Hello World</custom-button>
    <custom-card class="mt-4 text-center" height="200px" width="300px" align="center" justify="center" textAlignment="center">
      I am a Centered and Justified Card with Centered Text
    </custom-card>
    <custom-card class="mt-4" height="200px" width="300px" align="left" justify="right" textAlignment="right">
      I am a Left Aligned and Right Justified Card with Right Aligned Text
    </custom-card>
  </div>
</template>

<script>
import CustomButton from "@/components/Button/CustomButton.vue";
import CustomCard from "@/components/Card/CustomCard.vue";

export default {
  components: {
    CustomCard,
    CustomButton,
  },
};
</script>

<style scoped>
/* Center align items */
.flex {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
