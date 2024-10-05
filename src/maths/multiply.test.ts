import { describe, expect, test } from 'bun:test'
import { multiply } from './multiply.ts'

describe('add', () => {
  test('adds two numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})
