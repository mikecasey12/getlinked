import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg4.png";
import criteria from "../assets/extras-criteria.png";

const CriteriaSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos={["65% 50%", "65% 50%", "center"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      display='flex'
      flexDir={["column", "column", "row"]}
      alignItems='center'
      textAlign={["center", "center", "initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image ml={[0, 0, 10]} src={criteria} w={["100%"]} />
      </Box>

      <Box w={["100%", "100%", "50%"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Judging Criteria
          <br />
          <span style={{ color: "#D434FE" }}>Key attributes</span>
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
          mb='22px'
        >
          <span
            style={{
              color: "#D434FE",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Innovation and Creativity:
          </span>
          {` Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.`}
        </Text>
        <Text fontFamily='Montserrat-Regular' fontSize='14px' mb='22px'>
          <span
            style={{
              color: "#D434FE",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Functionality:
          </span>
          {` Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.`}
        </Text>
        <Text fontFamily='Montserrat-Regular' fontSize='14px' mb='22px'>
          <span
            style={{
              color: "#D434FE",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Impact and Relevance:
          </span>
          {`  Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.`}
        </Text>
        <Text fontFamily='Montserrat-Regular' fontSize='14px' mb='22px'>
          <span
            style={{
              color: "#D434FE",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Technical Complexity:
          </span>
          {`  Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.`}
        </Text>
        <Text fontFamily='Montserrat-Regular' fontSize='14px' mb='55px'>
          <span
            style={{
              color: "#D434FE",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Adherence to Hackathon Rules:
          </span>
          {` Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.`}
        </Text>
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
  );
};

export default CriteriaSection;
