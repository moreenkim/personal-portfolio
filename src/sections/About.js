import { Box, Heading, Text, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaCode, FaCloud, FaPaintBrush, FaTools, FaBug, FaBook } from 'react-icons/fa';

const focusAreas = [
  { title: 'Frontend Development', icon: FaCode },
  { title: 'Cloud Support & AWS', icon: FaCloud },
  { title: 'UI/UX Implementation', icon: FaPaintBrush },
  { title: 'System Optimization', icon: FaTools },
  { title: 'Troubleshooting', icon: FaBug },
  { title: 'Technical Documentation', icon: FaBook },
];

const About = () => {
  return (
    <Box py={8} px={4} bg="white">
      <Box maxW="800px" mx="auto" textAlign="center">
        <Heading size="lg" mb={4}>About Me</Heading>
        <Text fontSize="sm" color="gray.600" mb={6}>
          I’m a cloud support fellow and frontend developer with a passion for solving real-world technical challenges.
          My work blends AWS troubleshooting, scalable React apps, and UI/UX implementation — all backed by a strategy-first mindset.
        </Text>

        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {focusAreas.map((area, index) => (
            <Box
              key={index}
              p={5}
              bg="gray.50"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', bg: 'white' }}
              textAlign="center"
            >
              <Icon as={area.icon} boxSize={6} mb={2} color="blue.500" />
              <Text fontWeight="semibold" fontSize="sm">{area.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
