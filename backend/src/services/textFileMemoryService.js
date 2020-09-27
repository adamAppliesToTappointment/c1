import fs from 'fs';

export default {
  async recall() {
    try {
      return await fs.promises.readFile('./db/memory.txt', 'utf-8');
    } catch (error) {
      return '';
    }
  },

  async store(valueToStore) {
    const data = new Uint8Array(Buffer.from(valueToStore.toString()));
    try {
      await fs.promises.writeFile('./db/memory.txt', data);
      return { success: true }
    } catch (error) {
      return error;
    }
  }
}