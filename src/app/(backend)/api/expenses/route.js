import Expense from '@/models/Expense';
import { connectDb } from '@/utils/dbConnect';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    await connectDb();
    const all_expenses = await Expense.find({}).sort({ tx_date: -1 });
    return new NextResponse(JSON.stringify(all_expenses), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  try {
    await connectDb();
    const {
      tx_name,
      tx_amount,
      tx_date,
      tx_type,
      tx_card_used,
      tx_status,
      tx_description,
    } = await request.json();

    const create_new_expense = {
      tx_name,
      tx_amount,
      tx_date,
      tx_type,
      tx_card_used,
      tx_status,
      tx_description,
    };
    const new_expense = await Expense.create(create_new_expense);
    return new NextResponse(JSON.stringify(new_expense), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
