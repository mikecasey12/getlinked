import { Box, Image, Text, Flex, VStack, Link, HStack } from "@chakra-ui/react";
import {
  FaPhoneVolume,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import background from "../assets/backgrounds/bg10.png";
import logo from "../assets/getlinked.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      bgImg={background}
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      px={["10%", "10%", "20%"]}
      pt='70px'
      gap={20}
      pb='41px'
      pos='relative'
      zIndex={2}
    >
      <Flex
        flexDir={["column", "column", "row"]}
        align='start'
        justifyContent='space-between'
        gap={12}
      >
        <Box w={["100%", "408px"]}>
          <Link as={NavLink} to='/ikebude-michael/hackathon/'>
            <Image src={logo} width='143px' mb='6px' />
          </Link>

          <Text fontFamily='Montserrat-Regular' fontSize='12px'>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </Text>
          <HStack mt={["39px", "39px", "74px"]}>
            <Link
              as={NavLink}
              to='#'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
              pr={2}
              borderRight='1px'
              borderRightColor='#D434FE'
            >
              Terms of Use
            </Link>
            <Link
              as={NavLink}
              to='#'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
            >
              Privacy Policy
            </Link>
          </HStack>
        </Box>
        <Box>
          <VStack align='left'>
            <Text
              fontFamily='Montserrat-SemiBold'
              fontSize='14px'
              color='#D434FE'
            >
              Useful Links
            </Text>
            <Link
              as={NavLink}
              to='#overview'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
              mb='6px'
            >
              Overview
            </Link>
            <Link
              as={NavLink}
              to='#timeline'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
              mb='6px'
            >
              Timeline
            </Link>
            <Link
              as={NavLink}
              to='#faq'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
              mb='6px'
            >
              FAQs
            </Link>
            <Link
              as={NavLink}
              to='register'
              fontFamily='Montserrat-Regular'
              fontSize='12px'
              mb='12px'
            >
              Register
            </Link>
            <HStack>
              <Text
                fontFamily='Montserrat-SemiBold'
                fontSize='12px'
                color='#D434FE'
              >
                Follow Us
              </Text>
              <FaInstagram /> <FaXTwitter /> <FaFacebookF /> <FaLinkedinIn />
            </HStack>
          </VStack>
        </Box>
        <Box>
          <VStack align='left'>
            <Text
              fontFamily='Montserrat-SemiBold'
              fontSize='14px'
              color='#D434FE'
            >
              Contact Us
            </Text>
            <HStack align='start'>
              <FaPhoneVolume />
              <Link fontFamily='Montserrat-Regular' fontSize='12px'>
                Overview
              </Link>
            </HStack>
            <HStack align='start' mt='22px'>
              <FaLocationDot />
              <Link fontFamily='Montserrat-Regular' fontSize='12px'>
                27,Alara Street
                <br /> Yaba 100012 <br /> Lagos State
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Flex>
      <Box textAlign='center' pt='53px'>
        <Text fontFamily='Montserrat-Regular' fontSize='12px'>
          All rights reserved. © getlinked Ltd.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
