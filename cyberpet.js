const play = document.querySelector(".play");
const feed = document.querySelector(".feed");
const sleep = document.querySelector(".sleep");

const happiness = document.querySelector(".happiness");
const hunger = document.querySelector(".hunger");
const tiredness = document.querySelector(".tiredness");

class Animal {
constructor(hunger = 50, tiredness = 50, happiness = 50) {
    (this.hunger = hunger),
    (this.tiredness = tiredness),
    (this.happiness = happiness);
}

play() {
    this.happiness += 10;
    this.hunger -= 7;
    this.tiredness -= 2;
}

feed() {
    this.hunger += 10;
    this.tiredness -= 5;
    this.happiness -= 2;
}

sleep() {
    this.tiredness -= 10;
    this.hunger += 5;
    this.happiness += 5;
}
}

const animal1 = new Animal();

const updateData = function () {
    happiness.childNodes[3].innerHTML = animal1.happiness;
    hunger.childNodes[3].innerHTML = animal1.hunger;
    tiredness.childNodes[3].innerHTML = animal1.tiredness;
};

const idle = function () {
    animal1.happiness -= 2;
    animal1.hunger -= 2;
    animal1.tiredness += 2;
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

sleep.addEventListener("click", function () {
    animal1.sleep();
    updateData();
});

setInterval(function () {
    idle();
}, 1500);