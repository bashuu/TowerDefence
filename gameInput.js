var fps = 60;
// spawn time
var warriorSpawnTime = 200;
var panthionSpawnTime = 210;
var bossSpawnTime = -1;
var wolfSpawnTime = 300;
var spawnWindow = 100;
// spawn location
var spawnLocX = 10, spawnLocY = 1 * titleHeigth;
//enemy health && speed
var speed = 3;
var enemyHealth = 100;
// tower
var waterTowerROF = 20;
var demonnicTowerROF = 40;
var towerDmg = 60;
var towerRange = 100;
// sprite
var warriorSprite = ["images/warriorRight.png", "images/warriorLeft.png"];
var panthionSprite = ["images/panthionRight.png", "images/panthionLeft.png"];
var wolfSprite = ["images/wolfRight.png", "images/wolfLeft.png"];
var waterTowerSprite = ["images/water_tower.png"];
var demonicTowerSprite = ["images/demonic_tower.png"];
var bossSprite = ["images/bossRight.png", "images/bossLeft.png"];
var backgroundImg = "images/background.png";
var gameoverImg = "images/gameover.png";
var DTP = "images/DTP.gif";
var WTP = "images/WTP.gif";
var UTD = "images/UTD.png";
var UTR = "images/UTR.png";
// money
var money = 111500;
var drop = 1;
var towerPrice = 100;
var rangeUpgradeCost = 50;
var damageUpgradeCost = 50;
// wave 
bossCount = 0;
enemyCount = 30;
healthHarden = 1.7;
countHarden = 1.1;
waveCounter = 1;
delayHarden = 0.7;
life = 30;
// interface
score = 0;