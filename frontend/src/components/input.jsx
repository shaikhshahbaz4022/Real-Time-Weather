import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Avatar,
  Box,
  Center,
  Text,
  Stack,


  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2'
export default function InputBox() {

  const [Image, setImage] = useState("")
  const [Temp, setTemp] = useState("")
  const [inputval, setinputval] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")
  const [Desc, setDesc] = useState("")
  const [Humidity, setHumidity] = useState("")
  const [Time, setTime] = useState("")
  const token = localStorage.getItem("token")

  const showele = document.getElementById("show")
  function Handlesubmit() {
    if (token) {
      fetch(`http://localhost:8080/city?city=${inputval}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          setinputval("")

          console.log(data.current.condition.icon);
          setImage(data.current.condition.icon)
          setTemp(data.current.temp_c)
          setDesc(data.current.condition.text)
          setCity(data.location.name)
          setState(data.location.region)
          setTime(data.location.localtime)
          setHumidity(data.current.humidity)


        })
        .catch((err) => {
          console.log(err)
        })
      showele.style.display = "block"
    } else {
      Swal.fire({
        title: 'Kindly Login First',
        text: 'Login To Enjoy Weather',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

  }
  return (
    <Flex
      flexDirection={'column'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >

      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter your location to check the weather
        </Heading>

        <FormControl id="email">
          <Input
            value={inputval}
            onChange={(e) => setinputval(e.target.value)}
            placeholder="Enter your location to check the weather"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={Handlesubmit}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>

      <Center py={6}>
        <Box
          id='show'
          display={"none"}
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              Image
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {Temp}°
          </Heading>
          <Text fontWeight={600} fontSize={'xl'} color={'black.500'} mb={4}>
            {City} {State}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Weather : {Desc}


          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            TimeZone : {Time.toString()}
          
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
             Humidity : {Humidity}
          </Text>


          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>



          </Stack>

      
        </Box>
      </Center>
    </Flex>

  );
}