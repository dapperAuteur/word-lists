var fs = require('fs');
const fourLetterWords = require("./fourLetterWords");

// console.log(fourLetterWords, "fourLetterWords");

for (let i = 0; i < fourLetterWords.length; i++) {
  if (fourLetterWords[i]._id) {
    delete fourLetterWords[i]._id
  }
  if (fourLetterWords[i].createdAt) {
    delete fourLetterWords[i].createdAt
  }
  if (fourLetterWords[i].updatedAt) {
    delete fourLetterWords[i].updatedAt
  }
  if (fourLetterWords[i].__v) {
    delete fourLetterWords[i].__v
  }
  // 
  if (fourLetterWords[i].definition) {
    fourLetterWords[i]["FourLetterWord.definition"] = fourLetterWords[i].definition
    delete fourLetterWords[i].definition
  }
  if (fourLetterWords[i].s_points) {
    fourLetterWords[i]["FourLetterWord.s_points"] = fourLetterWords[i].s_points
    delete fourLetterWords[i].s_points
  }
  if (fourLetterWords[i].f_points) {
    fourLetterWords[i]["FourLetterWord.f_points"] = fourLetterWords[i].f_points
    delete fourLetterWords[i].f_points
  }
  if (fourLetterWords[i].tier) {
    fourLetterWords[i]["FourLetterWord.tier"] = fourLetterWords[i].tier
    delete fourLetterWords[i].tier
  }
  // 
  if (fourLetterWords[i].in_game) {
    fourLetterWords[i]["FourLetterWord.in_game"] = fourLetterWords[i].in_game
    delete fourLetterWords[i].in_game
  }
  if (fourLetterWords[i].tongue) {
    fourLetterWords[i]["FourLetterWord.tongue"] = fourLetterWords[i].tongue
    delete fourLetterWords[i].tongue
  }
  if (fourLetterWords[i].word) {
    fourLetterWords[i]["FourLetterWord.word"] = fourLetterWords[i].word
    delete fourLetterWords[i].word
  }
}

console.log(fourLetterWords, "fourLetterWords");

fs.appendFile('new-fourLetterWords.js', JSON.stringify(fourLetterWords), function (err) {
  if(err) throw err;
  console.log(err, err)
})