const { getLocalDate } = require('./');

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test("when getLocalDate('07', '04', '2020')", () => {
    expect(getLocalDate('07', '04', '2020')).toEqual('2020-07-04');
  });
  test("when getLocalDate('12', '31', '2020')", () => {
    expect(getLocalDate('12', '31', '2020')).toEqual('2020-12-31');
  });
  test("when getLocalDate('01', '01', '2021')", () => {
    expect(getLocalDate('01', '01', '2021')).toEqual('2021-01-01');
  });
  test("when getLocalDate('11', '25', '2020')", () => {
    expect(getLocalDate('11', '25', '2020')).toEqual('2020-11-25');
  });
});
