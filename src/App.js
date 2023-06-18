import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from "./components/Expenses/Expenses";



const App = () => {

 let expenses = [
  {
    id: 'e1',
    title: 'School Fee',
    Amount: 250,
    date: new Date(2021,5,12)
  },
  {
    id: 'e2',
    title: 'Books',
    Amount: 230,
    date: new Date(2021,2,22)
  },
  {
    id: 'e3',
    title: 'House rent',
    Amount: 700,
    date: new Date(2021,4,2)
  },
  {
    id: 'e4',
    title: 'Food',
    Amount: 540,
    date: new Date(2021,5,5)
  }

 ];


    return (
      <div>

      <NewExpense />
      <Expenses  item={expenses}/>

      </div>
    )
};

export default App;
 