<script>
// https://uniapp.dcloud.io/collocation/App.html#applifecycle
import { mapState, mapMutations } from "vuex";
export default {
  globalData: {
    text: "text",
  },
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  onError: function () {
    console.log("App onError");
  },
  onPageNotFound: function () {
    console.log("App onPageNotFound");
  },
  onThemeChange: function () {
    console.log("App onThemeChange");
  },
  methods: {
    ...mapMutations(["setRole"]),
  },
};
</script>
<style lang="scss">
/*每个页面公共css */
@import "./uni.scss";
@import "./weui.scss";
@import "uview-ui/index.scss";
</style>
