var fs = require('fs');
const prefixSuffixRoot = require("./prefixSuffixRoot");

// console.log(prefixSuffixRoot, "prefixSuffixRoot");

for (let i = 0; i < prefixSuffixRoot.length; i++) {
  if (prefixSuffixRoot[i]._id) {
    delete prefixSuffixRoot[i]._id
  }
  if (prefixSuffixRoot[i].createdAt) {
    delete prefixSuffixRoot[i].createdAt
  }
  if (prefixSuffixRoot[i].updatedAt) {
    delete prefixSuffixRoot[i].updatedAt
  }
  if (prefixSuffixRoot[i].__v) {
    delete prefixSuffixRoot[i].__v
  }
  // 
  if (prefixSuffixRoot[i].meaning) {
    prefixSuffixRoot[i]["PrefixSuffixRoot.meaning"] = prefixSuffixRoot[i].meaning
    delete prefixSuffixRoot[i].meaning
  }
  // if (prefixSuffixRoot[i].tongue) {
  //   delete prefixSuffixRoot[i].tongue
  //   prefixSuffixRoot[i]["PrefixSuffixRoot.tongue"] = "English"
  //   console.log(i,prefixSuffixRoot[i]["PrefixSuffixRoot.tongue"])
  // }
  if (prefixSuffixRoot[i].examples) {
    prefixSuffixRoot[i]["PrefixSuffixRoot.examples"] = prefixSuffixRoot[i].examples
    delete prefixSuffixRoot[i].examples
  }
  if (prefixSuffixRoot[i].type) {
    let a = prefixSuffixRoot[i].type.substring(0,1);
    let b = prefixSuffixRoot[i].type.substring(1);
    console.log("a,b", a + b);
    prefixSuffixRoot[i].type = a.toUpperCase() + b;
    prefixSuffixRoot[i]["PrefixSuffixRoot.type"] = prefixSuffixRoot[i].type
    delete prefixSuffixRoot[i].type
  }
}

// console.log(prefixSuffixRoot, "prefixSuffixRoot");

fs.appendFile('new0-prefixSuffixRoot.js', JSON.stringify(prefixSuffixRoot), function (err) {
  if(err) throw err;
  console.log(err, err)
})