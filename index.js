// Code your solution here


function findMatching(drivers, string) {
    return drivers.filter(function(name) {
      return name.toLowerCase().indexOf(string.toLowerCase()) !== -1

    })
}


function fuzzyMatch(drivers, string) {
    return drivers.filter(function(name) {
     return name.toLowerCase().indexOf(string.toLowerCase()) === 0
   })
 }


 function matchName(drivers,string){
    return drivers.filter(function(element) {
        return element.name === string
      })
 }

