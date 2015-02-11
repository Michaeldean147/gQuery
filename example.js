var body = document.body

function gQueryRecursive(selector, elements){
  if(elements.length == 0){
    return []
  }
  var nextGen = []
  var matches = []
  for(var i = 0; i < elements.length; i++){
    if(elements[i].id == selector.slice(1)){
       matches.push(elements[i])
    }
    else{
    var children = Array.prototype.slice.call(elements[i].children)
    nextGen = nextGen.concat(children)
    }
  }
  return matches.concat(gQueryRecursive(selector,nextGen))
}

function gQueryID(selector) {
  return gQueryRecursive(selector, [document.body])
}

console.log(gQueryID("#findThis"))

// function gQueryClass(cName) {
//   queue = body
//   var i = 0
//   while (!queue.empty?){
//     currentNode = body.children[i]
//   }
// }
//
// gQueryClass(".toFind")
