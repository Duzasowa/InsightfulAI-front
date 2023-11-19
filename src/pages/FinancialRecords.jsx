import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const FinancialRecords = () => {
  const navigate = useNavigate();
  const [expandedYear, setExpandedYear] = useState(null);
  // Let's assume that this data will be received from the API or Redux store
  const yearlyIncome = [
    {
      year: "2021",
      months: [
        { month: "January", income: "$5000" },
        { month: "February", income: "$4500" },
        // ... other months
      ],
      total: "$60000",
    },
    {
      year: "2020",
      months: [
        { month: "May", income: "$1000" },
        { month: "September", income: "$2300" },
        // ... other months
      ],
      total: "$20000",
    },
    // ... other years
  ];

  const handleYearClick = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="mb-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="mr-2 -ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div>
          {yearlyIncome.map((yearRecord) => (
            <div key={yearRecord.year} className="mb-4">
              <button
                onClick={() => handleYearClick(yearRecord.year)}
                className="text-xl font-bold flex justify-between items-center w-full text-left"
              >
                <span>Year: {yearRecord.year}</span>
                <span>Total Income: {yearRecord.total}</span>
              </button>
              {expandedYear === yearRecord.year && (
                <div className="mt-4 grid grid-cols-6 gap-4">
                  {yearRecord.months.map((monthRecord) => (
                    <div
                      key={monthRecord.month}
                      className="border p-4 rounded-lg shadow-md"
                    >
                      <h4 className="font-semibold">{monthRecord.month}</h4>
                      <p>{monthRecord.income}</p>
                      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FinancialRecords;
