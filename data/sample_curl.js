curl 'http://localhost:8080/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: file://' --data-binary '{"query":"mutation{\n  addVerbo(input: [{\n   spanish: \"ayudar\",\n   english: \"to help\",\n   reflexive: false,\n    irregular: false,\n   grupo: 0\n }\n  \t\t\t\t\t\t]){\n    verbo{\n      spanish\n      english\n      grupo\n    }\n  }\n}"}' --compressed


{"english":"to help me",
"reflexive":false,
"irregular":false,
"categoría_de_irregular":"",
"cambiar_de_irregular":"",
"terminación":"-ar",
"grupo":0,
"_id":"5a6d1177adce4c0fce1e4f18",
"spanish":"ayudar",
}