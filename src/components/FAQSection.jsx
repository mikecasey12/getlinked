import {
  Box,
  Image,
  Heading,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import background from "../assets/backgrounds/bg5.png";
import faqs from "../assets/extras-faqs.png";
import { FaMinus, FaPlus } from "react-icons/fa6";

const contents = [
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What happens if I need help during the hackathon?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: `What happens if I don't have an idea for a project?`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Can I join a team or do I have to come with one?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What happens after the hackathon ends?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const FAQSection = () => {
  return (
    <Box
      bgImg={background}
      bgPos={["65% 50%", "65% 50%", "center"]}
      bgSize={"cover"}
      bgRepeat='no-repeat'
      px={["5%"]}
      pt='64px'
      display='flex'
      flexDir={["column-reverse", "column-reverse", "row-reverse"]}
      alignItems='center'
      textAlign={["center", "center", "initial"]}
      gap={[10, 10, 20]}
      pb={["55px", "55px", "78px"]}
      pos='relative'
      zIndex={2}
      id='faq'
    >
      <Box w={["100%", "100%", "50%"]}>
        <Image src={faqs} w={["100%"]} />
      </Box>

      <Box w={["100%", "100%", "50%"]}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Frequently Asked
          <br />
          <span style={{ color: "#D434FE" }}>Questions</span>
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
          mb={["27px", "27px", "50px"]}
        >
          {`We got answers to the questions that you might
want to ask about `}
          <span
            style={{
              fontFamily: "Montserrat-Bold",
            }}
          >
            getlinked Hackathon 1.0
          </span>
        </Text>
        {contents.map((content, index) => (
          <Accordion key={index} allowMultiple mt={"18px"}>
            <AccordionItem borderTop='0' borderColor='#D434FE'>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left' fontSize='14px'>
                        {content.title}
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize='12px' color='#D434FE' />
                      ) : (
                        <FaPlus fontSize='12px' color='#D434FE' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{content.content}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
