const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ijZbkT0tectL4wqNdWXD/scores/';
const container = document.querySelector('.content');
const addBtn = document.getElementById('add');
const form = document.getElementById('myForm');
const refreshItems = document.getElementById('refresh')

export const getData = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return error;
  }
};

getData();

const deployScore = async () => {
  container.innerHTML = '';
  const scoreObj = await getData();
  const { result } = await scoreObj;
 /* name.sort((a, b) => a - b); */
  result.forEach((item) => {
    container.innerHTML +=`
    <ul class="contentlist">
    <span class="board">${item.user}</span>
    <span class="semi-column">: </span>
    <span class="board">${item.score} </span>
    </ul>
    `
  })
};

deployScore();

//post a data 
const postData = async(data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
      
    });
    const result = await response.json();
    console.log("success", result)
  }
  catch (error) {
    console.error(error);
    throw new Error('Failed to post data');
  }
}
postData();

addBtn.addEventListener('click', async (event) => {
  console.log('button has been clicked');
  event.preventDefault();
  const userName = form.elements.user.value;
  const userScore = form.elements.score.value;
  await postData({ 
    user: userName, 
    score: userScore 
  });
  form.elements.user.value = '';
  form.elements.score.value = '';
  await deployScore();
});

refreshItems.addEventListener('click', async (e) => {
  e.preventDefault();
  await deployScore(); // Wait for deployScore() to complete
  console.log('Score items refreshed.');
});