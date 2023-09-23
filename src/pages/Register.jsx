import { Box, Image } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg12.png";
import image from "../assets/extras-register.png";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  return (
    <Box
      bgImg={background}
      mt='-64px'
      bgPos={[null, "15% 65% ", "55% 25%"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={[null, "5%", "5%"]}
      pt='140px'
      minH={"100vh"}
      display='flex'
      flexDir={["column", "column", "column", "row"]}
      alignItems='center'
      justifyContent={"space-evenly"}
      textAlign={[null, "initial"]}
      gap={[null, 10, 20]}
      pb={[null, "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box>
        <Image src={image} h={[null, "155px", "600px"]} />
      </Box>
      <Box
        px={["5%", "30px", "70px"]}
        py={["55px"]}
        bg={"whiteAlpha.100"}
        borderRadius={"12px"}
        width={["100%", "100%", "90%", "55%"]}
      >
        <RegistrationForm />
      </Box>
    </Box>
  );
};

export default Register;
