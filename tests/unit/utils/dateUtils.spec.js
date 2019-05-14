import { expect } from 'chai'
import DateUtils from '@/utils/DateUtils.js'

describe('DateUtils.js', () => {
  it('Check date', () => {
    const actualDate = new Date()
    const year = actualDate.getFullYear()
    const month = actualDate.getMonth() + 1
    const day = actualDate.getDate()
    const dateFormat = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2)
    const date = DateUtils.getActualDate()
    expect(date).to.equal(dateFormat)
  })
})
