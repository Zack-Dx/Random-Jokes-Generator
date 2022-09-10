let joke = [
  " I visited my new friend in his apartment. He told me to make myself at home. So I threw him out. I hate having visitors.",

  "Want to know how you make any salad into a caesar salad? Stab it twenty-three times.",
  "You’re not completely useless. You can always be used as a bad example",

  "I have many jokes about unemployed people, sadly none of them work",
];

let element = document.getElementById("text");

function render() {
  let ran = Math.floor(Math.random() * joke.length);
  element.innerHTML = "<h3>" + joke[ran];
  +"</h3>";
}
