  //   MENU INTERACTION   //
let interaction = document.querySelectorAll('li')
console.log(interaction);

interaction.forEach(interaction => {
  interaction.addEventListener('click', lightup => {
    interaction.classList.toggle('lightup')
  })
});


//       NAVIGATON BAR CHANGE BY CLICK         //
const Active = document.querySelectorAll('li');

Active.forEach((btn) => {
  Active.addEventListener("click", (e) => {
    Active.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle("active");
  });
});

console.log('li')

// In plaats van flipcard, afbeelding laten verschijnen.
// twee afbeeldingen op één plek
// opacity met klik
// met javascritp de klik mogelijk maken waardoor een afbeelding tevoorschijn 

// flipcard maken met site: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c#:~:text=Firstly%2C%20in%20your%20JS%20index,which%20toggles%20on%20a%20click.
// const card = document.querySelector(".card")

// card.addEventListener("click", flipCard);

// function flipCard(front, back) {
//   card.classList.toggle("flipCard")
// }