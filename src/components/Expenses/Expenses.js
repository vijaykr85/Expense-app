import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';

const Expenses =(props) => {
    return (
        <Card className='expenses'>
     <ExpenseItem
      date ={props.item[0].date }
      title ={props.item[0].title}
      Amount={props.item[0].Amount} />
      
      <ExpenseItem
      date ={props.item[1].date }
      title ={props.item[1].title}
      Amount={props.item[1].Amount} />
      
      <ExpenseItem
      date ={props.item[2].date }
      title ={props.item[2].title}
      Amount={props.item[2].Amount} />
      
      <ExpenseItem
      date ={props.item[3].date }
      title ={props.item[3].title}
      Amount={props.item[3].Amount} />
       
        </Card>
    );
}

export default Expenses;