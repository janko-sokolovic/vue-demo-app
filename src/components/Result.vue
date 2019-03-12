<template>
  <div class="result">{{result}}</div>
</template>

<script>
export default {
  name: "Result",
  props: {
    landmark: { type: Object, required: true },
    selectedAnswer: { type: String, required: true }
  },

  computed: {
    result() {
      return this.selectedAnswer === this.landmark.city
        ? "You are absolutely correct!"
        : "You are terribly wrong!";
    }
  }
};
</script>

<style>
.result {
  font-size: 60px;
  text-align: center;
  margin-top: 100px;
}
</style>