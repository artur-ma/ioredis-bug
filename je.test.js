describe('ioredis', () => {

it ('test', () => {
  expect(jest.genMockFromModule('ioredis').Cluster).not.toEqual(undefined)
});

});
