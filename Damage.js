function attack (damage) {
  var totaldamage=damage*(-2);

  return totaldamage;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  var attk=numberOfAttacks;
  var damage=(numberOfAttacks*damagePerAttack)+attack(attk);

  return damage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
