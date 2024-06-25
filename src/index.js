import * as components from "./components";

// attempts to access the default export from the components object if it exists
console.log(components);
const componentsList = components?.default;
console.log(componentsList);
const CustomComponets = {
  //installing globally
  install(Vue) {
    Object.keys(componentsList).forEach((compname) => {
      console.log(compname);
      // Registering Components:
      Vue.component(compname, componentsList[compname]);
    });
  },
};
export default CustomComponets;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(CustomComponets);
}
