import {useState} from "react";

function ExpenseForm({addExpense}){
   const [amount,setAmount] = useState("");
   const [category,setCategory] = useState("All Categories");
   const [date,setDate] = useState("");
   const [note,setNote] = useState("");

   const handleSubmit = (e)=>{
    e.preventDefault();
    if(!amount || !date) return;
    addExpense({amount:parseFloat(amount),category,date,note});
    //reset fields
    setAmount("");
    setCategory("All Categories");
    setDate("");
    setNote("");
 };
 
 return(
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow mb-4 w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Add Expense</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} className="p-10 border rounded "/>
            <select value={category} onChange={(e)=>setCategory(e.target.value) } className="p-10 border rounded ">
                <option>All Categories</option>
                <option>Food</option>
                <option>Travels</option>
                <option>Bills</option>
                <option>Others</option>
            </select>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="p-10 border rounded "/>
            <input type="text" placeholder="note optional" value={note} onChange={(e)=>setNote(e.target.value)} className="p-10 border rounded "/>
        </div>
        <button className="bg-blue-500 text-white rounded hover:bg-blue-500 px-4 py-2 mt-5">Add</button>
    </form>
 )
}


 export default ExpenseForm;