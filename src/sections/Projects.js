import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="white">
      <Box maxW="800px" mx="auto">
        <Heading size="lg" mb={4}>Projects</Heading>
        <VStack spacing={4} align="start" fontSize="md">
          <Box>
            <Heading size="md">React Portfolio</Heading>
            <Text>Single-page app showcasing AWS screenshots and cloud skills.</Text>
          </Box>
          <Box>
            <Heading size="md">Africa Sokoni UX Redesign</Heading>
            <Text>Improved payment integration and SLA delivery for e-commerce platform.</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Projects;
