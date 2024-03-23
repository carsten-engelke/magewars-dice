function rollRule(ruleset, n) {
  var dmg = 0;
  var critdmg = 0;
  var diceroll = 0;
  if (ruleset == "random") {
      diceroll = n*2;
  }
  if (ruleset == "mild") {
    dmg = Math.ceil(n/2);
    critdmg = Math.floor(n/2);
    diceroll = Math.ceil(n/3);
  }
  if (ruleset == "normal") {
    dmg = Math.ceil(n*0.9);
    critdmg = Math.floor(n*0.6);
    diceroll = Math.ceil(n/3);
  }
  if (ruleset == "hard") {
    dmg = Math.ceil(n*1.3);
    critdmg = Math.ceil(n*1.5);
    diceroll = Math.ceil(n/3);
  }
  if (ruleset == "strict") {
    dmg = Math.floor(n*1.2);
    critdmg = Math.floor(n*0.8);
  }
  if (ruleset == "hard-strict") {
    dmg = Math.ceil(n*0.8);
    critdmg = Math.ceil(n*1.2);
  }
  for (i = 0; i < diceroll; i++) {
    var die = Math.floor(Math.random() * 4);
    if (die === 1) {
      dmg++;
    }
    if (die === 2) {
      critdmg++;
    }
  }
  return "Damage: " + dmg + "\nCritical Damage: " + critdmg;
}
