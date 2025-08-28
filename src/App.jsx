import { useState,useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import {saveExpenses,loadExpenses} from './utils/localStorage';
import CategorySummary from './components/CategorySummary';


function App() {
  const [expense, setExpense] = useState([]);
  const [filterExpense, setFilterExpense] = useState([]);

  useEffect(()=>{
     const stored =loadExpenses();
     setExpense(stored);
     setFilterExpense(stored);
  },[]);

   useEffect(()=>{
     saveExpenses(expense);
     setFilterExpense(expense);
  },[expense]);

  const addExpense = (newExpense) =>{
    setExpense([{id:Date.now(), ...newExpense}, ...expense]);
  }

    const deleteExpense = (id) =>{
    setExpense(expense.filter((exp)=> exp.id !==id));
  }

  const filteredExpense= (filtered) => {
     setFilterExpense(filtered);
  };
  return (
    <>
        <div className='min-h-screen bg-gray-100 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10 '>Smart Expense Tracker</h1>
          <div className='grid gap-2 md:grid-cols-2'>
            <div>
              <ExpenseForm addExpense={addExpense}/>
              <CategorySummary expenses={expense}/>
              <ExpenseFilter expenses={expense} onFilter={filteredExpense}/>
              <ExpenseList expenses={filterExpense} deleteExpense={deleteExpense}/>
            </div>
            <div>
              <ExpenseChart expenses={filterExpense}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
