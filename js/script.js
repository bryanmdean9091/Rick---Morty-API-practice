// const baseUrl =  'https://rickandmortyapi.com/api/character';

// fetch(baseUrl)
//  .then(response => {
//      return response.json()
//  })
//  .then(data => {
//      console.log (data);
//      const img = document.createElement('img');
//      img.src = data[0].image;
//      pic.append(img);
//     //  simpQuote.innerHTML =  `Name: ${data[0].character} <br>
//     //  Quote: ${data[0].quote}`
//     });
const url = 'https://rickandmortyapi.com/api/character'
function changeUp() {
    window.location.reload()
}
const char = Math.floor(Math.random() * 20);
console.log(char)

fetch(url).then(rmChar => rmChar.json()).then(rmChar => {

    const img = document.
    createElement('img');
    img.src = rmChar.results[`${char}`].image
    document.getElementById('picBox').appendChild(img);
    console.log(rmChar.results[`${char}`].name)
    document.getElementById('charName').innerHTML = rmChar.results[`${char}`].name
});