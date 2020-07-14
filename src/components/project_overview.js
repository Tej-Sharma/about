import React from 'react'
import { Box, Image, Badge } from "@chakra-ui/core";

const IMG_URI = '/img/projects';

export default function project_overview() {
  const projects = [
    {
      id: '1',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Space Talk',
      desc: 'Immense potential social media app allowing users to create global chat lobbies',
      tech: 'Java / Android APIs / NoSQL'
    },
    {
      id: '2',
      imageAlt: "Project Photo",
      type: 'Site',
      name: 'Softie Pals',
      desc: 'A whole platform for indie devs: create product pages, search, QAs, reviews',
      tech: 'React.js / Node / CSS / NoSQL'
    },
    {
      id: '3',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'India Government Schemes',
      desc: '30,000+ users alone use this comprehensive app connected to a realtime NoSQL DB',
      tech: 'Java / Android APIs / NoSQL'
    },
    {
      id: '4',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Voice Coach HITT Helper',
      desc: 'Innovative fitness app that allowed users to create custom workouts with guided audio',
      tech: 'Java / Android APIs / NoSQL'
    },
    {
      id: '5',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Various Machine Learning Projects',
      desc: 'Using ML algorithms to try to solve and illuminate today\'s problems',
      tech: 'Java / Android APIs / NoSQL'
    },
    {
      id: '6',
      imageAlt: "Project Photo",
      type: 'Game',
      name: 'Assortment of games',
      desc: 'Complex games that provide gameplay unlike others',
      tech: 'C# / Node.js (backend) / Unity'
    }
  ]

  return (
    <section class="text-gray-700 body-font z-0 mt-20 mb-4">
      <div className="flex flex-row flex-wrap items-center justify-center mt-3">
        {
          projects.map(project => (
            <Box maxW="sm" borderWidth="1px" m={3} rounded="lg" overflow="hidden" 
              className="bg-white">
              <Image
                src={`${IMG_URI}/img${project.id}.jpg`}
                alt={project.imageAlt}
                w="100%"
                h={64}
                />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge rounded="full" px="2" variantColor="teal">
                    {project.type}
                  </Badge>
              
                  <Box
                    color="gray.500"
                    fontWeight="extrabold"
                    as="h4"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {project.name}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h5"
                  lineHeight="tight"
                >
                  {project.desc}
                </Box>

                <Box
                  mt="1"
                  fontWeight="light"
                  as="p"
                >
                  {project.tech}
                </Box>
              </Box>
            </Box>
          ))
        }
      </div>
    </section>
  )
}
