import { sumAsync } from './sum'

it('should add two numbers correctly', (done) => {
  const resultPromise = sumAsync(10, 20)
  
  resultPromise.then((result) => {
    expect(result).toBe(30)
    done()
  })
})
