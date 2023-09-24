//********* */ event propagation  **************/

// window.addEventListener(
//   "click",
//   function () {
//     console.log(window);
//   },
//   false
// );
// document.addEventListener(
//   "click",
//   function () {
//     console.log(document);
//   },
//   true
// );

// const query = (name) => document.querySelector(name);
// const listener = (value) => addEventListener("click", () => alert(value));

// query(".div1")[listener("div 1")];
// query(".div2")[listener("div 2")];
// query(".btn")[listener("button")];

// query(".btn").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log((e.target.innerHTML = "Click me"));
//   },
//   true
// );

//***********************    Event Delegation     *************** */

// document.querySelector("#sports").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " is Clicked");

//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "black";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", function (e) {
//   console.log("Basketball is Clicked");

//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "brown";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", function (e) {
//   console.log("boxingl is Clicked");

//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "purple";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
//   console.log("Tennis is played");

//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "blue";
//   }
// });

// document.querySelector("#golf").addEventListener("click", function (e) {
//   console.log("Golf is played");

//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "orange";
//   }
// });

// ****************************   Add new li in the box ************************************

// const sports = document.querySelector("#sports");
// const newSport = document.createElement("li");

// newSport.innerText = "rugby";
// newSport.setAttribute("id", "rugby");

// sports.appendChild(newSport)
