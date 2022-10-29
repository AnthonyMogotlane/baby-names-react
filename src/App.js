import './App.css';
import ListOfNames from './ListOfNames';
import babyNamesData from "./data/babyNamesData.json"
import Search from './Search';
import { useEffect, useState } from 'react';

function App() {
  //Sorted data
  const data = [...babyNamesData].sort((a, b) => a.name > b.name ? 1 : -1);

  const [babyNames, setBabyNames] = useState(data);

  const searchBabyName = (e) => {
    e.target.value = e.target.value.toLowerCase();
    setBabyNames(data.filter(obj =>  e.target.value === "" ? obj : (obj.name.toLowerCase().startsWith(e.target.value)) ? obj : ""));
  }

  return (
    <div className='container app'>
      <div className='row d-flex justify-content-center'>
        <div className='col-10'>
          <h2>Baby Names</h2>
          <Search onkeydown={searchBabyName} />
          <ListOfNames data={babyNames} />
        </div>
      </div>
    </div>
  );
}

export default App;
