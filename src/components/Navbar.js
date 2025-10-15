import React from 'react';
import './Navbar.css';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  Link, HStack
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// const MobileNavBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { t } = useTranslation();

//   const MobileNavBarItems = [
//     { label: `${t("navbar.home")}` },
//     { label: `${t("navbar.about")}`, href: "/about" },
//     { label: `${t("navbar.contact")}`, href: "/contact" },
//     { label: `${t("navbar.blog")}`, href: "/blog" },
//   ];
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
        <Link href="#console">AWS Console</Link>
        <Link href="#contact">Contact</Link>
      </HStack>
    </Box>
  );
};

export default Navbar;


//   return (
//     <Stack as={"nav"} p={4} display={{ md: "none" }}>
//       {MobileNavBarItems.map((item, idx) => {
//         return (
//           <Stack spacing={4} onClick={isOpen ? onClose : onOpen} key={idx}>
//             <Flex py={2} justify={"space-between"} align={"center"}>
//               <a href={item.href ?? "/"}>
//                 <b>{item.label}</b>
//               </a>
//             </Flex>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// };



// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <a href="#home">Home</a>
//       <a href="#about">About</a>
//       <a href="#skills">Skills</a>
//       <a href="#projects">Projects</a>
//       <a href="#console">AWS Console</a>
//       <a href="#contact">Contact</a>
//     </nav>
//   );
// };

// export default Navbar;
