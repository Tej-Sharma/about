import React from 'react'
import { Box, Image, Badge } from "@chakra-ui/core";
import { projectImages } from '../data/images';

export default function project_overview() {
  // Store the projects with their properties
  const projects = [
    {
      id: '1',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Space Talk',
      desc: 'Immense potential social media app allowing users to create global chat lobbies',
      tech: 'Java / Android APIs / NoSQL',
      url: 'https://play.google.com/store/apps/details?id=com.trollgen.spacetalk'
    },
    {
      id: '2',
      imageAlt: "Project Photo",
      type: 'Site',
      name: 'Softie Pals',
      desc: 'A whole platform for indie devs: create product pages, search, QAs, reviews',
      tech: 'React.js / Node / CSS / NoSQL',
      url: 'https://softie-pals.web.app/'
    },
    {
      id: '3',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'India Government Schemes',
      desc: '30,000+ users alone use this comprehensive app connected to a realtime NoSQL DB',
      tech: 'Java / Android APIs / NoSQL',
      url: 'https://play.google.com/store/apps/details?id=com.trollgen.indiagovernmentschemes'
    },
    {
      id: '4',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Voice Coach HITT Helper',
      desc: 'Innovative fitness app that allowed users to create custom workouts with guided audio',
      tech: 'Java / Android APIs / NoSQL',
      url: 'https://play.google.com/store/apps/details?id=com.trollgen.hiithelper'
    },
    {
      id: '5',
      imageAlt: "Project Photo",
      type: 'App',
      name: 'Various Machine Learning Projects',
      desc: 'Using ML algorithms to try to solve and illuminate today\'s problems',
      tech: 'Java / Android APIs / NoSQL',
      url: 'https://github.com/Trollgen-Studios?tab=repositories'
    },
    {
      id: '6',
      imageAlt: "Project Photo",
      type: 'Game',
      name: 'Assortment of games',
      desc: 'Complex games that provide gameplay unlike others',
      tech: 'C# / Node.js (backend) / Unity',
      url: 'https://play.google.com/store/apps/dev?id=5709416098328895334'
    }
  ]

  return (
    <section className="text-gray-700 body-font z-0 mt-20 mb-4">
      <div className="flex lg:flex-row sm:flex-col flex-wrap items-center justify-center mt-3 px-4">
        {
          projects.map(project => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.name}>
              <Box maxW="sm" borderWidth="1px" m={3} rounded="lg" overflow="hidden" 
                className="bg-white transition duration-500 hover:bg-blue-500 hover:text-white mt-3">
                <Image
                  src={projectImages[project.id-1]}
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
            </a>
          ))
        }
      </div>
    </section>
  )
}
