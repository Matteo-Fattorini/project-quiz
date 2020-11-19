const app = new Vue({
  el: "#app",

  data: {
    winMessage: "",
    guessedRight: 0,
    finalScore: null,
    right: [],
    selectedAnsw: 0,
    userSel: [],
    current: 1,
    questions: [
      (first = {
        answers: [4, 2, 5, 10],
        question: "Quanto fa 5+5?",
        solutionIndex: 3,
      }),
      (second = {
        answers: [4, 50, 70, 10],
        question: "Quanto fa 2+2?",
        solutionIndex: 0,
      }),
      (third = {
        answers: [4, 2, 5, 522],
        question: "Quanto fa 1+1?",
        solutionIndex: 1,
      }),
      (fourth = {
        answers: [4, 2, 25, 100],
        question: "Quanto fa 5*5?",
        solutionIndex: 2,
      }),
      (fifth = {
        answers: [4, 2, 5, 1000],
        question: "Quanto fa 10*10?",
        solutionIndex: 3,
      }),
    ],
  },

  methods: {
    onChange(event) {
      let data = event.target.value;
      this.selectedAnsw = data;
    },

    check() {
      if (this.selectedAnsw.length == 0) {
        alert("non hai inserito niente!");
      } else if (this.finalScore == true) {
        alert("Gioco finito");
      } else {
        this.userSel.push(this.selectedAnsw);
        this.selectedAnsw = [];
        this.current < 5 ? this.current++ : this.result();
      }
    },

    result() {
      this.finalScore = true;
      this.questions.forEach((e, i) =>
        this.right.push(e.solutionIndex == this.userSel[i])
      );
      if (this.right.every((e) => e === true)) {
        this.winMessage = "Hai vinto! :)";
      } else {
        this.winMessage = "Hai Perso! :(";
      }
      this.right.forEach((e) => {
        if (e == true) this.guessedRight += 1;
      });
    },
  },
});



