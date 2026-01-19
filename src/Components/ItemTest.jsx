import React from "react";
import data from "../data/data.json"
import { NavLink } from "react-router-dom";

export default function ItemTest() {
  return (
    <div className="min-h-screen bg-gray-100">
        <div className="bg-red-500 text-white p-10 text-3xl">
  Tailwind Test
</div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide">
            Market Dashboard
          </h1>

          <ul className="flex gap-6 text-sm text-gray-300">
             <NavLink to={"/"}><li className="hover:text-white cursor-pointer">Home</li></NavLink>
            <NavLink to={"/Items"}><li className="hover:text-white cursor-pointer">Market</li></NavLink>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Item Trading Table
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 text-left">Item</th>
                  <th className="px-6 py-3 text-right">Buy Price</th>
                  <th className="px-6 py-3 text-right">Buy Qty</th>
                  <th className="px-6 py-3 text-right">Sell Price</th>
                  <th className="px-6 py-3 text-right">Sell Qty</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <NavLink to={"/" + item.id}>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {item.name}
                    </td>
                    </NavLink>

                    <td className="px-6 py-4 text-right text-green-600 font-medium">
                      {item.buy_price}
                    </td>

                    <td className="px-6 py-4 text-right">
                      {item.buy_quantity}
                    </td>

                    <td className="px-6 py-4 text-right text-red-600 font-medium">
                      {item.sell_price}
                    </td>

                    <td className="px-6 py-4 text-right">
                      {item.sell_quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
