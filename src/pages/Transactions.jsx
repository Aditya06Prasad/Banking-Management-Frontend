import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import InputField from "../components/InputField";

const Transactions = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const transactions = [
    {
      id: 1,
      title: "Netflix Subscription",
      date: "11 July 2026",
      type: "Debit",
      amount: 499,
      status: "Completed",
    },
    {
      id: 2,
      title: "Salary",
      date: "10 July 2026",
      type: "Credit",
      amount: 50000,
      status: "Completed",
    },
    {
      id: 3,
      title: "Swiggy",
      date: "2 July 2026",
      type: "Debit",
      amount: 320,
      status: "Completed",
    },
    {
      id: 4,
      title: "Electricity Bill",
      date: "28 June 2026",
      type: "Debit",
      amount: 1850,
      status: "Completed",
    },
    {
      id: 5,
      title: "Flipkart Refund",
      date: "25 June 2026",
      type: "Credit",
      amount: 1299,
      status: "Completed",
    },
    {
      id: 6,
      title: "Mobile Recharge",
      date: "20 June 2026",
      type: "Debit",
      amount: 799,
      status: "Completed",
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "All" || transaction.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>

          <p className="mt-2 text-gray-600">
            View and track your account transactions.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:max-w-sm">
              <InputField
                id="search"
                label="Search Transaction"
                placeholder="Search by transaction name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="w-full md:w-52">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Filter
              </label>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
              >
                <option value="All">All</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Transaction
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Date
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Type
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="transition hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-medium text-gray-800">
                          {transaction.title}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 text-gray-600">
                          {transaction.date}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-medium ${
                              transaction.type === "Credit"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            {transaction.status}
                          </span>
                        </td>

                        <td
                          className={`whitespace-nowrap px-6 py-4 text-right font-semibold ${
                            transaction.type === "Credit"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "Credit" ? "+" : "-"}₹
                          {transaction.amount.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        That payment was not found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Transactions;
