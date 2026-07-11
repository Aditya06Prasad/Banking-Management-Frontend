import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const Accounts = () => {
  const accounts = [
    {
      id: 1,
      bankName: "BankEase Bank",
      accountHolder: "Aditya Prasad",
      type: "Savings Account",
      accountNumber: "XXXX XXXX 4582",
      balance: 85420.5,
      status: "Active",
      isPrimary: true,
      ifscCode: "BNKE0001234",
      branchName: "Jalandhar Main Branch",
    },
    {
      id: 2,
      bankName: "BankEase Bank",
      accountHolder: "Aditya Prasad",
      type: "Current Account",
      accountNumber: "XXXX XXXX 7619",
      balance: 32850,
      status: "Active",
      isPrimary: false,
      ifscCode: "BNKE0001234",
      branchName: "Jalandhar Main Branch",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            My Accounts
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage your bank accounts.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                {/* Account Header */}

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      {account.bankName}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold text-gray-800">
                      {account.type}
                    </h2>
                  </div>

                  <div className="flex gap-2">
                    {account.isPrimary && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        Primary
                      </span>
                    )}

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      {account.status}
                    </span>
                  </div>
                </div>

                {/* Account Balance */}

                <div className="mt-8">
                  <p className="text-sm text-gray-500">
                    Available Balance
                  </p>

                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    ₹
                    {account.balance.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>

                {/* Account Details */}

                <div className="mt-6 grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500">
                      Account Holder
                    </p>

                    <p className="mt-1 font-medium text-gray-700">
                      {account.accountHolder}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Account Number
                    </p>

                    <p className="mt-1 font-medium tracking-wider text-gray-700">
                      {account.accountNumber}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      IFSC Code
                    </p>

                    <p className="mt-1 font-medium text-gray-700">
                      {account.ifscCode}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Branch
                    </p>

                    <p className="mt-1 font-medium text-gray-700">
                      {account.branchName}
                    </p>
                  </div>
                </div>

                {/* Account Actions */}

                <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row">
                  <Link
                    to="/transfer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700"
                  >
                    Transfer Money
                  </Link>

                  <Link
                    to="/transactions"
                    className="rounded-lg border border-blue-600 px-4 py-2 text-center font-medium text-blue-600 transition hover:bg-blue-50"
                  >
                    View Transactions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accounts;