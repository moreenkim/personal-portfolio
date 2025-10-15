import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

const screenshots = [
  { src: '/images/ec2.png', title: 'EC2 Setup' },
  { src: '/images/s3.png', title: 'S3 Bucket' },
  { src: '/images/iam.png', title: 'IAM Roles' },
  { src: '/images/cloudfront.png', title: 'CloudFront' },
];

const ConsoleGallery = () => {
  return (
    <Box minH="80vh" py={8} px={6} bg="gray.50">
      <Box maxW="1000px" mx="auto">
        <Heading size="lg" mb={4}>AWS Console Gallery</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {screenshots.map((shot, index) => (
            <Box key={index}>
              <Image src={shot.src} alt={shot.title} borderRadius="md" />
              <Text mt={2} fontWeight="medium">{shot.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ConsoleGallery;
