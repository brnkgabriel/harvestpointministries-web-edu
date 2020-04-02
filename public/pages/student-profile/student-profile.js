
var StudentProfileFn = function (path, param) {
  function preprocess(path, param) {
    path = path.replaceAll('/', '')
    var profiledata =  db.get(path, param)
    return render(path, profiledata)
  }

  function render(path, data) { return build(path, data) }

  // after building the html, ensure to return it
  // in order to set the app innerHTML to it in script.js
  function build(path, data) {
    // todo: compString won't be needed later
    // we'll rebuild the html with the parameter: data
    var compString = componentString(path)
    return MinifiedHTML[compString]
  }

  return preprocess(path, param)
}