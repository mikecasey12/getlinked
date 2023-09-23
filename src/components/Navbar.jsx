import {
  Box,
  Image,
  HStack,
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/getlinked.png";
import menuBtn from "../assets/menu-btn.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClick = () => {
    onClose();
    navigate("register");
  };

  return (
    <>
      <Box
        h='64px'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        px={["15%", "15%", "5%"]}
        pt={["8", "8", "12"]}
        borderBottom={["1px", "1px", "none"]}
        pb={2}
        borderColor={["gray.700 !important"]}
        pos='relative'
        zIndex={10}
      >
        <Box>
          <Link as={NavLink} to={"/ikebude-michael/hackathon/"}>
            <Image src={logo} width={["4.5rem", "6rem", "171px"]} />
          </Link>
        </Box>
        <Box
          display={["none", "none", "none", "initial", "initial", "initial"]}
        >
          <HStack gap={16} fontSize='16px'>
            <Link as={NavLink} to='/ikebude-michael/hackathon/#timeline'>
              Timeline
            </Link>
            <Link end as={NavLink} to='/ikebude-michael/hackathon/#overview'>
              Overview
            </Link>
            <Link as={NavLink} to='/ikebude-michael/hackathon/#faq'>
              FAQs
            </Link>
            <Link
              as={NavLink}
              style={({ isActive }) => {
                if (isActive) {
                  return {
                    background:
                      "linear-gradient(to right, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                  };
                }
                return null;
              }}
              to='contact'
            >
              Contact
            </Link>
            <Button
              className='primary-btn'
              h={["46px", "46px", "53px"]}
              w={["152px", "152px", "172px"]}
              bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
              borderRadius='4px'
              onClick={onClick}
            >
              Register
            </Button>
          </HStack>
        </Box>
        <Box
          display={["initial", "initial", "initial", "none", "none", "none"]}
        >
          <Image role='button' src={menuBtn} h={"14px"} onClick={onOpen} />
        </Box>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"} placement='top'>
        <DrawerOverlay
          display={["initial", "initial", "initial", "none", "none", "none"]}
        />
        <DrawerContent
          bg={"#150E28"}
          px={"5%"}
          h={"min-content"}
          py={["20%"]}
          display={["initial", "initial", "initial", "none", "none", "none"]}
        >
          <DrawerCloseButton
            borderColor={"#D434FE !important"}
            border={"2px"}
            borderRadius={"full"}
            right={["5%"]}
            top={["10%"]}
          />
          <DrawerBody>
            <VStack gap={8} fontSize='16px' align={"start"}>
              <Link
                as={NavLink}
                to='/ikebude-michael/hackathon/#timeline'
                onClick={onClose}
              >
                Timeline
              </Link>
              <Link
                as={NavLink}
                to='/ikebude-michael/hackathon/#overview'
                onClick={onClose}
              >
                Overview
              </Link>
              <Link
                as={NavLink}
                to='/ikebude-michael/hackathon/#faq'
                onClick={onClose}
              >
                FAQs
              </Link>
              <Link
                onClick={onClose}
                as={NavLink}
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      background:
                        "linear-gradient(to right, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    };
                  }
                  return null;
                }}
                to='contact'
              >
                Contact
              </Link>
              <Button
                className='primary-btn'
                h={["46px", "46px", "53px"]}
                w={["152px", "152px", "172px"]}
                bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
                borderRadius='4px'
                onClick={onClick}
              >
                Register
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
