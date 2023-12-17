'use client';
import React, { useState } from 'react';
import { HeroIcons_ArrowDown, HeroIcons_ArrowUp } from './HeroIcons';
import moment from 'moment';
import Link from 'next/link';

const AllExpenses = ({data}) => {
  const [fetchedData, setFetchedData] = useState(data);
  const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });
  const [search, setSearch] = useState('');
  
      const searchExpenses = (e) => {
        setSearch(e.target.value);
        const matchingExpenses = data.filter((expense) => {
          return (
            `${expense.tx_name}`
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            `${expense.tx_description}`
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          );
        });
        setFetchedData(matchingExpenses);
      };


     const sortByName = () => {
       console.log(`Sorting By Name..`);
       const expenses_copy = [...fetchedData];
       expenses_copy.sort((expenseA, expenseB) => {
         if (sorted.reversed) {
           return expenseA.tx_name > expenseB.tx_name ? 1 : -1;
         } else {
           return expenseB.tx_name > expenseA.tx_name ? 1 : -1;
         }
       });
       // console.log(expenses_copy);
       setFetchedData(expenses_copy);
       setSorted({ sorted: 'id', reversed: !sorted.reversed });
     };

       const sortByDate = () => {
         console.log(`Sorting By Date..`);
         const expenses_copy = [...fetchedData];
         expenses_copy.sort((expenseA, expenseB) => {
           if (sorted.reversed) {
             return expenseA.tx_date > expenseB.tx_date ? 1 : -1;
           } else {
             return expenseB.tx_date > expenseA.tx_date ? 1 : -1;
           }
         });
         setFetchedData(expenses_copy);
         setSorted({ sorted: 'id', reversed: !sorted.reversed });
       };

     const sortByAmount = () => {
       console.log(`Sorting By Date..`);
       const expenses_copy = [...fetchedData];
       expenses_copy.sort((expenseA, expenseB) => {
         if (sorted.reversed) {
           return expenseA.tx_amount > expenseB.tx_amount ? 1 : -1;
         } else {
           return expenseB.tx_amount > expenseA.tx_amount ? 1 : -1;
         }
       });
       setFetchedData(expenses_copy);
       setSorted({ sorted: 'id', reversed: !sorted.reversed });
     };




  return (
    <div className='w-full h-full px-1 overflow-y-auto'>
      <div className='sticky top-0 flex justify-center w-full h-10 mt-2 bg-white border-slate-950'>
        <input
          type='search'
          name=''
          id=''
          className='w-full px-2 border-2 rounded-md outline-none lg:w-3/4'
          placeholder='search by name or description'
          onChange={(e) => searchExpenses(e)}
        />
      </div>
      <table className='w-full mt-5 overflow-hidden bg-white shadow-md table-auto'>
        <thead className='w-full border bg-slate-50'>
          <tr className=''>
            <th
              className='py-1 text-sm uppercase cursor-pointer text-fuchsia-800 w-fit lg:text-base'
              onClick={sortByDate}
            >
              <div className='flex items-center justify-center'>
                <HeroIcons_ArrowUp />
                <span>Date</span>
                <HeroIcons_ArrowDown />
              </div>
            </th>
            <th
              className='py-1 text-sm text-center uppercase cursor-pointer text-fuchsia-800 w-fit lg:text-base'
              onClick={sortByName}
            >
              Name
            </th>
            <th
              className='py-1 text-sm text-center uppercase cursor-pointer text-fuchsia-800 w-fit lg:text-base'
              onClick={sortByAmount}
            >
              Amount
            </th>
            <th className='py-1 text-sm text-center uppercase cursor-pointer text-fuchsia-800 w-fit lg:text-base'>
              Description
            </th>
          </tr>
        </thead>
        <tbody className='w-full p-2 text-xs lg:text-base'>
          {fetchedData.map((exp) => (
            <tr
              className='w-full px-2 border h-28 rounded-xl'
              key={exp._id}
            >
              <td className='text-center'>
                <div className='flex flex-col'>
                  <span className='text-xs font-light lg:text-lg'>
                    {moment(exp.tx_date).format('Do, MMM YY')}
                  </span>
                  <Link href={`/edit/${exp._id}`} className='text-xs italic text-slate-700'>
                    Edit
                  </Link>
                </div>
              </td>
              <td className=''>
                <div className='flex flex-wrap items-center justify-center gap-4 text-center'>
                  <span className='text-xs font-light text-center capitalize lg:text-xl'>
                    {exp.tx_name}
                  </span>
                </div>
              </td>
              <td className='text-center w-fit'>
                <div className='flex flex-col'>
                  <div className='flex items-center justify-center text-xl'>
                    <span className='tex-xl'>$</span>
                    <span className='font-semibold tex-xl text-slate-700'>
                      {exp.tx_amount.toFixed(2).toString().split('.')[0]}
                    </span>
                    <span className='text-sm'>
                      .{exp.tx_amount.toFixed(2).toString().split('.')[1]}
                    </span>
                  </div>
                  <div className='flex flex-wrap items-center justify-center w-full gap-2'>
                    {exp.tx_status === true ? (
                      <span className='px-3 tracking-wider text-white uppercase bg-green-900 rounded-md w-fit'>
                        Pending
                      </span>
                    ) : (
                      <span className='px-3 tracking-wider text-white uppercase bg-green-900 rounded-md w-fit'>
                        Paid
                      </span>
                    )}
                  </div>
                </div>
              </td>
              <td className='text-center'>
                <div className='flex flex-col flex-wrap gap-1'>
                  <span className='text-xs lg:text-center text-end lg:text-base'>
                    {exp.tx_description}
                  </span>
                  <span className='pr-2 text-xs italic lg:pr-4 text-end text-slate-600'>
                    {exp.tx_card_used}
                  </span>
                  <span className='px-3 pr-2 text-xs italic text-green-800 lg:pr-4 text-end lg:text-sm'>
                    {exp.tx_type}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllExpenses;
