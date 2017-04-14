class RetiredForagerBee extends ForagerBee{
  constructor(){
    super();
    this.age = 40;
    this.job = 'gamble';
    this.honeyPot = 0;
    this.color = 'grey';
    this.canFly = false;
    this.treasureChest = [];
  }
  // TODO..
  forage(){
    return 'I am too old, let me play cards instead';
  }

  gamble(){
    var treasure = true;
    if(treasure){
      this.treasureChest.push(treasure);
    }
  }

};
