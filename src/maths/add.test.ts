import { describe, expect, test } from 'bun:test'
import { add } from './add.ts'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
