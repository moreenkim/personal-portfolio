import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

const screenshots = [
  { src: '/images/ec2.png', title: 'EC2 Setup' },
  { src: '/images/s3.png', title: 'S3 Bucket' },
  { src: '/images/iam.png', title: 'IAM Roles' },
  { src: '/images/cloudfront.png', title: 'CloudFront' },
];

const ConsoleGallery = () => {
  return (
    <Box py={6} px={4} bg="gray.50">
      <Box maxW="800px" mx="auto">
        <Heading size="md" mb={3}>AWS Console Gallery</Heading>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          {screenshots.map((shot, index) => (
            <Box key={index}>
              <Image src={shot.src} alt={shot.title} borderRadius="md" />
              <Text mt={1} fontSize="sm" fontWeight="medium">{shot.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ConsoleGallery;
