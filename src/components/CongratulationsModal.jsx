import {
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import congratImg from "../assets/extras-congratulation.png";
import wink from "../assets/extras-wink.png";
import PropTypes from "prop-types";

const CongratulationsModal = (props) => {
  const { onClose, onReset } = props;
  const actionsHandler = () => {
    onReset();
    onClose();
  };
  return (
    <>
      <ModalOverlay bg='blackAlpha.800' />
      <ModalContent
        bg={["transparent"]}
        border={["1px"]}
        borderColor='#D434FE'
        p={["54px"]}
        w={["70%"]}
      >
        <ModalBody textAlign={["center"]} bg={["transparent"]}>
          <VStack align={["center"]}>
            <Image src={congratImg} w={["475px"]} />
            <Heading
              as='h2'
              fontFamily='Montserrat-SemiBold'
              fontSize={[null, "16px", "32px"]}
            >
              Congratulations
              <br /> you have successfully Registered!
            </Heading>
            <HStack>
              <Text
                fontFamily='Montserrat-Regular'
                fontSize={[null, "12px", "14px"]}
              >
                Yes, it was easy and you did it! check your mail box for next
                step
              </Text>
              <Image src={wink} h={["20px"]} />
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={actionsHandler}
            h={[null, "46px", "53px"]}
            w='100%'
            sx={{
              bg: "linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9);",
              borderRadius: "4px",
            }}
          >
            Back
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

CongratulationsModal.propTypes = {
  onClose: PropTypes.func,
  onReset: PropTypes.func,
};

export default CongratulationsModal;
