function towerFrom(x, y, range, attackDmg, fireRate, target, time, bulletColor){
    this.x = x;
    this.y = y;
    this.range = range;
    this.attackDmg = attackDmg;
    this.fireRate = fireRate;
    this.target = target;
    this.time = time;
    this.BC = bulletColor;

    this.findTarget = function(){
        if(enemy.length === 0) {
            this.target = null;
            return;
        }
        if(this.target && this.target.health <= 0) {
            this.target = null;
        }

        for (var i = 0; i < enemy.length; i++) {
            var dist = (enemy[i].x - this.x) * (enemy[i].x - this.x + titleWidth) + (enemy[i].y - this.y) * (enemy[i].y - this.y + titleWidth); 
            if (dist < (this.range * this.range)) {
                this.target = enemy[i];
                return;
            }
        }
    }

    this.attack = function(){
        this.time--;
        if(this.target && this.time <= 0){
            bullet.push(new bulletFrom  (this.x + titleHeigth / 2, this.y + 10, this.target, this.attackDmg, this.BC));
            this.time = this.fireRate;
        }
    }
}
function addDemonicTower(i, j) {
    money -= towerPrice;
    tower.push(new towerFrom(j * titleHeigth, i * titleWidth, towerRange, towerDmg, demonnicTowerROF, null, demonnicTowerROF, "red"));
        map[i][j] = tower.length;
        towerSprites.push(new SpriteSheet(demonicTowerSprite, 64, 64, 10, 5, 3, 0));
}
function addWaterTower(i, j){
    money -= towerPrice + 50;
    tower.push(new towerFrom(j * titleHeigth, i * titleWidth, towerRange * 1,5, towerDmg / 2, waterTowerROF, null, waterTowerROF, "blue"));
        map[i][j] = tower.length - 1;
        towerSprites.push(new SpriteSheet(waterTowerSprite, 64, 64, 10, 5, 3, 0));
}
function upgradeTowerDmg(){
    if (money >= damageUpgradeCost){
        for (var i = 0; i < tower.length; i++)
            tower[i].attackDmg += 25;
        money -= damageUpgradeCost;
    }
}

function upgradeTowerRange(){
    if (money >= rangeUpgradeCost){
        for (var i = 0; i < tower.length; i++)
            tower[i].range += 20;
        money -= rangeUpgradeCost;
    }
}
