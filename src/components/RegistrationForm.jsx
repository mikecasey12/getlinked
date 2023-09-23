import {
  Input,
  VStack,
  Select,
  Heading,
  Button,
  Box,
  Text,
  HStack,
  Checkbox,
  Image,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import getCategoriesUtil from "../util/categories-util";
import registrationUtil from "../util/register-util";
import { useEffect } from "react";
import movementImg from "../assets/extras-movement.png";
import CongratulationsModal from "./CongratulationsModal";

const RegistrationForm = () => {
  //handles congratulatory popup modal
  const { isOpen, onClose, onOpen } = useDisclosure();

  //retrieves category list from server on component mount
  const { isLoading, isError, data } = useQuery(
    ["categories"],
    getCategoriesUtil,
    { staleTime: 100000 }
  );

  //handles users post request to the server for registration
  const {
    mutate: registerUser,
    status,
    isError: isSubmissionError,
    isLoading: isSubmitting,
    error,
  } = useMutation(registrationUtil);

  //extract returning category list data
  const categories = data?.data;

  //deconstructing form - register ties form input to form state and handlesSubmit retrieves formdata
  const { register, handleSubmit, formState, reset } = useForm();

  //get errors that occurs while filling the form
  const { errors } = formState;

  //Show a successful modal
  useEffect(() => {
    if (status === "success") {
      onOpen();
    }
  }, [status, onOpen]);

  //reset form back to defaultValues
  const onReset = () => {
    reset();
  };

  //Submit filled form
  const onSubmit = (formdata) => {
    const userdata = {
      email: formdata.email,
      phone_number: formdata.phonenumber,
      team_name: formdata.teamname,
      group_size: Number(formdata.groupsize),
      project_topic: formdata.projecttopic,
      category: Number(formdata.category),
      privacy_poclicy_accepted: formdata.agreement,
    };

    //handles form data and sends info to the registration api using the useMutation hook
    registerUser(userdata);
  };

  return (
    <>
      <VStack align={"left"}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='10px'
          color={"#D434FE"}
        >
          Register
        </Heading>
        <HStack align='center'>
          <Text
            fontFamily='Montserrat-Regular'
            fontSize={["12px", "12px", "14px"]}
            mb={1}
          >
            Be a part of this movement:
          </Text>
          <Image src={movementImg} w={["100px"]} mt={["-20px"]} />
        </HStack>

        <Heading
          as='h2'
          fontSize={["18px", "18px", "24px"]}
          fontFamily='Montserrat-Regular'
          mb={2}
        >
          CREATE YOUR ACCOUNT
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack gap={6} align={["left"]}>
            <HStack
              w={"100%"}
              gap={6}
              align='start'
              flexDir={[null, "column", "row"]}
            >
              <Box w={"100%"}>
                <Text
                  mb={1}
                  fontSize={["13px", "13px", "14px"]}
                >{`Teams's Name`}</Text>
                <Input
                  isInvalid={errors.teamname?.message ? true : false}
                  placeholder='Enter the name of your group'
                  size='lg'
                  border={"1px"}
                  id='teamname'
                  {...register("teamname", {
                    required: { value: true, message: "Team name is required" },
                  })}
                />
                <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                  {errors.teamname?.message}
                </Text>
              </Box>
              <Box w={"100%"}>
                <Text mb={1} fontSize={["13px", "13px", "14px"]}>
                  Phone
                </Text>
                <Input
                  isInvalid={errors.phonenumber?.message ? true : false}
                  placeholder='Enter your phone number'
                  size='lg'
                  border={"1px"}
                  type='tel'
                  id='phonenumber'
                  {...register("phonenumber", {
                    required: { value: true, message: "Phone number is empty" },
                  })}
                />
                <Text mt={1} color='red' fontSize={[null, "13px", "14px"]}>
                  {errors.phonenumber?.message}
                </Text>
              </Box>
            </HStack>
            <HStack
              w={"100%"}
              gap={6}
              align='start'
              flexDir={[null, "column", "row"]}
            >
              <Box w={"100%"}>
                <Text mb={1} fontSize={["13px", "13px", "14px"]}>
                  Email
                </Text>
                <Input
                  isInvalid={errors.email?.message ? true : false}
                  placeholder='Enter your email address'
                  size='lg'
                  border={"1px"}
                  type='email'
                  id='email'
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                  {errors.email?.message}
                </Text>
              </Box>
              <Box w={"100%"}>
                <Text mb={1} fontSize={["13px", "13px", "14px"]}>
                  Project Topic
                </Text>
                <Input
                  isInvalid={errors.projecttopic?.message ? true : false}
                  placeholder='What is your group project topic'
                  size='lg'
                  border={"1px"}
                  id='projecttopic'
                  {...register("projecttopic", {
                    required: {
                      value: true,
                      message: "Project Topic is required",
                    },
                  })}
                />
                <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                  {errors.projecttopic?.message}
                </Text>
              </Box>
            </HStack>
            <HStack width={"100%"} gap={6} align='start'>
              <Box w={[null, "250%", "100%"]}>
                <Text mb={1} fontSize={["13px", "13px", "14px"]}>
                  Category
                </Text>
                <Select
                  isInvalid={errors.category?.message ? true : false}
                  isDisabled={isLoading}
                  placeholder={
                    isLoading
                      ? "Loading..."
                      : isError
                      ? "Couldn't get data"
                      : "Select your category"
                  }
                  size='lg'
                  border={"1px"}
                  id='category'
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Please select a category",
                    },
                  })}
                >
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
                <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                  {errors.category?.message}
                </Text>
              </Box>
              <Box w={"100%"}>
                <Text mb={1} fontSize={["13px", "13px", "14px"]}>
                  Group Size
                </Text>
                <Select
                  isInvalid={errors.groupsize?.message ? true : false}
                  placeholder='Select'
                  size='lg'
                  border={"1px"}
                  id='groupsize'
                  {...register("groupsize", {
                    required: {
                      value: true,
                      message: "Please select a group size",
                    },
                  })}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </Select>
                <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                  {errors.groupsize?.message}
                </Text>
              </Box>
            </HStack>
            <Text textAlign='left' fontSize='12px' color='#D434FE'>
              <em>Please review your registration details before submitting</em>
            </Text>
            <Checkbox
              isInvalid={errors.agreement?.message ? true : false}
              colorScheme='purple'
              fontSize='12px'
              {...register("agreement", {
                required: { value: true, message: "Please agree to terms" },
              })}
            >
              I agreed with the event terms and conditions and privacy policy
            </Checkbox>
            <Text color='red' fontSize={["13px", "13px", "14px"]}>
              {errors.agreement?.message}
            </Text>
          </VStack>
          <Box textAlign={"center"} mt={6}>
            <Button
              className='primary-btn'
              isLoading={isSubmitting}
              loadingText='Submitting'
              type='submit'
              h={["46px", "46px", "53px"]}
              w={["100%"]}
              bg='linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)'
              borderRadius='4px'
            >
              Register
            </Button>
            {isSubmissionError && (
              <Text mt={1} color='red' fontSize={["13px", "13px", "14px"]}>
                {error?.response?.data?.email}
              </Text>
            )}
          </Box>
        </form>
      </VStack>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={["4xl"]}>
        <CongratulationsModal onClose={onClose} onReset={onReset} />
      </Modal>
    </>
  );
};

export default RegistrationForm;
