import { Box, Text, Link, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6} px={4} textAlign="center">
      <HStack spacing={4} justify="center" mb={2}>
        <Link href="https://www.linkedin.com/in/moreen-kimwaki-a74b49126/" isExternal>LinkedIn</Link>
        <Link href="https://github.com/moreen" isExternal>GitHub</Link>
        <Link href="mailto:moreenkim36@gmail.com">Email</Link>
      </HStack>
      <Text fontSize="sm">© {new Date().getFullYear()} Moreen Kimwaki. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
