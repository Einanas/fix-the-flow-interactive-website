  //   MENU INTERACTION   //
let interaction = document.querySelectorAll('li')
console.log(interaction);

interaction.forEach(interaction => {
  interaction.addEventListener('click', lightup => {
    interaction.classList.toggle('lightup')
  })
});


//       NAVIGATON BAR CHANGE BY CLICK         //
const changeItems = document.querySelectorAll('li.change a');

changeItems.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault(); // Voorkom standaardgedrag van de link
    changeItems.forEach(item => item.classList.remove('active'));
    anchor.classList.add("active");
  });
});

console.log('li.change a');

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