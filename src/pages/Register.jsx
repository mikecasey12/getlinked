import { Box, Image } from "@chakra-ui/react";
import background from "../assets/backgrounds/bg12.png";
import image from "../assets/extras-register.png";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  return (
    <Box
      bgImg={background}
      mt='-64px'
      bgPos={["15% 65%", "15% 65%", "55% 25%"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["5%"]}
      pt='140px'
      minH={"100vh"}
      display='flex'
      flexDir={["column", "column", "column", "row"]}
      alignItems='center'
      justifyContent={"space-evenly"}
      textAlign={["initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image src={image} h={["100%"]} />
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
