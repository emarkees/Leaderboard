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


