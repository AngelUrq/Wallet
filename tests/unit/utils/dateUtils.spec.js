import { expect } from 'chai'
import DateUtils from '@/utils/DateUtils.js'

describe('DateUtils.js', () => {
  it('check date', () => {
    const actualDate = new Date()
    const year = actualDate.getFullYear()
    const month = actualDate.getMonth() + 1
    const day = actualDate.getDate()
    const dateFormat = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2)
    const date = DateUtils.getActualDate()
    expect(date).to.equal(dateFormat)
  })

  it('returns false if a date is outside range', () => {
    const dateToTest = '2018-06-04'
    const startDate = '2018-06-05'
    const endDate = '2018-06-09'
    const isDateWithinRange = DateUtils.isDateWithinRange(dateToTest, startDate, endDate)
    expect(isDateWithinRange).to.eq(false)
  })

  it('returns true if a date is within range', () => {
    const dateToTest = '2018-06-06'
    const startDate = '2018-06-05'
    const endDate = '2018-06-09'
    const isDateWithinRange = DateUtils.isDateWithinRange(dateToTest, startDate, endDate)
    expect(isDateWithinRange).to.eq(true)
  })

  it('returns true when start and end dates are valid', () => {
    const startDate = '2018-06-05'
    const endDate = '2018-06-09'
    const isDateWithinRange = DateUtils.areDatesValid(startDate, endDate)
    expect(isDateWithinRange).to.eq(true)
  })

  it('returns false when start and end dates are invalid', () => {
    const startDate = '2018-06-10'
    const endDate = '2018-06-09'
    const isDateWithinRange = DateUtils.areDatesValid(startDate, endDate)
    expect(isDateWithinRange).to.eq(false)
  })
})
