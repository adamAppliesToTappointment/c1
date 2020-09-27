import storeMiddleware from '../../middlewares/memory/storeMiddleware';

test('takes req.body.valueToStore and calls memory service with it', async () => {
  const req = {
    body: {
      valueToStore: '99'
    }
  };
  const res = {
    json: jest.fn()
  };

  const mockService = {
    store: async () =>
      new Promise(resolve => {
        resolve('9');
      }),
  };

  await storeMiddleware(mockService)(req, res);
  expect(res.json).toHaveBeenCalledWith({success: true});
});

test('if req.body.valueToStore is missing returns with success: false', async () => {
  const req = {

  };
  const res = {
    json: jest.fn()
  };

  const mockService = {
    store: async () =>
      new Promise(resolve => {
        resolve('9');
      }),
  };

  await storeMiddleware(mockService)(req, res);
  expect(res.json).toHaveBeenCalledWith({success: false});
});