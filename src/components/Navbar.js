import React from 'react';
import './Navbar.css';

import {
  Box,
  Link, HStack
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg="gray.800"
      color="white"
      zIndex="1000"
      px={6}
      py={4}
      boxShadow="md"
    >
      <HStack spacing={6} justify="center">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        {/* <Link href="#console">AWS Console</Link> */}
        <Link href="#contact">Contact</Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
