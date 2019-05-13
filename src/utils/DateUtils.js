export default {
  name: 'DateUtils',

  getActualDate() {
    const n = new Date()
    const y = n.getFullYear()
    const m = n.getMonth() + 1
    const d = n.getDate()
    return m + '/' + d + '/' + y
  },
  areDatesValid(startDate, endDate) {
    if (startDate === undefined || endDate === undefined) {
      return false
    }
    const sDate = new Date(startDate)
    const eDate = new Date(endDate)
    return sDate <= eDate
  },

  isDateWithinRange(dateToTest, startDate, endDate) {
    const sDate = new Date(startDate)
    const eDate = new Date(endDate)
    const testedDate = new Date(dateToTest)
    return testedDate >= sDate && testedDate <= eDate
  },
}
