import { Box, Image, Heading, Text } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg3.png";
import rules from "../assets/extras-rules.png";

const RulesSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos={["40% 5%", "40% 5%", "center"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      display='flex'
      flexDir={["column", "column", "row-reverse"]}
      alignItems='center'
      textAlign={["center", "center", "initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image src={rules} w={["100%", "100%", "664px"]} />
      </Box>

      <Box ml={[0, 0, 20]} w={["100%", "100%", "50%"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Rules and
          <br />
          <span style={{ color: "#D434FE" }}>Guidelines</span>
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
        >{`Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!`}</Text>
      </Box>
    </Box>
  );
};

export default RulesSection;
