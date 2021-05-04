class Food {
    constructor() {
        this.milkImg = loadImage("images/Milk (1).png")
        this.foodStock = 0;
        this.lastFed
    }

    getFoodStock() {
        return this.foodStock;
    }

    updateFoodStock(foodStock) {
        this.foodStock = foodStock;
    }
    deductFood() {
        if (this.foodStock > 0) {
            this.foodStock = this.foodStock - 1;
        }
    }

    getFedTime(lastFed) {
        this.lastFed = lastFed;
    }

    bedroom(){
        background(bedroomImg, 550, 500);
    }

    garden(){
        background(gardenImg, 550, 500);
    }

    washroom(){
        background(washroomImg, 550, 500);
    }

    display() {
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.milkImg, 720, 220, 70, 70);
        if (foodStock !== 0) {
            for (var i = 0; i < this.foodStock; i++) {
                if (i % 10 == 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.milkImg, x, y, 50, 50);
                 x = x + 30;
            }
        }

    }

}