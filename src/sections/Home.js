import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.400, blue.500)',
    'linear(to-r, teal.600, purple.700)'
  );

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        textAlign="center"
        color="white"
      >
        <VStack spacing={6}>
          <Heading size="2xl" fontWeight="bold">
            Moreen Kimwaki
          </Heading>
          <Text fontSize="lg" maxW="600px">
            Software Engineer & Cloud Practitioner <br />
            Building scalable, vibrant solutions with React, Chakra UI, and AWS.
          </Text>
          <Button
            size="lg"
            colorScheme="whiteAlpha"
            variant="outline"
            _hover={{ bg: 'whiteAlpha.300', transform: 'scale(1.05)' }}
          >
            View My Work
          </Button>
          <a href="/Moreen_N_Kimwaki_cv.pdf" download>
    <Button
      size="lg"
      colorScheme="whiteAlpha"
      variant="outline"
      _hover={{ bg: 'whiteAlpha.300', transform: 'scale(1.05)' }}
    >
      Download CV
    </Button>
  </a>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default Home;
