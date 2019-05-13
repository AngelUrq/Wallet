import { expect } from 'chai'
import DateUtils from '@/utils/DateUtils.js'

describe('DateUtils.js', () => {
  it('Check date', () => {
    const actualDate = new Date()
    const year = actualDate.getFullYear()
    const month = actualDate.getMonth() + 1
    const day = actualDate.getDate()
    const dateFormat = month + '/' + day + '/' + year
    const date = DateUtils.getActualDate()
    expect(date).to.equal(dateFormat)
  })
})
