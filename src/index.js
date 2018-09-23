class Sorter {
  constructor(kek) {
    this.kek = [];
    this.compareFunction = function (a,b){
      return a-b;
    }
}

  add(element) {
   this.kek.push(element); 
  }

  at(index) {
    return this.kek[index];
  }

  get length() {
    return this.kek.length;
  }

  toArray() {
    return this.kek;
}

  sort(indices) {
     var massiv = [];
    for(var i = 0; i < indices.length; i++)
    massiv[i] = this.kek[indices[i]];
    indices.sort(function(a, b){ 
      return a - b;
    });
    massiv.sort(this.compareFunction);
    for(var i = 0; i < indices.length; i++)
      this.kek[indices[i]] = massiv[i];
  }
  

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}



module.exports = Sorter;