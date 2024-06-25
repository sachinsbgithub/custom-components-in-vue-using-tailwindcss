<template>
  <div
    :style="{ height, width, margin }"
    :class="`p-5 rounded-lg bg-white text-gray-800 
             hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-400 
             active:shadow-sm active:bg-gray-200 
             dark:bg-gray-800 dark:text-gray-200 
             dark:hover:bg-gray-700 dark:hover:shadow-gray-900 
             dark:active:bg-gray-600 
             transition-colors transition-shadow duration-500 ease-linear 
             ${textAlignClasses}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    height: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "auto",
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
    justify: {
      type: String,
      default: "left",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
    textAlignment: {
      type: String,
      default: "left",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
  },
  computed: {
    textAlignClasses() {
      return {
        "text-left": this.textAlignment === "left",
        "text-center": this.textAlignment === "center",
        "text-right": this.textAlignment === "right",
      };
    },
    margin() {
      return this.justify === "center" ? "auto" : this.justify === "right" ? "0 auto 0 0" : "0 0 0 auto";
    },
  },
};
</script>
