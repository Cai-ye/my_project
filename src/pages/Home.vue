<template>
  <div class="home">
    <div class="left">Yike Wang</div>
    <div class="right">
      <img src="../assets/timg.png" alt="" @click="goToPage" />
      <div class="text">Weclome to my channel</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToPage() {
      this.$router.push("/display");
    },
  },
};
</script>
<style scoped>
@import "../common/font/font.css";

.home {
  max-width: 1200px;
  margin: 20px auto 0;
  display: flex;
}
.left {
  font-size: 30px;
  font-family: "英文字体";
  margin-right: 20px;
}
.right {
  flex: 1;
  padding-top: 80px;
}
.text {
  font-family: "英文字体";
  margin-top: 30px;
}
</style>
