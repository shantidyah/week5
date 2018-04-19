function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
var array=[];

var object={penumpang:'',naikDari:'',tujuan:'',bayar:''};
  if(arrPenumpang.length==0){
    return '[]';
  }
  for(var i = 0; i < arrPenumpang.length; i++){
    var object={penumpang:'',naikDari:'',tujuan:'',bayar:''};
    var a=0;
    var hitung=0;
    var simpan=[];
    for(var key in object){
      object[key]=arrPenumpang[i][a];
      for(var j = 0; j < rute.length; j++){
        if(rute[j]===arrPenumpang[i][1]){
          simpan.push(j);
        }

        if(rute[j]===arrPenumpang[i][2]){
          simpan.push(j);
        }
      }
      if(simpan[0]-simpan[1]>0){
        object.bayar=(simpan[0]-simpan[1]*2000);
      }
      else{
        object.bayar=(simpan[1]-simpan[0])*2000;
      }
      a++;
    }
    array.push(object);
  }
  return array;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
