import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="gray.50">
      <Box maxW="800px" mx="auto" textAlign="center">
        <Heading size="2xl" mb={4}>Hi, I'm Moreen Kimwaki</Heading>
        <Text fontSize="lg" color="gray.600">
          Strategy Analyst | Cloud Engineer | AWS Enthusiast
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
