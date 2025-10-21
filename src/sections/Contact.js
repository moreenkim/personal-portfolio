import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
  SimpleGrid,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔗 Replace this with your actual form handler (Formspree, EmailJS, or backend endpoint)
    alert('Message sent! (Form handler not yet connected)');
  };

  return (
    <Box py={8} px={4} bg="gray.50">
      <Box maxW="1000px" mx="auto">
        <Heading size="lg" mb={6} textAlign="center">Contact Me</Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          {/* Contact Form */}
          <Box
            p={5}
            bg="white"
            borderRadius="md"
            boxShadow="md"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="name" placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" placeholder="your.email@example.com" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" placeholder="Tell me how I can help" rows={5} />
                </FormControl>
                <Button type="submit" colorScheme="blue">Send Message</Button>
              </VStack>
            </form>
          </Box>

          {/* Social Links */}
          <Box
            p={5}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
          >
            <Heading size="sm" mb={4}>Connect with Me</Heading>
            <VStack spacing={4}>
              <Link href="https://github.com/yourusername" isExternal>
                <Button leftIcon={<Icon as={FaGithub} />} variant="outline" colorScheme="gray">
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/moreen-kimwaki-a74b49126/" isExternal>
                <Button leftIcon={<Icon as={FaLinkedin} />} variant="outline" colorScheme="blue">
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:moreenkim36@gmail.com">
                <Button leftIcon={<Icon as={FaEnvelope} />} variant="outline" colorScheme="teal">
                  Email
                </Button>
              </Link>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
