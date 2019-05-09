export default {
  name: 'DateUtils',

  getActualDate () {
    var n = new Date()
    var y = n.getFullYear()
    var m = n.getMonth() + 1
    var d = n.getDate()
    return m + '/' + d + '/' + y
  }
}
