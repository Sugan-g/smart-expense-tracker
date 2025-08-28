import { PieChart,Pie,Tooltip,Cell, ResponsiveContainer} from 'recharts';

function ExpenseChart({expenses=[]}){
    const categoryTotals  = expenses.reduce((acc,exp)=>{
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    },{});

    const data = Object.keys(categoryTotals).map((cat)=>({
     name:cat,
     value:categoryTotals[cat],
    }));

    const COLORS = ['#0088FE','#00C49F','#FFBB28','#FF8042'];
    return (
        <div className='bg-white p-4 rounded-xl shadow w-full max-w-4xl mx-auto'>
            <h2 className='text-xl font-bold mb-3'>Expense Distribution</h2>
            {data.length === 0 ? (<p className='text-gray-500'>No data to dispaly</p>):(
               <div className='w-full h-64 sm:h-80 md:h-96'>
                <ResponsiveContainer>
                    <PieChart width={500} height={300}>
                        <Pie
                            data ={data}
                            dataKey='value'
                            nameKey ='name'
                            cx='50%'
                            cy='50%'
                            outerRadius={100}
                            label
                            >{data.map((_,index)=>(
                                <Cell key={index} fill={COLORS[index % COLORS.length]}></Cell>
                            ))}
                        </Pie>
                   <Tooltip/>
                </PieChart>
                </ResponsiveContainer>
               </div>
              
              
            )}
        </div>
    )
}

export default ExpenseChart;