function fibonacci(num)
{
  const data = [0,1]
  for(let i = 2; i <=num; i++)
    {
      data[i] = data[i-1] + data[i-2];
    }
    return data[num]
}

console.log(fibonacci(2)) // 0 + 1 = 1
console.log(fibonacci(3)) // 1 + 1 = 2
console.log(fibonacci(4)) // 2 + 1 = 3
console.log(fibonacci(5)) // 3 + 2 = 5
console.log(fibonacci(6)) // 5 + 3 = 8
console.log(fibonacci(7)) // 8 + 5 = 13
console.log(fibonacci(8)) // 13 + 8 = 21
console.log(fibonacci(9)) // 21 + 13 = 34
console.log(fibonacci(10)) // 34 + 21 = 55
console.log(fibonacci(11)) // 55 + 34 = 89
console.log(fibonacci(12)) // 89 + 55 = 144

