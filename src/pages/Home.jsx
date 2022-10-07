import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen">
      {/* LEFT SIDE */}
      <aside className="w-[200px] h-screen flex flex-col bg-white shadow-md">
        <div className="w-full h-[120px] flex flex-col justify-center items-center bg-green-500">
          <h1 className="text-2xl uppercase">jvalley</h1>
        </div>
        <nav className="w-full flex-1 flex flex-col">
          <Link
            to={'/'}
            className="h-10 w-full px-4 flex items-center hover:bg-green-100"
          >
            Home
          </Link>
          <Link
            to={'/blog'}
            className="h-10 w-full px-4 flex items-center hover:bg-green-100"
          >
            Blog
          </Link>
          <Link
            to={'/setting'}
            className="h-10 w-full px-4 flex items-center hover:bg-green-100"
          >
            Setting
          </Link>
        </nav>
      </aside>
      {/* END LEFT SIDE */}

      {/* RIGHT SIDE */}

      <section className="flex-1 h-screen overflow-y-auto p-4">
        <Outlet />
      </section>
      {/* END RIGHT SIDE */}
    </div>
  );
}
