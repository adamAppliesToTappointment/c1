import recallMiddleware from '../../middlewares/memory/recallMiddleware';

test('calls memoryService and puts the value in the response object', async () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  const mockService = {
    recall: async () =>
      new Promise(resolve => {
        resolve('9');
      }),
  };

  await recallMiddleware(mockService)(req, res);
  expect(res.json).toHaveBeenCalledWith({success: true, recalledValue: '9'});
});