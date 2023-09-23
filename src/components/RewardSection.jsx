import { Box, Image, Heading, Text, HStack } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg7.png";
import award from "../assets/extras-award.png";
import reward from "../assets/extras-rewards.png";

const RewardSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos={["65% 50%", "65% 50%", "center"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      textAlign={["center", "center", "initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <HStack mb='83px' justify={"end"}>
        <Box>
          <Heading
            as='h2'
            fontSize={["20px", "20px", "32px"]}
            fontFamily='ClashDisplay-Bold'
            mb='16px'
          >
            Prizes and
            <br />
            <span style={{ color: "#D434FE" }}>Rewards</span>
          </Heading>
          <Text
            fontFamily='Montserrat-Regular'
            fontSize={["13px", "13px", "14px"]}
          >{`Highlight of the prizes or rewards for winners and
for participants.
`}</Text>
        </Box>
      </HStack>
      <Box
        display='flex'
        gap={16}
        flexDir={["column", "column", "row"]}
        alignItems={[null, "center", null]}
        justifyContent={[null, null, "space-between"]}
      >
        <Box w={["100%", "100%", "50%"]}>
          <Image mt='20px' src={award} w={["100%"]} />
        </Box>
        <Box w={["100%", "100%", "50%"]}>
          <Image src={reward} h={["100%"]} />
        </Box>
      </Box>
    </Box>
  );
};

export default RewardSection;
