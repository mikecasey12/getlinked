import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import background from "../assets/backgrounds/bg9.png";
import policy from "../assets/extras-policy.png";

const PrivacyTermsSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos={["65%", "65%", "center"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      display='flex'
      flexDir={["column-reverse", "column-reverse", "row-reverse"]}
      alignItems='center'
      textAlign={["center", "center", "initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image src={policy} h={["100%"]} />
      </Box>
      <Box w={["100%", "100%", "50%"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Privacy Policy and
          <br />
          <span style={{ color: "#D434FE" }}>Terms</span>
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
          mb='30px'
        >{`Last updated on September 12, 2023`}</Text>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
          mb='69px'
        >{`Below are our privacy & policy, which outline a lot of goodies. 
it’s our aim to always take of our participant`}</Text>
        <Box
          border='1px'
          borderColor='#D434FE'
          px={["30px", "30px", "72px"]}
          py={["20px", "20px", "72px"]}
          bg='whiteAlpha.100'
        >
          <Text
            fontFamily='Montserrat-Regular'
            fontSize={["13px", "13px", "14px"]}
            mb='24px'
          >{`At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.`}</Text>
          <Text
            fontFamily='Montserrat-Bold'
            fontSize={["13px", "13px", "14px"]}
            color='#D434FE'
          >{`Licensing Policy`}</Text>
          <Text
            fontFamily='Montserrat-Bold'
            fontSize={["13px", "13px", "14px"]}
          >{`Here are terms of our Standard License:`}</Text>
          <List spacing='18px'>
            <ListItem mt='18px'>
              <ListIcon as={FaCircleCheck} color='green.500' />
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </ListItem>
            <ListItem>
              <ListIcon as={FaCircleCheck} color='green.500' />
              You are licensed to use the item available at any free source
              sites, for your project developement
            </ListItem>
          </List>
          <Box textAlign='center' mt={6}>
            <Button
              className='primary-btn'
              h={["46px", "46px", "53px"]}
              w={["152px", "152px", "172px"]}
              sx={{
                bg: "linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9);",
                borderRadius: "4px",
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyTermsSection;
