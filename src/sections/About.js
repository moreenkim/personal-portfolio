import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="white">
      <Box maxW="800px" mx="auto">
        <Stack spacing={4}>
          <Heading size="lg">About Me</Heading>
          <Text fontSize="md">
            I’m a Strategy & Operations Analyst with hands-on AWS experience, passionate about cloud engineering and consulting. I thrive on solving problems, building scalable systems, and delivering client impact.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
