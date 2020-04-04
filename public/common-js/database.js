class Datastore {
  constructor() {
    this.collection = 'education'
    this.initialize()
    console.log('this.db', this.db)
    console.log('this.auth', this.auth)

  }

  initialize() {
    var firebaseConfig = {
      apiKey: "AIzaSyCV2RIdAIZmDADebJnNoUOpWjEUnR_eVlk",
      authDomain: "harvestpointministries-edu.firebaseapp.com",
      databaseURL: "https://harvestpointministries-edu.firebaseio.com",
      projectId: "harvestpointministries-edu",
      storageBucket: "harvestpointministries-edu.appspot.com",
      messagingSenderId: "774916786122",
      appId: "1:774916786122:web:5c547b6b667f8ed1563133",
      measurementId: "G-SKBELB17L9"
    }
    var firebaseApp = firebase.initializeApp(firebaseConfig)
    this.db = firebaseApp.firestore()
    this.auth = firebaseApp.auth()
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