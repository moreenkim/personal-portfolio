import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Skills = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="gray.50">
      <Box maxW="800px" mx="auto">
        <Heading size="lg" mb={4}>Technical Skills</Heading>
        <List spacing={3} fontSize="md">
          <ListItem><ListIcon as={CheckCircleIcon} color="blue.500" /> AWS: EC2, S3, IAM, CloudFront</ListItem>
          <ListItem><ListIcon as={CheckCircleIcon} color="blue.500" /> React.js, Node.js, Express, ChakraUI</ListItem>
          <ListItem><ListIcon as={CheckCircleIcon} color="blue.500" /> MongoDB, Firebase, Postman</ListItem>
          <ListItem><ListIcon as={CheckCircleIcon} color="blue.500" /> Bash scripting, SSH, Linux</ListItem>
          <ListItem><ListIcon as={CheckCircleIcon} color="blue.500" /> Excel, SQL, Jira, Notion</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
