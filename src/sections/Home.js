import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box py={6} px={4} bg="gray.50">
      <Box maxW="600px" mx="auto" textAlign="center">
        <Heading size="lg" mb={3}>Moreen Kimwaki</Heading>
        <Text fontSize="sm" color="gray.600">
      Software Engineer & Cloud Practitioner <br />

      Building scalable solutions
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
