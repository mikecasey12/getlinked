import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import background from "../assets/backgrounds/bg11.png";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box
      bgImg={background}
      mt='-64px'
      bgPos={["65% 50%", "65% 50%", "55% 25%"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["10%", "5%", "5%"]}
      pt='140px'
      minH={"100vh"}
      alignItems={"center"}
      display='flex'
      flexDir={["column", "column", "row"]}
      justifyContent={"space-evenly"}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box display={["none", "none", "none", "initial", "initial", "initial"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          color={"#D434FE"}
        >
          Get in touch
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "16px"]}
          mb='22px'
        >
          Contact
          <br />
          Information
        </Text>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "16px"]}
          mb='22px'
        >
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </Text>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "16px"]}
          mb='22px'
        >
          Call Us : 07067981819
        </Text>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "16px"]}
          mb='22px'
        >
          we are open from Monday-Friday 08:00am - 05:00pm
        </Text>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "16px"]}
          mb='22px'
          color={"#D434FE"}
        >
          Share on
        </Text>
        <HStack spacing={4}>
          <FaInstagram /> <FaXTwitter /> <FaFacebookF /> <FaLinkedinIn />
        </HStack>
      </Box>
      <Box
        px={["20px", "20px", "70px"]}
        py={["20px", "20px", "55px"]}
        bg={[
          null,
          "",
          "",
          "whiteAlpha.100",
          "whiteAlpha.100",
          "whiteAlpha.100",
        ]}
        borderRadius={["12px"]}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
