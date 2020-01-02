import hello from './index';

describe('a test case to make sure env is setup correctly', () => {
  it('should return hello world', () => {
    expect(hello()).toBe('hello world');
  });
});
