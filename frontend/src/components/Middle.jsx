import {
    Box,
 
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  

  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
         
        </Stack>
      </Box>
    );
  };
  
  export default function GridListWith() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Your Trusted Source for Accurate Forecasts
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Weather is a great metaphor for life - sometimes it's good, sometimes it's bad, and there's nothing much you can do about it but carry an umbrella.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Your Real-Time Weather Companion'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Get up-to-the-minute weather updates and forecasts for any location'
              }
              href={'#'}
            />
            <Card
              heading={'Stay Ahead with Accurate Weather Information'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Stay informed with precise weather data and personalized forecasts tailored to your needs'
              }
              href={'#'}
            />
            <Card
              heading={'Unleash the Power of Weather Insights'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Unlock comprehensive weather insights, historical data, and advanced forecasting tools'
              }
              href={'#'}
            />
            <Card
              heading={'Your All-in-One Weather Solution'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Experience a comprehensive weather app offering detailed forecasts, radar maps, and severe weather alerts'
              }
              href={'#'}
            />
            <Card
              heading={' Empowering Your Everyday Weather Decisions'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Make informed decisions with intelligent weather forecasts, pollen levels, and UV index information'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }