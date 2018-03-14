const empty = 0
const up = 1
const left = 2
const diagonal = 3

module.exports = function longestCommonSubsequence(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('inputs must be strings')
  }

  const lcs = table(a.length + 1, b.length + 1)
  const directions = table(a.length + 1, b.length + 1)

  // a empty
  for (let i = 0; i <= b.length; i++) {
    lcs[0][i] = 0
    directions[0][i] = empty
  }

  // b empty
  for (let i = 0; i <= a.length; i++) {
    lcs[i][0] = 0
    directions[i][0] = empty
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1
        directions[i][j] = diagonal
      } else {
        const upLcs = lcs[i - 1][j]
        const leftLcs = lcs[i][j - 1]
        if (upLcs >= leftLcs) {
          lcs[i][j] = upLcs
          directions[i][j] = up
        } else {
          lcs[i][j] = leftLcs
          directions[i][j] = left
        }
      }
    }
  }

  let result = ''
  const diff = []
  let [i, j] = [a.length, b.length]
  let m = directions[i][j]
  while (m !== empty) {
    if (m === diagonal) {
      i--
      j--
      result = a[i] + result
      diff.push(['keepOld', i])
    } else if (m === left) {
      j--
      diff.push(['addNew', j])
    } else if (m === up) {
      i--
      diff.push(['removeOld', i])
    }
    m = directions[i][j]
  }
  while (j > 0) {
    j--
    diff.push(['addNew', j])
  }
  while (i > 0) {
    i--
    diff.push(['removeOld', i])
  }
  diff.reverse()

  return { lcs: result, diff }
}

function table(height, width) {
  const table = new Array(height)
  for (let i = 0; i < height; i++) table[i] = new Array(width)
  return table
}
