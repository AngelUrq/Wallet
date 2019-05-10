export default {
  name: 'DateUtils',

  getActualDate() {
    const n = new Date()
    const y = n.getFullYear()
    const m = n.getMonth() + 1
    const d = n.getDate()
    return d + '/' + m + '/' + y
  },
}
