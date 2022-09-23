const carmileage = {};
function newMemberRegister(
  teamname,
  drivername,
  birthdate,
  carbrand,
  sponsorname,
  useraccess
) {
  if (
    teamname == undefined ||
    drivername == undefined ||
    birthdate == undefined ||
    carbrand == undefined ||
    sponsorname == undefined ||
    useraccess == undefined
  ) {
    return "Введіть всі дані.";
  } else {
    if (
      typeof teamname !== "string" ||
      typeof drivername !== "string" ||
      typeof carbrand !== "string" ||
      typeof sponsorname !== "string" ||
      typeof useraccess !== "boolean" ||
      typeof birthdate !== "number"
    ) {
      return "Введіть дані коректно.";
    } else {
      if (!useraccess) {
        return "Вас не допущено до пробігу.";
      } else {
        return {
          useraccess: useraccess,
          teamname: teamname,
          drivername: drivername,
          driverbirthdate: birthdate,
          carbrand: carbrand,
          sponsorname: sponsorname,
        };
      }
    }
  }
}

carmileage.some_user = newMemberRegister(
  "Dota2",
  "Danylo",
  1969,
  "V0lve",
  "Volodya",
  true
);

const informationabouttheusers = {};
function newUserCreator() {
  const login = prompt("Введіть свій логін.");
  const password = prompt("Введіть свій пароль.");
  const city = prompt("Введіть своє місто.");
  const country = prompt("Введіть назву країни у якій ви проживаєте.");
  const sex = prompt("Введіть вашу стать.");
  const age = prompt("Введіть ваш вік.");
  if (
    login === null ||
    password === null ||
    city === null ||
    country === null ||
    sex === null ||
    age === null
  ) {
    return "Введіть всі дані.";
  } else {
    if (
      login.length == 0 ||
      password.length == 0 ||
      city.length == 0 ||
      country.length == 0 ||
      sex.length == 0 ||
      age.length == 0
    ) {
      return "Заповніть всі дані.";
    } else {
      return {
        userlogin: login,
        userpassword: password,
        usercity: country,
        usersex: sex,
        userage: age,
      };
    }
  }
}
informationabouttheusers.user_1 = newUserCreator();
function userDataChanger(user_1, usercity, newdata) {
  return (informationabouttheusers.user_1.usercity = newdata);
}
userDataChanger("user_1", "usercity", "Lv1v");
const studentobj = {
  name: "Danylo",
  surname: "Bodnar",
  age: 17,
  course: 1,
  city: "Lviv",
  greeting: function () {
    console.log("Hi, everyone!");
  },
  addHomework: function () {
    console.log("Sending my howework... Please, wait");
  },
};
function isEmpty(object, key) {
  return !(key in object);
}
console.log(isEmpty(studentobj, "name"));
let sum = 0;
const incomeofworkers = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};
function amountofincome() {
  for (let key in incomeofworkers) {
    sum += incomeofworkers[key];
  }
  return sum;
}
let array = [];
console.log(amountofincome());
function thelowestincome() {
  for (let key in incomeofworkers) {
    array.push(incomeofworkers[key]);
  }
  for (let key in incomeofworkers) {
    if (incomeofworkers[key] == Math.min.apply(null, array)) {
      return `${key} має найменшу виручку - ${Math.min.apply(null, array)}грн.`;
    }
  }
}
console.log(thelowestincome());
function thebiigestincome() {
  for (let key in incomeofworkers) {
    if (incomeofworkers[key] == Math.max.apply(null, array)) {
      return `${key} має найбільшу виручку - ${Math.max.apply(
        null,
        array
      )}грн.`;
    }
  }
}
console.log(thebiigestincome());
const workers = Object.keys(incomeofworkers);
function randomcoworker(
  min = 0,
  max = Object.keys(incomeofworkers).length - 1
) {
  return `${
    workers[
      [
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
          Math.ceil(min),
      ]
    ]
  } вітаю Вас із початком робочого тижня.`;
}
console.log(randomcoworker());
