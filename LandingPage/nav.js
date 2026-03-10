function  nav() {
   let a = React.createElement("img", {
  className: "logo",
  src: "https://i.pinimg.com/736x/da/03/35/da033593e99e9126903f881d55435258.jpg",
  alt: "Logo Image"
});
    let b = React.createElement("a" , null , 'About me')
    let c = React.createElement("a" , null , 'Portfolio')
    let d = React.createElement("a" , null , 'Service')
    let e = React.createElement("a" , null , 'blog')
    let left =  React.createElement("div", {className: 'nav-left'}, [a , b , c , d , e]);
let f = React.createElement("a" , {className: 'nav-under'} , 'Book a call')
let g = React.createElement(
  "i",
  { className: "ri-arrow-right-up-line" }
);

    let right =  React.createElement("div", {className: 'nav-right'}, [f , g]);

    return React.createElement('div', { className: 'nav' }, [left, right]);
}

export default nav;