import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBriefcase, FaLaptopCode, FaCloud, FaTools } from 'react-icons/fa';

const experiences = [
  {
    title: 'Cloud Practitioner & Support Labs',
    company: 'AWS re/Start Program',
    description:
      'Simulated support tickets, incident handling, and cloud troubleshooting in real-world AWS environments.',
    icon: FaCloud,
    year: '2025',
  },
  {
    title: 'Software Developer (Mid & Junior)',
    company: 'Africa Sokoni',
    description:
      'React/Redux development, payment systems, UI/UX improvements, and cross-functional collaboration.',
    icon: FaLaptopCode,
    year: '2023–2024',
  },
  {
    title: 'FullStack Developer (Freelance)',
    company: 'UpWork',
    description:
      'Built and deployed full-stack apps, CI/CD pipelines, Stripe integration, and client-facing features.',
    icon: FaTools,
    year: '2022–2023',
  },
  {
    title: 'ICT Officer',
    company: 'Murban Movers Limited',
    description:
      'Technical support, server and network management, smart office systems, and infrastructure maintenance.',
    icon: FaBriefcase,
    year: '2021–2022',
  },
];

const WorkExperience = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const lineColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      py={12}
      px={4}
      bgGradient="linear(to-br, gray.800, blue.900)"
      color="white"
    >
      <Box maxW="1000px" mx="auto">
        <Heading
          size="lg"
          mb={10}
          textAlign="center"
          bgGradient="linear(to-r, teal.300, blue.300)"
          bgClip="text"
        >
          Work Experience
        </Heading>

        <VStack
          spacing={10}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            bg: lineColor,
          }}
        >
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <HStack
                key={index}
                w="100%"
                justify={isLeft ? 'flex-start' : 'flex-end'}
                position="relative"
              >
                <Box
                  w={['100%', '80%', '45%']}
                  p={6}
                  bg={cardBg}
                  borderRadius="md"
                  boxShadow="md"
                  color="gray.800"
                  transition="all 0.2s ease-in-out"
                  _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
                >
                  <HStack mb={2}>
                    <Icon as={exp.icon} boxSize={6} color="teal.400" />
                    <Heading size="sm">{exp.title}</Heading>
                  </HStack>
                  <Text fontSize="sm" fontWeight="bold" color="gray.500">
                    {exp.company} • {exp.year}
                  </Text>
                  <Text fontSize="sm" mt={2} color="gray.700">
                    {exp.description}
                  </Text>
                </Box>
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default WorkExperience;
