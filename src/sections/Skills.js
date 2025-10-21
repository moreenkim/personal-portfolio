import { Box, Heading, Text, SimpleGrid, List, ListItem } from '@chakra-ui/react';

const skills = [
  {
    title: '☁️ Cloud Platforms & Services',
    items: [
      'AWS Certified Cloud Practitioner (CLF-C02)',
      'EC2, S3, IAM, CloudFront, Route 53, Lambda',
      'CloudWatch, RDS, Microsoft 365, Box, OneDrive, Azure AD',
    ],
  },
  {
    title: '💻 Frontend Development',
    items: [
      'React.js, Redux, Chakra UI',
      'HTML, CSS, Tailwind, Bootstrap',
      'Internationalization (i18n), UI/UX Design',
    ],
  },
  {
    title: ' Backend & APIs',
    items: [
      'Node.js, Express, RESTful APIs',
      'Postman, Axios',
      'Authentication: OAuth2, SSO, MFA',
      'Directory Services: Active Directory, Kerberos',
    ],
  },
  {
    title: '🗃️ Databases',
    items: ['MongoDB Compass, Firebase', 'RDS (AWS Relational Database Service)'],
  },
  {
    title: '🧪 Testing & CI/CD',
    items: ['Jest + Enzyme', 'Travis CI, CircleCI, GitHub Actions', 'Heroku Deployment'],
  },
  {
    title: ' Network Protocols & Security',
    items: [
      'DNS, HTTP/S, SSL, TCP/IP',
      'OSI Model, VPNs, VLANs, Firewalls',
      'IAM lifecycle tasks, CLI tools: ping, dig, traceroute',
    ],
  },
  {
    title: ' Operating Systems & Scripting',
    items: [
      'UNIX/Linux, Windows Server 2012 R2, MacOS',
      'Bash scripting for automation',
      'SSH for secure remote access',
    ],
  },
  {
    title: ' Support Tools & Collaboration',
    items: [
      'Git, GitHub, Agile/Scrum',
      'Jira, Slack, Notion, ClickUp',
      'TeamViewer, AnyDesk',
    ],
  },
  {
    title: ' Monitoring & Incident Handling',
    items: [
      'ITIL workflows, ticketing, escalation',
      'Root Cause Analysis, Preventive Maintenance',
      'Capacity Monitoring, Log Analysis',
    ],
  },
  {
    title: ' Bonus Skills',
    items: [
      'Stripe integration for payments',
      'UI/UX prototyping and layout restoration',
      'Customer communication and documentation',
      'Cross-functional stakeholder engagement',
      'Cryptography basics and cipher key concepts',
    ],
  },
];

const Skills = () => {
  return (
    <Box py={8} px={4} bg="gray.50">
      <Box maxW="1200px" mx="auto">
        <Heading size="lg" mb={6} textAlign="center">Technical Skills</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {skills.map((skill, index) => (
            <Box
              key={index}
              p={5}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.03)', boxShadow: 'xl', bg: 'gray.100' }}
            >
              <Heading size="sm" mb={3}>{skill.title}</Heading>
              <List spacing={2} fontSize="sm" color="gray.700">
                {skill.items.map((item, i) => (
                  <ListItem key={i}>• {item}</ListItem>
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
