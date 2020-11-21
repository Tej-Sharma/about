import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Scale,
  Stat,
  StatLabel,
  StatNumber,
  useDisclosure,
} from "@chakra-ui/core";
import swag_photo from "../assets/img/swag_photo.png";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/dev?id=5709416098328895334";
const GITHUB_URL = "https://github.com/Tej-Sharma";

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openModalButtonRef = React.useRef();

  return (
    <section className="text-gray-700 body-font mb-12 ">
      <div className="container mx-auto flex px-5 pt-10 pb-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
            Tejas Sharma
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-lg w-2/3 text-gray-500">
            Greetings! I am Tejas, a software engineer with a rich and powerful
            skill set including full-stack development and machine learning.
            Click the arrows to learn more.
          </p>
          <div className="flex lg:flex-row md:flex-col">
            <button
              className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none"
              onClick={() => window.open(GOOGLE_PLAY_URL, "_blank").focus()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button
              className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none"
              onClick={() => window.open(GITHUB_URL, "_blank").focus()}
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
                alt=""
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium">GitHub </span>
              </span>
            </button>
            <button
              className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none"
              onClick={onOpen}
              ref={openModalButtonRef}
            >
              About Me
            </button>
          </div>
        </div>
        <img className="rounded-full" alt="" src={swag_photo} />
      </div>
      <Scale in={isOpen}>
        {(styles) => (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            preserveScrollBarGap
            size="full"
            className="h-screen"
            finalFocusRef={openModalButtonRef}
            isCentered
          >
            <ModalOverlay opacity={styles.opacity} />
            <ModalContent pb={5} {...styles} className="h-screen">
              <ModalHeader>A little about me</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p className="text-2xl">
                  As a software engineer, I have developed and launched multiple sites and software apps, 
                  thus I am knowledgeful about the complete process and the ins and outs of software development.
                  I have done Full-stack software development: frontend, backend, deploying (Docker, Azure, Amazon EC2).
                  Furthermore, I have also done Machine Learning and Deep Learning via TensorFlow and Scikit-Learn.
                  <br />
                  I also run Trollgen's blog,
                  <a
                    href="https://trollgen.home.blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {" "}
                    trollgen.home.blog
                  </a>
                  , where I occasionally share software development knowledge.
                  <br />
                  <br />

                  Not only that, but as a founder of many startups, I am great at managing the products,
                  leadership, entrepreneurship, and marketing operations. Combined with my strong
                  technical knoweldge, I have a lot of product management experience from having
                  managed multiple software projects. Thus, I always bring a lot of value and ideas to wherever I work.
                  <br />
                  <br />
                  When I am not working on a project, I have always
                  enjoyed playing basketball and following my favorite team in
                  the NBA: you may find me in one of the local courts playing a
                  pickup game. Reading books on philosophy and improvement are
                  also very important to me as I always look out for new ways to
                  develop myself. Finally, having lived in France, India and the USA,
                  I try my best to keep in touch with the happenings of
                  these three countries and look at ways I can contribute back
                  as an international citizen.
                </p>
                <div className="w-screen flex flex-row justify-around align-middle mt-12">
                  <div className="text-center">
                    <Stat>
                      <StatLabel>Projects</StatLabel>
                      <StatNumber>20+</StatNumber>
                    </Stat>
                  </div>
                  <div className="text-center">
                    <Stat>
                      <StatLabel>Languages used</StatLabel>
                      <StatNumber>5+</StatNumber>
                    </Stat>
                  </div>
                  <div className="text-center">
                    <Stat>
                      <StatLabel>
                        Users generated for personal projects{" "}
                      </StatLabel>
                      <StatNumber>50,000+</StatNumber>
                    </Stat>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button variantColor="blue" mr={3} onClick={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Scale>
    </section>
  );
}
