//import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './action/index';

function App() {
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className="container">
      <h1>INCREMENT/DECREMENT</h1>
      <h3>USING REACT && REDUX</h3>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input type="text" value={myState}></input>
        <button onClick={() => dispatch(incNumber())}>+</button>

      

    </div>
  );
}

export default App;
