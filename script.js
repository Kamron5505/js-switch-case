// let a = 12;
// let b = 15;

// const hello = function (a, b) {
//   console.log(a + b);
// };

// hello(12, 15);

// const hello2 = () => {
//   console.log(a - b);
// };
// hello2();

// const hello3 = function (a, b) {
//   console.log(b / a);
// };
// hello3(12, 15);

// const hello4 = () => {
//   console.log(a * b);
// };
// hello4();

// let date = prompt("Enter the date");

// switch (date) {
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Monday");
//     break;
//   case 3:
//     alert("Monday");
//     break;
//   case 4:
//     alert("Monday");
//     break;
//   case 5:
//     alert("Monday");
//     break;
//   default:
//     alert("Invalid date");
// }

// let emergency = prompt("Enter the emergency number");
// switch (emergency) {
//   case "911":
//     alert("Police");
//     break;
//   case "103":
//     alert("doctor");
//     break;
//   case "101":
//     alert("fire");
//     break;
//   case "104":
//     alert("gas");
//     break;
//   default:
//     alert("Enter the correct number");
// }

let price = 45000;

function showPrompt() {
  let set = prompt("Qiyiriq set nechta zakaz qilmoqchisiz?");
  set = Number(set); // Преобразуем в число]\

  if (isNaN(set) || set <= 0) {
    alert("Iltimos, to‘g‘ri son kiriting!");
    return;
  }

  let totalPrice = price * set;

  switch (set) {
    case 1:
      alert("1 ta qiyiriq jami narxi: " + totalPrice + " so‘m");
      break;
    case 2:
      alert("2 ta qiyiriq jami narxi: " + totalPrice + " so‘m");
      break;
    case 3:
      alert("3 ta qiyiriq jami narxi: " + totalPrice + " so‘m");
      break;
    default:
      alert(set + " ta qiyiriq jami narxi: " + totalPrice + " so‘m");
  }
}
