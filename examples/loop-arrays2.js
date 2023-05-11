let menuItems = [
  { item: "Chicken Tacos", price: 8.95 },
  { item: "Guacamole", price: 2.85 },
  { item: "Sweet Tea", price: 2.75 },
];

//   for (const menuItem of menuItems) {

//     console.log(menuItem.item);
//     console.log(menuItem.price);
//   }

function getMealCost(items) {
  let sum = 0;
  for (const item of items) {
    // console.log(item.price);
    sum += item.price
  }
  return sum;
  
}


let total = getMealCost(menuItems);
console.log(total);