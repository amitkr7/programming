const gridTraveler = (m, n, mem = {}) => {
  const key = m + ',' + n

  if (key in mem) return mem[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  mem[key] = gridTraveler(m - 1, n, mem) + gridTraveler(m, n - 1, mem)

  return mem[key]
}
console.log(gridTraveler(2, 3))
console.log(gridTraveler(6, 6))
console.log(gridTraveler(18, 18))
