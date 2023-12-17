import React from 'react'
import AllExpenses from '@/components/AllExpenses'
import TotalAndRecentExpenses from '@/components/TotalAndRecentExpenses'
import sample from '@/utils/sample'

const DashboardPage = async () => {
   const get_all_transactions = async () => {
     try {
       const request = await fetch(`http://127.0.0.1:3000/api/expenses`, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
         },
         cache: 'no-store',
       });
       const response = await request.json();
       return response;
     } catch (error) {
       console.log(error);
     }
   };
   const data = await get_all_transactions();
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <TotalAndRecentExpenses />
      <h2 className='text-3xl font-semibold text-center'>All Expenses</h2>
      <AllExpenses data={data}/>
    </div>
  );
}

export default DashboardPage