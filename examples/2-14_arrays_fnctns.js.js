// returns an array of names
function getKids() {
    let kids = ["Natalie", "Brittany", "Zachary"];
    return kids;
  }
  
  let ourKids = getKids();// returns an array

  console.log(ourKids);
 // arrays can also be returned from functions

function displayKids(kids,param1) {

  console.log(kids);
  
}

displayKids(ourKids,"test")

// arrays can be passed into functions as inputs to be worked on

  // displays data in an array of names
  // function displayKids(kids) {
  //   let numKids = kids.length;
  //   for (let i = 0; i < numKids; i++) {
  //     console.log(kids[i]);
  //   }
  // }
   
  // displayKids(ourKids); // pass an array

  
  
  
  
  
  
 