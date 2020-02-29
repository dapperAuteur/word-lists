var fs = require('fs');
const verbos = require("./verbos-ratel");

// console.log(verbos, "verbos");

for (let i = 0; i < verbos.length; i++) {
  if (verbos[i]._id) {
    delete verbos[i]._id
  }
  if (verbos[i].createdAt) {
    delete verbos[i].createdAt
  }
  if (verbos[i].updatedAt) {
    delete verbos[i].updatedAt
  }
  if (verbos[i].__v) {
    delete verbos[i].__v
  }
  // 
  if (verbos[i].english) {
    verbos[i]["Verbo.english"] = verbos[i].english
    delete verbos[i].english
  }
  if (verbos[i].reflexive) {
    verbos[i]["Verbo.reflexive"] = verbos[i].reflexive
    delete verbos[i].reflexive
  }
  if (verbos[i].irregular) {
    verbos[i]["Verbo.irregular"] = verbos[i].irregular
    delete verbos[i].irregular
  }
  if (verbos[i].categoria_de_irregular) {
    verbos[i]["Verbo.categoria_de_irregular"] = verbos[i].categoria_de_irregular
    delete verbos[i].categoria_de_irregular
  }
  // 
  if (verbos[i].cambiar_de_irregular) {
    verbos[i]["Verbo.cambiar_de_irregular"] = verbos[i].cambiar_de_irregular
    delete verbos[i].cambiar_de_irregular
  }
  if (verbos[i].terminacion) {
    verbos[i]["Verbo.terminacion"] = verbos[i].terminacion
    delete verbos[i].terminacion
  }
  if (verbos[i].spanish) {
    verbos[i]["Verbo.spanish"] = verbos[i].spanish
    delete verbos[i].spanish
  }
  if (verbos[i].grupo) {
    verbos[i]["Verbo.grupo"] = verbos[i].grupo
    delete verbos[i].grupo
  }
}

console.log(verbos, "verbos");

fs.appendFile('new-verbos.js', JSON.stringify(verbos), function (err) {
  if(err) throw err;
  console.log(err, err)
})