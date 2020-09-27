<template>
  <v-app>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
          <v-card width="300px">
            <v-card-text>
              <div class="result">{{ parsedResult }}</div>
              <v-textarea :value="`${operationsLog}${currentOperand}`" rows="1" autoGrow readonly/>
              <v-row align="center" justify="center">
                <v-btn @click="clear">C</v-btn>
                <v-btn @click="recallFromMemory">MR</v-btn>
                <v-btn @click="storeInMemory">MS</v-btn>
                <v-btn @click="operatorClicked('/')">/</v-btn>
              </v-row>
              <v-row align="center" justify="center">
                <v-btn @click="appendNumber('7')">7</v-btn>
                <v-btn @click="appendNumber('8')">8</v-btn>
                <v-btn @click="appendNumber('9')">9</v-btn>
                <v-btn @click="operatorClicked('*')">x</v-btn>
              </v-row>
              <v-row align="center" justify="center">
                <v-btn @click="appendNumber('4')">4</v-btn>
                <v-btn @click="appendNumber('5')">5</v-btn>
                <v-btn @click="appendNumber('6')">6</v-btn>
                <v-btn @click="operatorClicked('-')">-</v-btn>
              </v-row>
              <v-row align="center" justify="center">
                <v-btn @click="appendNumber('1')">1</v-btn>
                <v-btn @click="appendNumber('2')">2</v-btn>
                <v-btn @click="appendNumber('3')">3</v-btn>
                <v-btn @click="operatorClicked('+')">+</v-btn>
              </v-row>
              <v-row align="center" justify="center">
                <v-btn @click="appendNumber('0')" style="width: 128px">0</v-btn>
                <v-btn @click="appendDecimalPoint('.')">.</v-btn>
                <v-btn @click="evaluate()">=</v-btn>
              </v-row>
            </v-card-text>
          </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import memoryService from './services/memoryService';

export default {
  data: () => ({
    answer: '',
    operationsLog: '',
    currentOperand: '',
    operatorClickedLast: true,
    displayLength: 15
  }),

  computed: {
    parsedResult() {
      if (this.answer === '') {
        return '';
      } else if (Number.isNaN(this.answer) || this.answer == 'Infinity') {
        return 'Error';
      }
      if (this.answer > 9999999999999) {
        return this.answer.toExponential(6);
      } else if(!Number.isInteger(this.answer)){
        return parseFloat(this.answer)
          .toFixed((this.displayLength - 2) - this.answer.toString().split('.')[0].length)
          .toString().replace(/[0]+$/g, '');
      } else {
        return this.answer;
      }
    }
  },

  methods: {
    appendNumber(nextCharacter) {
      this.currentOperand += nextCharacter;
      this.operatorClickedLast = false;
    },

    appendDecimalPoint() {
      if (!this.currentOperand.includes('.')) {
        if (this.currentOperand.length > 0) {
          this.currentOperand += '.';
        } else {
          this.currentOperand = '0.';
        }
      }
    },

    operatorClicked(operator) {
      if (!this.operatorClickedLast && this.currentOperand) {
        this.operatorClickedLast = true;
        this.operationsLog = `${this.operationsLog}${this.currentOperand} ${operator} `;
        this.currentOperand = '';
        this.operator = '';
      }
    },

    evaluate() {
      if (!this.operatorClickedLast) {
        const rawOutput = eval(`${this.operationsLog} ${this.currentOperand}`);
        this.answer = rawOutput;
      }
    },

    async recallFromMemory() {
      const recalledValue = await memoryService.recallFromMemory();
      this.currentOperand = recalledValue < 0 ? `(${recalledValue})` : recalledValue;
      this.operatorClickedLast = false;
    },

    storeInMemory() {
      if (this.parsedResult && this.parsedResult !== 'Error') {
        memoryService.storeInMemory(this.answer);
      }
    },

    clear() {
      this.answer = '';
      this.operationsLog = '';
      this.currentOperand = '';
    }
  },
};
</script>

<style scoped>
.result {
	font-weight: 500;
  background-color: #b4d2e0;
	color: #146080;
	font-size: 33px;
	height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
}
</style>
