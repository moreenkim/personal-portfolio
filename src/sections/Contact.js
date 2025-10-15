import { Box, Heading, Text, Stack, Link } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="white">
      <Box maxW="800px" mx="auto">
        <Heading size="lg" mb={4}>Contact Me</Heading>
        <Stack spacing={3} fontSize="md">
          <Text>Email: <Link href="mailto:moreenkim36@gmail.com" color="blue.500">moreenkim36@gmail.com</Link></Text>
          <Text>LinkedIn: <Link href="https://www.linkedin.com/in/moreen-kimwaki-a74b49126/" isExternal color="blue.500">linkedin.com/moreen-kimwaki</Link></Text>
          <Text>GitHub: <Link href="https://github.com/moreen" isExternal color="blue.500">github.com/moreen</Link></Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
