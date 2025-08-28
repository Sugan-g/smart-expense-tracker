function ExpenseList ({expenses=[],deleteExpense}){
return(
    <div className="bg-white p-4 rounded-xl shadow w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Expense History</h2>
        {!expenses.length ? (<p className="text-gray-500">No expense yet</p>):(
        <ul className="divide-y">
          {expenses.map(({id,amount,category,date,note})=>
            (
            <li key={id} className="flex flex-col md:flex-row md:items-center md:justify-between
            py-3 gap-2">
            <div className="flex flex-col">
                <p className="font-bold text-lg text-gray-600">{amount} - {category}</p>
                <p className="text-sm text-gray-500">{date} | {note}</p>
           </div>
        <button onClick={()=>deleteExpense(id)} className="text-white hover:text-white rounded self-start md:self-auto 
        text-bold font-medium transition bg-red-600 px-4 py-2">delete</button>
    </li>
    ))}
        </ul>
    )}
    </div>
)
}

export default ExpenseList;