// Simple test cases to demonstrate CI pipeline working
describe('Basic Application Tests', () => {
  test('should pass basic math test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should have package.json with name', () => {
    const packageJson = require('../package.json');
    expect(packageJson.name).toBe('heavens-above');
  });

  test('should have required dependencies', () => {
    const packageJson = require('../package.json');
    expect(packageJson.dependencies.express).toBeDefined();
  });

  test('should pass string test', () => {
    const appName = 'heavens-above';
    expect(appName).toContain('heavens');
  });
});