import React from 'react'
import TotalExpenses from './TotalExpenses'
import RecentExpenses from './RecentExpenses'

const TotalAndRecentExpenses = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row lg:h-1/4 h-1/2'>
     <TotalExpenses/>
     <RecentExpenses/>
     
    </div>
  )
}

export default TotalAndRecentExpenses