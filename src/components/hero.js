import React from 'react'
import swag_photo from '../assets/img/swag_photo.png';
import { Avatar, AvatarBadge } from "@chakra-ui/core";

export default function hero() {
  return (
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 pt-10 pb-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
            Tejas Sharma
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed text-lg w-7/12">
            Advanced software engineer with a rich and powerful skillset including full-stack development and machine learning.
          </p>
          <div class="flex lg:flex-row md:flex-col">
            <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305" />
                <span class="ml-4 flex items-start flex-col leading-none">
                <span class="title-font font-medium">GitHub </span>
              </span>
            </button>
          </div>
        </div>
        <Avatar w='300px' h='300px' name="Tejas Sharma" src={swag_photo} />
      </div>
    </section>
  )
}
