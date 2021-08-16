const play = document.querySelector(".play");
const feed = document.querySelector(".feed");
const drink = document.querySelector(".drink");

const happiness = document.querySelector(".happiness");
const hunger = document.querySelector(".hunger");
const thirst = document.querySelector(".thirst");

class Animal {
constructor(hunger = 50, thirst = 50, happiness = 50) {
    (this.hunger = hunger),
    (this.thirst = thirst),
    (this.happiness = happiness);
}

play() {
    this.happiness += 10;
    this.hunger -= 7;
    this.thirst -= 2;
}

feed() {
    this.hunger += 10;
    this.thirst -= 5;
    this.happiness -= 2;
}

giveDrinks() {
    this.thirst += 10;
    this.hunger -= 5;
    this.happiness += 5;
}
}

const animal1 = new Animal();

const updateData = function () {
    happiness.childNodes[3].innerHTML = animal1.happiness;
    hunger.childNodes[3].innerHTML = animal1.hunger;
    thirst.childNodes[3].innerHTML = animal1.thirst;
};

const idle = function () {
    animal1.happiness -= 2;
    animal1.hunger -= 2;
    animal1.thirst -= 2;
    updateData();
};

play.addEventListener("click", function () {
    animal1.play();
    updateData();
});

feed.addEventListener("click", function () {
    animal1.feed();
    updateData();
});

drink.addEventListener("click", function () {
    animal1.giveDrink();
    updateData();
});

setInterval(function () {
    idle();
}, 5000);