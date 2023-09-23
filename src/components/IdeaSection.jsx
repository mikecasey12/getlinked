import { Box, Image, Heading, Text } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg2.png";
import idea from "../assets/idea.png";

const IdeaSection = () => {
  return (
    <Box
      bgImg={background}
      mt={["-64px"]}
      bgPos={["center"]}
      bgSize='cover'
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      display='flex'
      flexDir={["column", "column", "row"]}
      alignItems='center'
      textAlign={["center", "center", "initial"]}
      gap={20}
      pb='78px'
      pos='relative'
      zIndex={2}
      id='overview'
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image src={idea} w={["100%"]} />
      </Box>

      <Box w={["100%", "100%", "50%"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Introduction to getlinked
          <br />
          <span style={{ color: "#D434FE" }}>tech Hackathon 1.0</span>
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

export default IdeaSection;
