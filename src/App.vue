<template>
  <div class="bg-blue-500">
    <custom-button>Hello World</custom-button>
  </div>
</template>

<script>
import CustomButton from "./components/Button/CustomButton.vue";

export default {
  name: "App",
  components: {
    CustomButton,
  },
};
</script>
