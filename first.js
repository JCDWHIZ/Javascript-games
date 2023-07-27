// document.body.style.backgroundColor = "blue";

// alert("welcome to our first Javascript command")

// age = prompt("what is your age")

// alert(`wow you are ${age} years old`)

// const redirectUser = ()=>{
//     alert("you should not visit this website")
//     location.href = "second.html"
// }

// if(age < 18){
//    redirectUser()
// }else if(age > 60){
//    redirectUser
// }

// const redirectUser = () => {
//   alert("you love either rice on beans ");
//   // location.href = "second.html";
// };
// food = prompt("what is your favourite food");
// alert(`wow you love ${food}, that is nice`);

// if (food === "beans" || "rice") {
//   redirectUser();
// }

food = prompt("What is your favourite food?");

if (food === "beans" || food === "rice") {
    alert(`You like ${food}.`);
} else {
    alert(`So you don't like beans or rice.`);
    location.href = "second.html";
}