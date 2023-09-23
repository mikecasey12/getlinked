import {
  Input,
  VStack,
  Textarea,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import contactUtil from "../util/contact-util";

const ContactForm = () => {
  const { register, formState, handleSubmit, reset } = useForm();
  const {
    mutate: sendMessage,
    isLoading: isSending,
    isError: isSendingError,
    error,
    status,
  } = useMutation(contactUtil);
  const { errors } = formState;

  //send user message
  const onSubmit = (formdata) => {
    const contactinfo = {
      email: formdata.email,
      first_name: formdata.firstname,
      message: formdata.message,
    };
    sendMessage(contactinfo);
  };

  const onBack = () => {
    reset();
    location.reload();
  };
  return (
    <>
      {status === "success" && (
        <Box textAlign={["center"]}>
          <Heading
            as='h2'
            fontSize={[null, "20px", "32px"]}
            fontFamily='ClashDisplay-Bold'
            mb='16px'
            color={"#D434FE"}
          >
            Thank your for contacting us
          </Heading>
          <Button
            className='primary-btn'
            onClick={onBack}
            h={["46px", "46px", "53px"]}
            w={["152px", "152px", "172px"]}
            bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
            borderRadius='4px'
          >
            Back
          </Button>
        </Box>
      )}
      {status !== "success" && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack spacing={8} align={"left"}>
            <Heading
              as='h2'
              fontSize={[null, "20px", "20px"]}
              fontFamily='ClashDisplay-Bold'
              mb='16px'
              color={"#D434FE"}
            >
              Questions of need assistance?
              <br />
              Let us know about it
            </Heading>
            <Text
              fontFamily='Montserrat-Regular'
              fontSize={[null, "12px", "16px"]}
              mb={2}
              display={[null, "initial", "none"]}
            >
              Email us below to any question related to our event
            </Text>
            <Box>
              <Input
                placeholder='First Name'
                isInvalid={errors.firstname?.message ? true : false}
                size='lg'
                border={"1px"}
                id='firstname'
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "First name can't be empty",
                  },
                })}
              />
              <Text mt={1} color='red' fontSize={[null, "13px", "14px"]}>
                {errors.firstname?.message}
              </Text>
            </Box>
            <Box>
              <Input
                isInvalid={errors.email?.message ? true : false}
                placeholder='Mail'
                type='email'
                size='lg'
                border={"1px"}
                id='email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Mail can't be empty",
                  },
                })}
              />
              <Text mt={1} color='red' fontSize={[null, "13px", "14px"]}>
                {errors.email?.message}
              </Text>
            </Box>
            <Box>
              <Textarea
                isInvalid={errors.email?.message ? true : false}
                placeholder='Message'
                border={"1px"}
                id='message'
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message can't be empty",
                  },
                })}
              />
              <Text mt={1} color='red' fontSize={[null, "13px", "14px"]}>
                {errors.message?.message}
              </Text>
            </Box>
            <Box textAlign={"center"}>
              <Button
                className='primary-btn'
                type='submit'
                isLoading={isSending}
                loadingText='Sending message...'
                h={[null, "46px", "53px"]}
                w={[null, "152px", "172px"]}
                sx={{
                  bg: "linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9);",
                  borderRadius: "4px",
                }}
              >
                Submit
              </Button>
              {isSendingError && (
                <Text mt={1} color='red' fontSize={[null, "13px", "14px"]}>
                  {error?.response?.data?.toString()}
                </Text>
              )}
            </Box>
          </VStack>
        </form>
      )}
    </>
  );
};

export default ContactForm;
