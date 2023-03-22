import { SZAMLISTA, SZOVEGLISTA } from "./adat.js";
//console.log(SZAMLISTA);

$(function () {
  /*let kevertIndexLista = keveres1(SZAMLISTA);
  console.log(kevertIndexLista);
  for (let index = 0; index < array.length; index++) {
    console.log(
      SZAMLISTA[index],
      kevertIndexLista[index],
      SZAMLISTA[kevertIndexLista[index]]
    );
  }*/

  console.log(SZOVEGLISTA);
  rendezes1(SZOVEGLISTA);
  console.log(SZOVEGLISTA);

  console.log("SZÁMOK RENDEZÉSE:");
  console.log(SZAMLISTA);
  rendezes2(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("SZÁMOK RENDEZÉSE RANDOMMAL:");
  console.log(SZAMLISTA);
  keveres2(SZAMLISTA);
  console.log(SZAMLISTA);

});

function keveres1(lista) {
  let megKevertIndex = [];
  let szamok;
  while (megKevertIndex.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    let index = 0;
    while (
      index < megKevertIndex.length &&
      !(szamok == megKevertIndex[index])
    ) {
      index++;
    }
    if (index >= megKevertIndex) {
      megKevertIndex.push(szamok);
    }
  }
  console.log(megKevertIndex.length);
  return megKevertIndex;
}

function rendezes1(lista) {
  lista.sort();
}

function rendezes2(lista) {
  lista.sort(function (a, b) {
    return a - b;
  }); //számok esetén működik
}

function keveres2(lista){
    lista.sort(function(a,b){return 0.5 - Math.random()})
}