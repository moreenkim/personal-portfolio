import { Box, Heading, Text, SimpleGrid, List, ListItem, Button, Link } from '@chakra-ui/react';

const projects = [
  {
    title: 'AWS Support Lab: S3 Bucket Setup',
    tech: ['AWS', 'S3', 'IAM', 'Linux CLI'],
    summary: 'Created and secured an S3 bucket with public access blocked, lifecycle rules, and IAM policies.',
    link: '/projects/aws-s3-bucket', // Add link 
  },
  {
    title: 'Hosted Static Website on S3',
    tech: ['AWS', 'S3', 'Route 53', 'CloudFront'],
    summary: 'Deployed a static website using S3 hosting, configured DNS with Route 53, and optimized delivery with CloudFront.',
    link: '/projects/aws-static-site', //  Add link 
  },
  {
    title: 'Created Custom VPC for EC2 Instances',
    tech: ['AWS', 'VPC', 'EC2', 'Subnets', 'Security Groups'],
    summary: 'Built a custom VPC with public/private subnets, launched EC2 instances, and configured security groups and routing tables.',
    link: '/projects/aws-vpc-setup', // Add  link 
  },
  {
    title: 'CloudWatch Monitoring & Alerts',
    tech: ['AWS', 'CloudWatch', 'EC2', 'Lambda'],
    summary: 'Set up CloudWatch dashboards, created alarms for EC2 metrics, and tested Lambda-triggered notifications.',
    link: '/projects/aws-cloudwatch', // Add link 
  },
  {
    title: 'Africa Sokoni Platform',
    tech: ['React', 'Redux', 'Node.js', 'Stripe'],
    summary: 'Contributed to frontend and backend development of an e-commerce platform with payment integration.',
    link: '/projects/africa-sokoni', // Add link 
  },
  {
    title: 'Freelance Full-Stack Projects',
    tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Heroku'],
    summary: 'Built and deployed client-facing apps with Stripe payments, CI/CD pipelines, and responsive design.',
    link: '/projects/freelance-stack', // Add link 
  }
];

const Projects = () => {
  return (
    <Box py={8} px={4} bg="gray.50">
      <Box maxW="1200px" mx="auto">
        <Heading size="lg" mb={6} textAlign="center">Projects</Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          {projects.map((project, index) => (
            <Box
              key={index}
              p={5}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.02)', boxShadow: 'xl', bg: 'gray.100' }}
            >
              <Heading size="sm" mb={2}>{project.title}</Heading>
              <Text fontSize="xs" color="gray.500" mb={2}>
                {project.tech.join(', ')}
              </Text>
              <Text fontSize="sm" color="gray.700" mb={4}>{project.summary}</Text>
              {/*  Add link to project details  */}
              <Link href={project.link}>
                <Button size="sm" colorScheme="blue">View Project</Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Projects;
