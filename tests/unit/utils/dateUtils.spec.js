import { expect } from 'chai'
import DateUtils from '@/utils/DateUtils.js'

describe('DateUtils.js', () => {
  it('Check date', () => {
    let date = DateUtils.getActualDate()
    expect(date).to.equal('5/9/2019')
  })
})
