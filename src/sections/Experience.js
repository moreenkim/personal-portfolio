import { Box, Heading, Text, SimpleGrid, List, ListItem } from '@chakra-ui/react';

const experiences = [
  {
    role: 'Cloud Practitioner',
    company: 'AWS re/Start Program',
    dates: 'Current',
    location: 'Nairobi, Kenya',
    details: [
      'Simulated real-world AWS support tickets across EC2, S3, IAM, CloudFront, Route 53, and Lambda',
      'Performed root cause analysis on DNS failures, access errors, and cost optimization issues',
      'Established secure SSH access to EC2 instances for monitoring and troubleshooting',
      'Used Linux CLI tools (ping, dig, traceroute) to resolve latency and DNS resolution problems',
      'Practiced ITIL-style incident handling and customer communication workflows',
      'Currently building Bash scripting proficiency for automation and cloud resource management',
    ],
  },
  {
    role: 'Mid-level Software Developer',
    company: 'Africa Sokoni',
    dates: 'Aug 2022 – Apr 2024',
    location: 'Nairobi, Kenya',
    details: [
      'Developed and maintained React applications with Redux and Chakra UI',
      'Integrated RESTful APIs and improved payment system reliability',
      'Collaborated with cross-functional teams to define and deliver application features',
      'Created internal documentation and knowledge base content for support teams',
      'Led UI/UX improvements and proactively tested production systems for performance',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Africa Sokoni',
    dates: 'May 2021 – Aug 2022',
    location: 'Nairobi, Kenya',
    details: [
      'Built responsive UI components using React, Tailwind, and Bootstrap',
      'Worked closely with department leads to research and implement platform features',
      'Used GitHub for team collaboration and code reviews',
      'Participated in pair programming and sprint-based development',
    ],
  },
  {
    role: 'FullStack Developer (Freelance)',
    company: 'UpWork',
    dates: 'Apr 2020 – Apr 2021',
    location: 'Nairobi, Kenya',
    details: [
      'Built full-stack applications using React, Redux, and Node.js',
      'Wrote unit and integration tests with Jest and Enzyme',
      'Used Travis CI and CircleCI for automated testing and deployment',
      'Integrated Stripe for online payments and deployed projects on Heroku',
    ],
  },
  {
    role: 'ICT Officer',
    company: 'Murban Movers Limited',
    dates: 'Jun 2018 – Mar 2020',
    location: 'Nairobi, Kenya',
    details: [
      'Provided first-line technical support for network, email, and access control issues',
      'Managed PABX installation, email onboarding, and biometric access systems',
      'Monitored server systems, backups, and CCTV functionality',
      'Handled smart office alarm systems and IVMS 4200 system management',
    ],
  },
];

const Experience = () => {
  return (
    <Box py={8} px={4} bg="white">
      <Box maxW="1200px" mx="auto">
        <Heading size="lg" mb={6} textAlign="center">Work Experience</Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              p={5}
              bg="gray.50"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.02)', boxShadow: 'xl', bg: 'white' }}
            >
              <Heading size="sm" mb={1}>{exp.role}</Heading>
              <Text fontSize="sm" color="gray.600" mb={1}>{exp.company}</Text>
              <Text fontSize="xs" color="gray.500" mb={3}>{exp.dates} · {exp.location}</Text>
              <List spacing={2} fontSize="sm" color="gray.700">
                {exp.details.map((item, i) => (
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

export default Experience;
