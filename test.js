const test = require('ava')

const findLcs = require('.')

test('evolution', t => {
  const { lcs, diff } = findLcs('human', 'chimpanzee')
  t.is(lcs, 'hman')
  t.deepEqual(diff, [
    ['addNew', 0],
    ['keepOld', 0],
    ['addNew', 2],
    ['removeOld', 1],
    ['keepOld', 2],
    ['addNew', 4],
    ['keepOld', 3],
    ['keepOld', 4],
    ['addNew', 7],
    ['addNew', 8],
    ['addNew', 9],
  ])
})

test('empty left', t => {
  const { lcs, diff } = findLcs('', 'anything')
  t.is(lcs, '')
  t.deepEqual(diff, [
    ['addNew', 0],
    ['addNew', 1],
    ['addNew', 2],
    ['addNew', 3],
    ['addNew', 4],
    ['addNew', 5],
    ['addNew', 6],
    ['addNew', 7],
  ])
})

test('empty right', t => {
  const { lcs, diff } = findLcs('anything', '')
  t.is(lcs, '')
  t.deepEqual(diff, [
    ['removeOld', 0],
    ['removeOld', 1],
    ['removeOld', 2],
    ['removeOld', 3],
    ['removeOld', 4],
    ['removeOld', 5],
    ['removeOld', 6],
    ['removeOld', 7],
  ])
})
