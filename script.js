const btnJoke = document.getElementById('joke-btn');
const txtJoke = document.getElementById('joke-text');

btnJoke.addEventListener('click', () => {
  console.log("Click the button");
  const url = 'https://api.chucknorris.io/jokes/random';

  fetch(url) 
    .then(res => {
      return res.json();
    }).then((data) => {
      console.log(data.value);
      txtJoke.innerHTML = data.value;
    });

});