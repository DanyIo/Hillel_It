function Auto(type) {
  this.type = type;
}
Auto.prototype.startjourney = function () {
  if (!this.status) {
    console.log(`${this.model} починає поїздку.`);
    this.status = true;
    this.carServiceability -= getRandomInt();
  } else {
    console.log(`${this.model} вже у поїздці.`);
  }
};
Auto.prototype.endjourney = function () {
  if (this.status) {
    console.log(`${this.model} завершує поїздку.`);
    this.status = false;
  } else {
    console.log(`${this.model} не у поїздці.`);
  }
};
function getRandomInt(min = 0.1, max = 2.5) {
  return Math.random() * (max - min) + min;
}
function Hatchback(
  fuel_consumption,
  engine_type,
  Engine_capacity,
  yearOfManufactureOfTheCar,
  status,
  mass,
  carServiceability,
  model
) {
  Auto.call(this, "Hatchback");
  this.fuel_consumption = fuel_consumption;
  this.engine_type = engine_type;
  this.Engine_capacity = Engine_capacity;
  this.model = model;
  this.yearOfManufactureOfTheCar = yearOfManufactureOfTheCar;
  this.status = status;
  this.mass = mass;
  this.carServiceability = carServiceability;
}
function Sedan(
  fuel_consumption,
  engine_type,
  Engine_capacity,
  yearOfManufactureOfTheCar,
  status,
  mass,
  carServiceability,
  model
) {
  Auto.call(this, "Sedan");
  this.fuel_consumption = fuel_consumption;
  this.engine_type = engine_type;
  this.Engine_capacity = Engine_capacity;
  this.model = model;
  this.yearOfManufactureOfTheCar = yearOfManufactureOfTheCar;
  this.status = status;
  this.mass = mass;
  this.carServiceability = carServiceability;
}
function Station_wagon(
  fuel_consumption,
  engine_type,
  Engine_capacity,
  yearOfManufactureOfTheCar,
  status,
  mass,
  carServiceability,
  model
) {
  Auto.call(this, "Station_wagon");
  this.fuel_consumption = fuel_consumption;
  this.engine_type = engine_type;
  this.Engine_capacity = Engine_capacity;
  this.model = model;
  this.yearOfManufactureOfTheCar = yearOfManufactureOfTheCar;
  this.status = status;
  this.mass = mass;
  this.carServiceability = carServiceability;
}
Hatchback.prototype = Object.create(Auto.prototype);
Sedan.prototype = Object.create(Auto.prototype);
Station_wagon.prototype = Object.create(Auto.prototype);
const Renault_Clio_V = new Hatchback(
  "5.2 л/100 км",
  "Gasoline",
  "999 см3",
  2022,
  false,
  1137,
  100,
  "Clio"
);

Renault_Clio_V.startjourney();
function dealer(auto) {
  const pricePerPoint= {
    Hatchback : 110,
    Sedan : 125,
    Station_wagon : 130
  }
  let spending = 0
  if (auto.type == "Hatchback") {
    if (auto.yearOfManufactureOfTheCar < 1990) {
      console.log("Авто до 1990 не ремонтуємо.");
    }
    if (
      1990 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar < 2008
    ) {
      spending += 2;
    }
    if (
      2008 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2009
    ) {
      spending += 1.7;
    }
    if (
      2010 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2018
    ) {
      spending += 1.4;
    }
    if (
      2019 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2022
    ) {
      spending += 1.2;
    }
    if (auto.engine_type === "Gasoline") {
      spending += 1.8;
    } else {
      spending += 2.2;
    }
    if (800 <= auto.mass && auto.mass <= 1100) {
      spending += 1.5;
    }
    if (1101 <= auto.mass && auto.mass <= 1400) {
      spending += 1.7;
    }
    if (auto.mass > 1400) {
      spending += 2;
    }
  }
  if (auto.type == "Sedan") {
    if (auto.yearOfManufactureOfTheCar < 1990) {
      console.log("Авто до 1990 не ремонтуємо.");
    }
    if (
      1990 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar < 2008
    ) {
      spending += 2.6;
    }
    if (
      2008 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2009
    ) {
      spending += 2;
    }
    if (
      2010 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2018
    ) {
      spending += 1.8;
    }
    if (
      2019 <= auto.yearOfManufactureOfTheCar &&
      auto.yearOfManufactureOfTheCar <= 2022
    ) {
      spending += 1.5;
    }
    if (auto.engine_type === "Gasoline") {
      spending += 2;
    } else {
      spending += 2.5;
    }
    if (800 <= auto.mass && auto.mass <= 1100) {
      spending += 1.6;
    }
    if (1101 <= auto.mass && auto.mass <= 1400) {
      spending += 1.8;
    }
    if (auto.mass > 1400) {
      spending += 2.1;
    }
  }
    if (auto.type == "Station_wagon") {
      if (auto.yearOfManufactureOfTheCar < 1990) {
        console.log("Авто до 1990 не ремонтуємо.");
      }
      console.log(auto.yearOfManufactureOfTheCar);
      if (
        1990 <= auto.yearOfManufactureOfTheCar &&
        auto.yearOfManufactureOfTheCar < 2008
      ) {
        spending += 3;
      }
      if (
        2008 <= auto.yearOfManufactureOfTheCar &&
        auto.yearOfManufactureOfTheCar <= 2009
      ) {
        spending += 2.5;
      }
      if (
        2010 <= auto.yearOfManufactureOfTheCar &&
        auto.yearOfManufactureOfTheCar <= 2018
      ) {
        spending += 2.2;
      }
      if (
        2019 <= auto.yearOfManufactureOfTheCar &&
        auto.yearOfManufactureOfTheCar <= 2022
      ) {
        spending += 2;
      }
      if (auto.engine_type === "Gasoline") {
        spending += 2.4;
      } else {
        spending += 2.9;
      }
      if (800 <= auto.mass && auto.mass <= 1100) {
        spending += 1.7;
      }
      if (1101 <= auto.mass && auto.mass <= 1400) {
        spending += 1.9;
      }
      if (auto.mass > 1400) {
        spending += 2.2;
      }
    }
  console.log(`Ремонт моделі ${auto.model} типу ${auto.type} вам обійдеться у ${+((100-auto.carServiceability)* (spending/0.1) * pricePerPoint[auto.type]).toFixed(1)}грн.`)
  auto.carServiceability = 100
} 
dealer(Renault_Clio_V);
