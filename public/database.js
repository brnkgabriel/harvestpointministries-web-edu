// var Database = function () {

//   this.get = function (path, param) {
//   }
// }

// var db = new Database()

class Database {
  constructor() {
    this.db = null
    this.collection = 'education'
  }

  listen() {
    return this.db.collection(this.collection)
      .onSnapshot(snapshot => {
        var users = [], usersObj = {}
        snapshot.docChanges().forEach(change => usersObj = change.doc.data())
        Object.keys(usersObj).forEach(key => users.push(self.expand(usersObj[key])))
        var evt = new CustomEvent('firestore', { detail: users, msg: 'success' })
        window.dispatchEvent(evt)
      }, err => {
        var evt = new CustomEvent('firestore', { detail: err.message, msg: 'error' })
        window.dispatchEvent(evt)
      })
  }

  send() {
    var dbData = {}
    dbData[this.form.email.value] = this.compress()
    this.database.dbs.map(dbObj => {
      dbObj['db'].collection('puzzle').doc('data')
        .set(dbData, { merge: true })
        .then(_ => console.log('sent to', dbObj['name']))
        .catch(err => console.log(err))
    })
  }
}