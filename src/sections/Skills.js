import {
  Box,
  Heading,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const skills = [
  {
    title: '☁️ Cloud Platforms & Services',
    color: 'blue.400',
    items: [
      'AWS Certified Cloud Practitioner (CLF-C02)',
      'EC2, S3, IAM, CloudFront, Route 53, Lambda',
      'CloudWatch, RDS, Microsoft 365, Azure AD',
    ],
  },
  {
    title: '💻 Frontend Development',
    color: 'teal.400',
    items: [
      'React.js, Redux, Chakra UI',
      'HTML, CSS, Tailwind, Bootstrap',
      'Internationalization (i18n), UI/UX Design',
    ],
  },
  {
    title: '🛠️ Backend & APIs',
    color: 'orange.400',
    items: [
      'Node.js, Express, RESTful APIs',
      'Postman, Axios',
      'OAuth2, SSO, MFA, Active Directory',
    ],
  },
  {
    title: '🗃️ Databases',
    color: 'purple.400',
    items: ['MongoDB Compass, Firebase', 'AWS RDS'],
  },
  {
    title: '🧪 Testing & CI/CD',
    color: 'green.400',
    items: ['Jest + Enzyme', 'GitHub Actions, Heroku Deployment'],
  },
  {
    title: '🔐 Network & Security',
    color: 'red.400',
    items: ['DNS, SSL, TCP/IP', 'VPNs, Firewalls, IAM lifecycle'],
  },
];

const Skills = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box py={12} px={4} bg="gray.50">
      <Box maxW="1200px" mx="auto">
        <Heading
          size="lg"
          mb={8}
          textAlign="center"
          bgGradient="linear(to-r, teal.500, blue.500)"
          bgClip="text"
        >
          Technical Skills
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {skills.map((skill, index) => (
            <Box
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="md"
              boxShadow="md"
              transition="all 0.2s ease-in-out"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: 'xl',
                bg: cardHoverBg,
              }}
            >
              <Heading size="md" mb={4} color={skill.color}>
                {skill.title}
              </Heading>
              <List spacing={3} fontSize="sm" color="gray.700">
                {skill.items.map((item, i) => (
                  <ListItem key={i} display="flex" alignItems="center" gap={2}>
                    <Icon as={CheckCircleIcon} color={skill.color} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
