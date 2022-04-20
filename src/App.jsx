import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [data, setData] = useState([
    {username: 'test', age: 15},
    {username: 'thai', age: 16},
    {username: 'huy', age: 17},
  ])

  let html = -3213213543513

  function test (){
    console.log('test');
  }

  function readInput (){
    console.log( document.querySelector('input').value);
  }

  function add (){
    setData([...data, {username: 'lam', age: 17}])
    // data.push({username: 'lam', age: 17})
    console.log(23, data);
  }
  function log (){
    console.log(26, data);
  }

  return (
    <div className={html > 0 ? 'App' : ''} >
      
      <button onClick={test}>Click</button>
      {
      data.map(function (value){
        return (
          <div>
            <p>username: {value.username}</p>
            <p>age: {value.age}</p>
          </div>
          )
        })
      }
      <p>hôm nay la ngay {new Date().getDate()} tháng {new Date().getMonth() + 1} năm {new Date().getFullYear() } </p>
      <input type="text" style={{background:'red', color: 'yellow'}} onChange={readInput}/>
      <button onClick={add}>add</button>
      <button onClick={log}>log</button>

    </div>
  );
}

export default App;
