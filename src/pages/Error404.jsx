import { Box, Heading, Button, AbsoluteCenter, HStack } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg4.png";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const onRefresh = () => {
    location.reload();
  };
  const onGoHome = () => {
    navigate("/ikebude-michael/hackathon/");
  };
  return (
    <Box
      bgImg={background}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["5%"]}
      minH={"100vh"}
      textAlign={"center"}
      pos={"relative"}
    >
      <AbsoluteCenter>
        <Heading
          as='h2'
          fontSize={["2.5rem", "2.5rem", "4rem"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Error!
          <br />
          <span style={{ color: "#D434FE" }}>Resource not found</span>
        </Heading>
        <HStack spacing={8}>
          <Button
            h={["46px", "46px", "53px"]}
            w={["152px", "152px", "172px"]}
            bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
            borderRadius='4px'
            onClick={onRefresh}
          >
            Try Again
          </Button>
          <Button
            h={["46px", "46px", "53px"]}
            w={["152px", "152px", "172px"]}
            bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
            borderRadius='4px'
            onClick={onGoHome}
          >
            Go Home
          </Button>
        </HStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Error404;
