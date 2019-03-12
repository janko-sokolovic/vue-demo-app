<template>
  <div>
    <div class="question">
      Where is the
      <span class="landmark">{{landmark.name}}</span> located?
    </div>
    <div class="answers">
      <button
        v-for="(answer, i) in answers"
        class="answer"
        :key="i"
        @click="selectAnswer(answer)"
      >{{answer}}</button>
    </div>
  </div>
</template>

<script>
import landmarks from "../data/landmarks.json";
import cities from "../data/citites.json";
import _ from "lodash";

export default {
  name: "Question",

  data() {
    return {
      answers: [],
      selectedAnswer: "",
      landmark: ""
    };
  },

  methods: {
    selectAnswer(answer) {
      this.$router.push({
        name: "Result",
        params: { landmark: this.landmark, selectedAnswer: answer }
      });
    }
  },

  mounted() {
    const landmark = _.sample(landmarks);
    const correctCity = landmark.city;
    const incorrectCities = _.sampleSize(_.without(cities, correctCity), 3);
    const answers = _.shuffle(incorrectCities.concat(correctCity));

    this.answers = answers;
    this.selectedAnswer = "";
    this.landmark = landmark;
  }
};
</script>

<style>
.question {
  font-size: 30px;
  text-align: center;
}

.landmark {
  color: #0f52ba;
  font-weight: bold;
}

.answers {
  width: 500px;
  margin: 100px auto;
}

.answer {
  display: inline-block;
  width: 200px;
  border-radius: 5px;
  text-align: center;
  padding: 15px;
  margin: 10px 25px;
  font-size: 20px;
  background: #eeeeee;
  cursor: pointer;
  outline: none;
  font-weight: bold;
}

.answer:hover {
  background: rgb(52, 110, 199);
  color: #ffffff;
}

.answer:active {
  background: #0f52ba;
}
</style>