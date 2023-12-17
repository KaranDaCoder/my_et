import mongoose, { Schema } from 'mongoose';

const ExpenseSchema = new Schema(
  {
    tx_name: {
      type: String,
      required: [true, 'Problem! Transaction Name cannot be empty'],
    },
    tx_amount: {
      type: Number,
      required: [true, 'Problem! Transaction Amount cannot be empty'],
    },
    tx_date: {
      type: Date,
      required: [true, 'Problem! Transaction Date cannot be empty'],
    },
    tx_type: {
      type: String,
      enum: ['In Store', 'Online'],
      default: 'In Store',
    },
    tx_card_used: {
      type: String,
      enum: [
        'Capital One Card Ending 3340',
        'Apple Card Ending 3735',
        'Well Fargo Card Ending 9521',
        'Cash',
      ],
      required: [true, 'Problem! Transaction Card/Cash cannot be empty'],
      default: 'Capital One Card Ending 3340',
    },
    tx_status: {
      type: Boolean,
      default: true,
    },
    tx_description: {
      type: String,
      unique: true,
      required: [true, 'Problem! Transaction Description cannot be empty'],
    }
  },
  { timestamps: true }
);
const Expense =
  mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema);
export default Expense;
