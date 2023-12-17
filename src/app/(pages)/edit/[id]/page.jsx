'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTx = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState({
    id: id,
    tx_name: '',
    tx_description: '',
    tx_amount: 0.00,
    tx_card_used: '',
    tx_type: '',
    tx_status: true,
    tx_date: '',
  });

  const router = useRouter();
  useEffect(() => {
    const fetchTxDetails = async () => {
      const req = await fetch(`http://localhost:3000/api/expenses/${id}`, {
        method: 'GET',
      });
      const resp = await req.json();
      setData(resp);
      console.log(resp)
    };
    fetchTxDetails();
  }, [id]);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    console.log(`handle Form Submission`);
    const edited_post = await fetch(
      `${process.env.NEXTAUTH_URL}/api/expenses/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );
    console.log(edited_post);
    if(edited_post.ok) {
     router.refresh();
     router.back('/dashboard')
    } else{
     console.log('ERROR')
    }
    console.log(`New Data : ${JSON.stringify(data)}`);
  };

  return (
    <div className='w-full overflow-hidden font-mono bg-white border shadow-2xl rounded-xl h-5/6 md:w-full text-slate-900'>
      <div className='w-full h-full'>
        <div
          className='py-2 font-mono text-xl font-extrabold text-center uppercase rounded-lg cursor-pointer'
          onClick={() => setExpenseDrawer(!expenseDrawer)}
        >
          <h2 className='w-full text-slate-900'>
            EDIT EXPENSE : {data.tx_name}
          </h2>
        </div>
        <form
          onSubmit={handleFormSubmission}
          className='flex flex-col justify-start w-full h-full px-2 py-6 space-y-4'
        >
          <input
            type='text'
            value={data.tx_name}
            className='w-full h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
            onChange={(e) => setData({ ...data, tx_name: e.target.value })}
          />
          <div className='flex items-center justify-between w-full h-12 gap-3'>
            <input
              type='text'
              value={data.tx_amount || '0.00'}
              placeholder='$$.$$'
              className='w-1/2 h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
              onChange={(e) =>
                setData({ ...data, tx_amount: (e.target.value) })
              }
            />
          </div>
          <input
            type='search'
            name=''
            value={data.tx_card_used}
            id='card_type'
            placeholder='Card Used?'
            className='w-full h-10 px-2 outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
            onChange={(e) => setData({ ...data, tx_card_used: e.target.value })}
          />
          <textarea
            name=''
            id=''
            cols='10'
            rows='10'
            value={data.tx_description}
            className='px-2 border outline-none ring-1 placeholder:italic ring-green-800 placeholder:text-slate-800'
            placeholder='Describe the transaction...'
            onChange={(e) =>
              setData({ ...data, tx_description: e.target.value })
            }
          />
          <div className='flex items-center justify-between w-full'>
            <label className='text-base font-bold -tracking-wider'>
              <input
                type='radio'
                name='tx_type'
                value='Online'
                onChange={(e) => setData({ ...data, tx_type: e.target.value })}
              />{' '}
              Online
            </label>
            <label className='text-base font-bold -tracking-wider'>
              <input
                type='radio'
                name='tx_type'
                value='In Store'
                defaultChecked={true}
                onChange={(e) => setData({ ...data, tx_type: e.target.value })}
              />{' '}
              In Store
            </label>
            <label className='text-base font-bold -tracking-wider'>
              <input
                type='checkbox'
                name='is_pending'
                id='pending'
                defaultChecked={false}
                value={data.tx_status}
                onChange={(e) => setData({ ...data, tx_status : !data.tx_status})}
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
      </div>
    </div>
  );
};

export default EditTx;
