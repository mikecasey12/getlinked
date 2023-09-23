import { Box, Image, Heading, Text } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg8.png";
import partner from "../assets/extras-partner.png";

const PartnerSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      px={["5%"]}
      pt='144px'
      display='flex'
      flexDir='column'
      alignItems='center'
      gap={20}
      pb='128px'
      pos='relative'
      zIndex={2}
    >
      <Box w={["100%", "447px"]} textAlign='center'>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Partners and Sponsors
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
        >{`Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors`}</Text>
      </Box>
      <Image src={partner} w='100%' />
    </Box>
  );
};

export default PartnerSection;
