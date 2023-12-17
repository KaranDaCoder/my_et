'use client';
import React, { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Add = () => {
  const router = useRouter();
  // const { data: session, status } = useSession();

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    console.log(`handle Form Submission`);
    const create_expense = {
      tx_name,
      tx_amount,
      tx_date,
      tx_card_used,
      tx_description,
      tx_status,
      tx_type
    };
    console.log(create_expense);
    const post_expense = await fetch(
      `${process.env.NEXTAUTH_URL}/api/expenses`,
      {
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: `Bearer ${session?.jwt_token}`,
        // },
        method: 'POST',
        body: JSON.stringify(create_expense),
      }
    );
    router.refresh();
    router.back('/dashboard');
  };

  const [expenseDrawer, setExpenseDrawer] = useState(true);

  const [tx_name, setTxName] = useState('');
  const [tx_amount, setTxAmount] = useState(0);
  const [tx_date, setTxDate] = useState(new Date());
  const [tx_card_used, setTxCardUsed] = useState('');
  const [tx_description, setTxDesc] = useState('');
  const [tx_type, setTxType] = useState('In Store');
  const [tx_status, setTxPending] = useState(false);

  return (
    <div className='w-full overflow-hidden font-mono bg-white border shadow-2xl rounded-xl h-5/6 md:w-full text-slate-900'>
      <div className='w-full h-full'>
        <div
          className='py-2 font-mono text-xl font-extrabold text-center uppercase rounded-lg cursor-pointer'
          onClick={() => setExpenseDrawer(!expenseDrawer)}
        >
          <h2 className='w-full text-slate-900'>Add A New Expense</h2>
        </div>
        {expenseDrawer && (
          <form
            onSubmit={handleFormSubmission}
            className='flex flex-col justify-start w-full h-full px-2 py-6 space-y-4'
          >
            <input
              type='search'
              placeholder='Transaction name'
              className='w-full h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
              onChange={(e) => setTxName(e.target.value)}
            />
            <div className='flex items-center justify-between w-full h-12 gap-3'>
              <input
                type='search'
                placeholder='$$.$$'
                className='w-1/2 h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
                onChange={(e) => setTxAmount(parseFloat(e.target.value))}
              />
              <input
                type='datetime-local'
                name=''
                id='dates'
                className='w-1/2 h-10 px-2 outline-none cursor-pointer ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
                onChange={(e) =>
                  setTxDate(new Date(e.target.value).toLocaleDateString())
                }
              />
            </div>
            <input
              type='search'
              name=''
              id='card_type'
              placeholder='Card Used?'
              className='w-full h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
              onChange={(e) => setTxCardUsed(e.target.value)}
            />
            <textarea
              name=''
              id=''
              cols='10'
              rows='10'
              className='px-2 border outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
              placeholder='Describe the transaction...'
              onChange={(e) => setTxDesc(e.target.value)}
            />
            <div className='flex items-center justify-between w-full'>
              <label className='text-base font-bold -tracking-wider'>
                <input
                  type='radio'
                  name='tx_type'
                  value='Online'
                  onChange={(e) => setTxType(e.target.value)}
                />{' '}
                Online
              </label>
              <label className='text-base font-bold -tracking-wider'>
                <input
                  type='radio'
                  name='tx_type'
                  value='In Store'
                  defaultChecked={true}
                  onChange={(e) => setTxType(e.target.value)}
                />{' '}
                In Store
              </label>
              <label className='text-base font-bold -tracking-wider'>
                <input
                  type='checkbox'
                  name='is_pending'
                  id='pending'
                  defaultChecked={false}
                  onChange={() => setTxPending(!tx_status)}
                />
                Tx Pending?
              </label>
            </div>
            <div className='flex w-full h-auto gap-6'>
              <button className='w-1/2 px-4 py-2 text-white bg-green-900 border rounded-lg lg:py-4'>
                ADD
              </button>
              <button className='w-1/2 px-4 py-2 text-white border rounded-lg lg:py-4 bg-slate-900'>
                CANCEL
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Add;
