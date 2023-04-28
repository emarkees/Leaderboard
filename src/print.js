<<<<<<< HEAD
/*const container = document.querySelector('.content');
=======
const container = document.querySelector('.content');
>>>>>>> parent of 5e5caad (Clean up develop)

const data = [
  {
    Name: 'Adeyemi',
    Score: 20,
    id: 1,
  },
  {
    Name: 'Adeyemi',
    Score: 21,
    id: 2,
  },
  {
    Name: 'Adeyemi',
    Score: 23,
    id: 3,
  },
  {
    Name: 'Adedayo',
    Score: 23,
    id: 3,
  },
  {
    Name: 'Adeyemi ',
    Score: 23,
    id: 3,
  },
  {
    Name: 'Adedayo',
    Score: 23,
    id: 3,
  },
  {
    Name: 'Adeyemi',
    Score: 23,
    id: 3,
  },
  {
    Name: 'Adedayo',
    Score: 23,
    id: 3,
  },
];
data.sort((a, b) => a.id - b.id);

let html = '';

data.forEach((item) => {
  html += `
  <ul class="contentlist">

    <li class="board">${item.Name}</li>
    <li class="semi-column">: </li>
    <li class="board">${item.Score} </li>
  </ul>
  
  `;
<<<<<<< HEAD
}); 

container.innerHTML = html; */
=======
});

container.innerHTML = html;
>>>>>>> parent of 5e5caad (Clean up develop)
