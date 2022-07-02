import tab from "../utils/tabber.js";
const tabBer = {
  state: {
    role: "",
    tabList: [],
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
      let index = state.role === "null" ? "admin" : "admin";
      state.tabList = tab[index];
    },
  },
};

export default tabBer;
