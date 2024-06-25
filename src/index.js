import * as components from "./components";

// attempts to access the default export from the components object if it exists
const componentsList = components?.default;
const CustomComponets = {
  //installing globally
  install(Vue) {
    Object.keys(componentsList).forEach((compname) => {
      // Registering Components:
      Vue.component(compname, componentsList[compname]);
    });
  },
};
export default CustomComponets;
