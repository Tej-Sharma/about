import React from 'react'
import ts from '../assets/img/ts.png';

export default function navbar() {
  return (
    <header className="text-gray-100 body-font bg-blue-800 fixed top-0 w-screen z-20">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
          <img
            alt=""
            src={ts}
            className="h-12  text-white bg-indigo-500 rounded-full"
            />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/*
            <a className="mr-5 hover:text-gray-900">Tejas Sharma - Software Engineer</a>
          */}
        </nav>
        <a
          href="http://trollgen.atspace.eu/"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 transition duration-500 ease-in-out hover:-translate-x-1 rounded text-base mt-4 md:mt-0">
          Trollgen Tech
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}
