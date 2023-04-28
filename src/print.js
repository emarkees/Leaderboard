const container = document.querySelector('.content');

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
}); 

container.innerHTML = html;
