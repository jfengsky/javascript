const Util = require('../src/index')

describe('test.js: ', () => {
    it('isNum() should work fine.', () => {
        expect(Util.isNum(1)).toBe(true)
        expect(Util.isNum('1')).toBe(false)
    })
})