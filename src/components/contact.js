import React from 'react'

import {
  EmailIcon,
  LinkedinIcon,
  TwitterIcon
} from "react-share";
import { Avatar } from "@chakra-ui/core";
import cool_photo from "../assets/img/cool_photo.png";

/**
 * Create a Google map as a backdrop
 */
export default function contact() {
  return (
    <section className="w-screen h-screen min-h-screen text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-52.70967533219885, -8.020019531250002&amp;q=%20VillanovaUniversity&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        className="h-screen min-h-screen">
        </iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 justify-center">
          <Avatar size="2xl" name="Christian Nwamba" src={cool_photo} className="mx-auto" />
          <div className="mt-6 flex flex-row flex-wrap justify-center">
            <a href="mailto:tejassharma08@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2"><EmailIcon size={32} round={true} /></a>
            <a href="https://twitter.com/TrollgenStudios" target="_blank" rel="noopener noreferrer" className="mx-2"><TwitterIcon size={32} round={true} /></a>
            <a href="www.linkedin.com/in/tejas-sharma-software-engineer" target="_blank" rel="noopener noreferrer" className="mx-2"><LinkedinIcon size={32} round={true} /></a>
            <a href="https://www.instagram.com/tejas_trollgen/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src="	https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="" className="rounded-full w-8" />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Curious about Trollgen? Visit the {' '}
            <a href="https://trollgen.home.blog/" target="_blank" rel="noopener noreferrer" className="text-red-400 transition duration-500 ease-in-out hover:translate-y-1 hover:text-red-900"> 
            blog
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
