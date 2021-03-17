import MainPage from './components/MainPage.js'

let data = null;

fetch('assets/data.json')
.then(response => {
  return response.json();
  
})
.then(_data => {
    data = _data
    console.log(data);
    MainPage(data);
});