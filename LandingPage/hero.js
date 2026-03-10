function hero() {
    

let topaHeadA = React.createElement("h1" , null , '+200')
let topDetA = React.createElement("p" , null , 'Project Completed')
let topA =  React.createElement("div", {className: 'topA'}, [topaHeadA , topDetA]);

let topaHeadB = React.createElement("h1" , null , '+50')
let topDetB = React.createElement("p" , null , 'Startup Raised')
let topB =  React.createElement("div", {className: 'topB'}, [topaHeadB , topDetB]);


let top =  React.createElement("div", {className: 'hero-top'}, [topA , topB]);




let middleHead = React.createElement("h1" , null , 'Hello')
let middleDet = React.createElement("p" , null , `It's Hari a design Wizerd`)
let middle =  React.createElement("div", {className: 'hero-middle'}, [middleHead , middleDet]);



let bottomDet = React.createElement("p" , null , `scroll down`)
let bottomIcon = React.createElement(
  "i",
  { className: "ri-arrow-down-line" }
);
let bottom  =  React.createElement("div", {className: 'hero-bottom'}, [bottomDet, bottomIcon]);



  let a = React.createElement("img", {
  className: "img",
  src: "../LandingPage/dnova.png",
  alt: "Logo Image"
});






let right =  React.createElement("div", {className: 'hero-right'}, [a]);
let left =  React.createElement("div", {className: 'hero-left'}, [top , middle , bottom]);

return   React.createElement("div", {className: 'hero'}, [left , right]);
}

export default hero;