import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-5 grid gap-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">gray chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <button className="block mt-5 bg-blue-500 text-white p-3
         text-center rounded-xl w-1/2 mx-auto">Check out</button>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;