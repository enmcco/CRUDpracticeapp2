// grab root div
const root = document.getElementById('root');

// READ FUNCTIONALITY
// fetch data from database
// http://localhost:3000/
fetch('http://localhost:3000/api/get')
  .then(data => data.json())
  .then(data => {
    console.log('this is data', data)
    return data;
  })
  .then(array => {
    // use map on the array arguments
    console.log('this is array', array)
    array.forEach(obj => {
      // grab id and name, build a div using that info
      const { id, name } = obj;
      const task = document.createElement("div");
      task.innerHTML = `<p id='${id}'> ${id}: ${name} </p>`;
      root.appendChild(task);
    })
  })
  .catch(err => console.log('Problem with fetch in index.js: ' + err));

// CREATE FUNCTIONALITY// create an input element
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'input')
//add to the body
root.appendChild(input);

//create button 
const button = document.createElement('button');
button.innerText = 'Submit';
root.appendChild(button);

button.addEventListener('click', () => {
  const inputVal = document.getElementById('input').value;
  console.log('what', inputVal)
  postActivity(inputVal);
})

function postActivity(input) {
  fetch('http://localhost:3000/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({input})
  })
  .then(() => console.log('Post successful!'))
}

