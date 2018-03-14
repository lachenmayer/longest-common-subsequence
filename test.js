const test = require('ava')

const lcs = require('.')

test('evolution', t => {
  t.is(lcs('human', 'chimpanzee'), 'hman')
})
