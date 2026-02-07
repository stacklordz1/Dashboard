import React from "react";
import {
  FiDollarSign,
  FiArrowUpRight,
  FiMoreHorizontal,
} from "react-icons/fi";

const RecentTransaction = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl border border-stone-800 bg-neutral-900 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-medium text-stone-100">
          <FiDollarSign className="text-emerald-400" />
          Recent Transactions
        </h3>

        <button className="text-sm text-stone-400 hover:text-stone-200 hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          <TableRow cusId="48143" sku="Pro 1 Month" date="Aug 2nd" price="$9.75" order={1} />
          <TableRow cusId="19425" sku="Pro 3 Month" date="Aug 2nd" price="$21.25" order={2} />
          <TableRow cusId="34192" sku="Pro 1 Year" date="Aug 1st" price="$94.75" order={3} />
          <TableRow cusId="99481" sku="Pro 1 Month" date="Aug 1st" price="$9.44" order={4} />
          <TableRow cusId="53104" sku="Pro 1 Month" date="Aug 1st" price="$9.23" order={5} />
          <TableRow cusId="81304" sku="Pro 3 Month" date="Jul 31st" price="$22.02" order={6} />
        </tbody>
      </table>
    </div>
  );
};

/* ---------- Table Head ---------- */
const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-400 border-b border-stone-800">
        <th className="p-2 text-left">Customer ID</th>
        <th className="p-2 text-left">SKU</th>
        <th className="p-2 text-left">Date</th>
        <th className="p-2 text-left">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

/* ---------- Table Row ---------- */
const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr
      className={`text-sm transition-colors ${
        order % 2
          ? "bg-stone-800/40"
          : "bg-transparent"
      } hover:bg-gray-800`}
    >
      <td className="p-2">
        <a
          href="#"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline"
        >
          {cusId}
          <FiArrowUpRight />
        </a>
      </td>

      <td className="p-2 text-stone-300">{sku}</td>
      <td className="p-2 text-stone-400">{date}</td>
      <td className="p-2 font-medium text-stone-100">{price}</td>

      <td className="w-8">
        <button className="grid size-8 place-content-center rounded text-stone-400 transition  hover:text-stone-200">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};

export default RecentTransaction;
