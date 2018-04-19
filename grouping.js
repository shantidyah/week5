function meleeRangedGrouping (str) {
  var group=[];

  var a=['Ranged','Melee'];
  str=str.split('-').toString().split(',');
  if(str==''){
    return '[]';
  }

  for(var j = 0; j < a.length; j++){
    var temp=[];
    for(var i = 1; i < str.length; i=i+2){
      if(a[j]===str[i]){
        temp.push(str[i-1]);
      }
    }
    group.push(temp);
  }

  return group;



}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
