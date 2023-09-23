import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import {
  PiNumberOneBold,
  PiNumberTwoBold,
  PiNumberThreeBold,
  PiNumberFourBold,
  PiNumberFiveBold,
  PiNumberSixBold,
} from "react-icons/pi";
import background from "../assets/backgrounds/bg6.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineSection.css";

const timelineData = [
  {
    title: "Hackathon Announcement",
    date: "November 18, 2023",
    desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    icon: <PiNumberOneBold />,
  },
  {
    title: "Teams Registration begins",
    date: "November 18, 2023",
    desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    icon: <PiNumberTwoBold />,
  },
  {
    title: "Teams Registration ends",
    date: "November 18, 2023",
    desc: "Interested Participants are no longer Allowed to register",
    icon: <PiNumberThreeBold />,
  },
  {
    title: "Announcement of the accepted teams and ideas",
    date: "November 18, 2023",
    desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    icon: <PiNumberFourBold />,
  },
  {
    title: "Getlinked Hackathon 1.0 Offically Begins",
    date: "November 18, 2023",
    desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    icon: <PiNumberFiveBold />,
  },
  {
    title: "Demo Day",
    date: "November 18, 2023",
    desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    icon: <PiNumberSixBold />,
  },
];

const TimelineSection = () => {
  const iconStyle = {
    background:
      "linear-gradient(to left, #903aff, #bb2eed, #d826db, #ee28c9, #fe34b9)",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "none",
  };
  const contentStyle = {
    background: "transparent",
  };
  const arrowStyle = {
    display: "none",
  };
  return (
    <Box
      bgImg={background}
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      px={["10%", "10%", "5%"]}
      pt='64px'
      alignItems='center'
      gap={20}
      pb='78px'
      pos='relative'
      zIndex={2}
      id='timeline'
    >
      <Flex align={["center"]} textAlign={["center"]} flexDir={"column"} mb={4}>
        <Heading
          as='h2'
          fontSize={["20px", "20px", "32px"]}
          fontFamily='ClashDisplay-Bold'
          mb='16px'
        >
          Timeline
        </Heading>
        <Text
          fontFamily='Montserrat-Regular'
          fontSize={["13px", "13px", "14px"]}
          mb='22px'
          w={["80%", "80%", "40%"]}
        >
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </Text>
      </Flex>
      <VerticalTimeline lineColor='#D434FE'>
        {timelineData.map((timeline, index) => {
          return (
            <VerticalTimelineElement
              icon={timeline.icon}
              key={index}
              date={timeline.date}
              dateClassName='date'
              iconStyle={iconStyle}
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
            >
              <Heading
                as='h3'
                color='#D434FE'
                mt={["-15px"]}
                fontSize={["14px", "14px", "24px"]}
              >
                {timeline.title}
              </Heading>
              <Text color='white' fontSize={["16px"]}>
                {timeline.desc}
              </Text>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default TimelineSection;
