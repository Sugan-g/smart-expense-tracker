import {useState} from 'react';
 
function ExpenseFilter({expenses=[],onFilter}){
  const [category,setCategory] = useState("");
  const [sort,setSort] = useState("");
  const [search,setSearch] = useState("");
  const [date,setDate] = useState("");

  const applyFilters = ()=>{
    
    let filtered = [...expenses];
    if(category){
        filtered= filtered.filter((exp)=>exp.category===category);
    }
    if(date){
        filtered= filtered.filter((exp)=>exp.date===date);
     }
     //search by note or amount 
     if(search){
        filtered=filtered.filter((exp)=>
            exp.note ?.toLowerCase().includes(search.toLowerCase()) || 
        exp.amount.toString().includes(search)
        );
     }
    if(sort==="recent"){
        filtered.sort((a,b)=>new Date(b.date) - new Date(a.date));
    }
    if(sort==="amount"){
        filtered.sort((a,b) => b.amount- a.amount);
    }
    onFilter(filtered);
  };

  //clear and reset full list from filter
    const clearFilters = ()=>{
    setCategory("");
    setSort("");
    setDate("");
    setSearch("");   
    onFilter(expenses);
    };
  return(
    <div className="bg-white p-4 rounded-xl shadow mb-10 w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-5">Filters</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="p-5 border rounded w-full md:w-auto flex-1">
                <option value="">All Category</option>
                <option>Food</option>
                <option>Travels</option>
                <option>Bills</option>
                <option>Others</option>
            </select>
            {/* search by date*/}
            <input type="date"  value={date} onChange={(e)=>setDate(e.target.value)} className="p-5 border rounded w-full md:w-auto flex-1"/>
            {/* search by filter*/}
            <input className="p-5 border rounded w-full md:w-auto flex-1 " type="text" placeholder='search by note or amount' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <select value={sort} onChange={(e)=>setSort(e.target.value)} className="p-5 border rounded w-full md:w-48 md:p-3">
                <option value="">No Sort</option>
                <option value="recent">Most Recent</option>
                <option value="amount">Highest Amount</option>
            </select>
            <div className='flex gap-2 w-full md:w-auto'>
                <button onClick={applyFilters} className="bg-green-500 hover:bg-green-600 rounded px-4 py-2 font-bold text-white w-full md:w-auto">Apply</button>
                <button onClick={clearFilters} className="bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 font-bold text-white w-full md:w-auto">Reset</button>
            </div>
            
        </div>
    </div>
  )
}
export default ExpenseFilter;