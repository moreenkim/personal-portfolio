import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaCloud,
  FaPaintBrush,
  FaTools,
  FaBug,
  FaBook,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const focusAreas = [
  { title: 'Frontend Development', icon: FaCode, color: 'teal.400' },
  { title: 'Cloud Support & AWS', icon: FaCloud, color: 'blue.400' },
  { title: 'UI/UX Implementation', icon: FaPaintBrush, color: 'purple.400' },
  { title: 'System Optimization', icon: FaTools, color: 'orange.400' },
  { title: 'Troubleshooting', icon: FaBug, color: 'red.400' },
  { title: 'Technical Documentation', icon: FaBook, color: 'green.400' },
];

const About = () => {
  const cardBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box py={12} px={4} bg="white">
      <Box maxW="1200px" mx="auto" display="flex" flexDirection={['column', 'column', 'row']} gap={10}>
        {/* Left Side: Intro */}
        <Box flex="1" textAlign={['center', 'center', 'left']}>
          <Heading
            size="lg"
            mb={4}
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
          >
            About Me
          </Heading>
          <Text fontSize="md" color="gray.600">
            I’m a cloud support fellow and frontend developer with a passion for solving real-world technical challenges.
            My work blends AWS troubleshooting, scalable React apps, and UI/UX implementation — all backed by a strategy-first mindset.
          </Text>
        </Box>

        {/* Right Side: Focus Areas */}
        <Box flex="1">
          <SimpleGrid columns={[2, 3]} spacing={4}>
            {focusAreas.map((area, index) => (
              <MotionBox
                key={index}
                p={5}
                bg={cardBg}
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Icon as={area.icon} boxSize={6} mb={2} color={area.color} />
                <Text fontWeight="semibold" fontSize="sm">{area.title}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
