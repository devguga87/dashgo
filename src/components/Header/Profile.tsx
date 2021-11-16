import { Flex, Box, Text , Avatar} from '@chakra-ui/react'

export function Profile(){
  return(
    <Flex 
    align='center'
  >
    <Box mr='4' textAlign='right'>
      <Text>Gustavo Seabra</Text>
      <Text color='gray.300' fontSize='small'>devguga87@gmail.com</Text>
    </Box>
    <Avatar size='md' name='Gustavo Seabra' src='https://github.com/devguga87.png'/>
  </Flex>  
  )
}