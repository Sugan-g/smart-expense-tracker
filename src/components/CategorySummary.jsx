
function CategorySummary({expenses=[]}){
//calculate total
  const categoryTotals  = expenses.reduce((acc,exp)=>{
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    },{});

    return (
     <div className="bg-white p-4 rounded-xl shadow w-full max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-bold mb-3">Category Total</h2>
        {Object.keys(categoryTotals).length ===0 ? (<p className="text-gray-500">No expense yet</p>):(
        <ul className="divide-y">
          {Object.entries(categoryTotals).map(([category,total])=>
            (
            <li key={category} className="flex flex-col md:flex-row md:items-center md:justify-between
            py-3 gap-2">
            <div className="flex flex-col">
                <p className="font-bold text-lg text-gray-600">{category}</p>
                <p className="text-sm text-gray-500">{total}</p>
           </div>
       
    </li>
    ))}
        </ul>
    )}
    </div>
    )
}
export default CategorySummary;