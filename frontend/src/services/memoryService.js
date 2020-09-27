import axios from 'axios';

export default {
  async recallFromMemory() {
    try {
      const result = await axios.get('/memory/recall');
      return result.data.recalledValue;
    } catch (error) {
      return 'memory is empty';
    }
  },

  storeInMemory(valueToStore) {
    axios.put('/memory/store', { valueToStore });
  }
}