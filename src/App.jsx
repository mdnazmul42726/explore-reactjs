import './App.css'
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import DeCounter from './de-counter';
import Player from './player';
import Users from './Users';
import Friend from './Friend';
import Nazmul from './nazmuls';

function App() {
  const handleClick = (props) => {
    alert(props + 10);
  };

  const nazmulHandelClick = () => {
    const nazmulElement = document.getElementById('nazmul');
    nazmulElement.innerText = 'SHEIKH MOHAMMAD NAZMUL HASAN'
  }
  return (
    <>
    <Nazmul></Nazmul>
    {/* <Friend></Friend> */}
      {/* <Users></Users> */}
      {/* <Player></Player> */}
      {/* <h3>React Core</h3> */}
      {/* <DeCounter></DeCounter>
      <Counter3></Counter3>
      <Counter2></Counter2>
      <Counter></Counter>
      <h1 id='nazmul'></h1>
      <button onClick={() => handleClick(2)}>Button 1</button>
      <button className='nazmul' onClick={nazmulHandelClick}>Button 2</button> */}
    </>
  )
}

export default App
