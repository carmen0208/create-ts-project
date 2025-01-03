import { greet } from '../src/index';
import { describe, it, expect } from '@jest/globals';

describe('Greet function', () => {
  it('should return greeting message with name', () => {
    const result = greet('Developer');
    expect(result).toBe('Hello, Developer! Welcome to TypeScript Stream project!');
  });
}); 