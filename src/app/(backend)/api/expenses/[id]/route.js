import Expense from '@/models/Expense';
import { connectDb } from '@/utils/dbConnect';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const single_expense = await Expense.findById(params.id);

    return new NextResponse(JSON.stringify(single_expense), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const PUT = async(request, {params}) => {
 try {
  const {id} = params.id;
  const fetchedTx = await Expense.findById(params.id);

  if(!fetchedTx) {
   return new NextResponse(JSON.stringify(`EXPENSE NOT FOUND!`), {status:403})
  }
   const req = await request.json();
   const updated_exp = await Expense.findOneAndUpdate({id:id}, req, {new:true});
   console.log(updated_exp);
    return new NextResponse(JSON.stringify(updated_exp), { status: 201 });
   } catch (error) {
    console.log(error)
  return new NextResponse(JSON.stringify(error), {status: 500})
  
 }
}
