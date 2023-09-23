import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import heroBg from "../assets/backgrounds/hero-bg.png";
import model from "../assets/model2.png";
import extras from "../assets/extras-1.png";
import extrascreative from "../assets/extras-creative.png";
import line from "../assets/extras-line.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate("register");
  };
  return (
    <Box
      mt='-64px'
      h={["900px", "920px", "100%"]}
      bgImg={heroBg}
      bgPos={["left center", "left center", "left"]}
      bgSize='cover'
      bgRepeat='no-repeat'
      py={["48px", "48px", "64px"]}
      textAlign={["center", "center", "left"]}
    >
      <Flex
        align={["end"]}
        flexDir={"column"}
        justifyContent={["end"]}
        pr={["5%"]}
        mb={["-40px", "-80px", "-120px"]}
      >
        <Heading
          as='h2'
          textAlign={["center", "center", "right"]}
          fontSize={["0.8rem", "1rem", "1.5rem", "1.85rem", "2.25rem"]}
          mt={[8, "32px", "54px"]}
        >
          <em>Igniting a Revolution in HR Innovation</em>
        </Heading>
        <Box width={["20%"]}>
          <Image src={line} />
        </Box>
      </Flex>
      <Box
        display={["initial", "initial", "flex"]}
        alignItems={"center"}
        flexDir={["column", "column", "row"]}
      >
        <Box width={["100%", "100%", "50%"]} pl={["5%"]} py={["0", "10%"]}>
          <Box>
            <HStack justifyContent={["center", "center", "initial"]}>
              <Heading
                as='h2'
                pt={["80px"]}
                fontFamily='ClashDisplay-Bold'
                fontSize={[
                  "2rem",
                  "2.5rem",
                  "2rem",
                  "2.5rem",
                  "3rem",
                  "4.7rem",
                ]}
                textAlign={["center", "center", "left"]}
              >
                getlinkedTech
              </Heading>
              <Box
                w={["10%"]}
                mb={["0", "-30px", "-20px", "0px", "20px", "40px"]}
              >
                <Image
                  src={extrascreative}
                  w={["18px", "20px", "20px", "35px", "53px"]}
                  ml={["-40px", "-45px", "-40px", "-50px", "-65px", "-85px"]}
                />
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack justifyContent={["center", "center", "initial"]}>
              <Heading
                as='h2'
                fontFamily='ClashDisplay-Bold'
                fontSize={[
                  "2rem",
                  "2.5rem",
                  "2rem",
                  "2.5rem",
                  "3rem",
                  "4.7rem",
                ]}
              >
                Hackathon <span style={{ color: "#D434FE" }}>1.0</span>
              </Heading>
              <Image src={extras} height={["32px", "32px", "50px"]} />
            </HStack>
          </Box>
          <Text
            mt='8px'
            mb='41px'
            fontSize={[13, 13, 13, 16, 20]}
            fontFamily='Montserrat-Regular'
          >
            Participate in getlinked tech Hackathon 2023 stand
            <br /> a chance to win a Big prize
          </Text>
          <Button
            className='primary-btn'
            h={["46px", "46px", "53px"]}
            w={["152px", "152px", "172px"]}
            sx={{
              bg: "linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9);",
              borderRadius: "4px",
            }}
            onClick={onClickRegister}
          >
            Register
          </Button>
          <Heading
            mt={["10px", "10px", "77px"]}
            as='h2'
            fontFamily='UnicaOne-Regular'
            fontSize={["3rem", "3rem", "3rem", "3.5rem", "4rem"]}
          >
            00
            <span
              style={{
                fontSize: "14px",
                fontFamily: "Montserrat-Regular",
                marginRight: "20px",
              }}
            >
              H
            </span>
            00
            <span
              style={{
                fontSize: "14px",
                fontFamily: "Montserrat-Regular",
                marginRight: "20px",
              }}
            >
              M
            </span>
            00
            <span
              style={{ fontSize: "14px", fontFamily: "Montserrat-Regular" }}
            >
              S
            </span>
          </Heading>
        </Box>
        <Flex w={["100%", "100%", "50%"]} flexDir={"row"} align={["start"]}>
          <Image
            src={model}
            objectFit='contain'
            width={["100%"]}
            height={[
              "initial",
              "450px",
              "initial",
              "initial",
              "initial",
              "initial",
            ]}
            mt={["-60px", "-120px", "initial", "initial", "initial", "initial"]}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
