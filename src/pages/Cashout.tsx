import React from 'react';
import { CreditCard, DollarSign, Clock, CheckCircle } from 'lucide-react';

const transactions = [
  {
    id: 1,
    amount: '$1,500',
    recipient: 'Local Food Bank',
    status: 'Completed',
    date: '2024-03-15',
    method: 'Bank Transfer',
  },
  {
    id: 2,
    amount: '$2,000',
    recipient: 'Education Foundation',
    status: 'Processing',
    date: '2024-03-14',
    method: 'Wire Transfer',
  },
];

export function Cashout() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Cashout Management</h1>
          <p className="mt-1 text-sm text-gray-500">Process and track fund disbursements</p>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{transaction.recipient}</p>
                    <div className="flex items-center mt-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{transaction.amount}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-6 text-right">
                    <div className="flex items-center justify-end">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{transaction.method}</p>
                  </div>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}