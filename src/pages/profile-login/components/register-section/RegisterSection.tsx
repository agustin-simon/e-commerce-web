import { Box, Flex, FormLabel, Input, Button, Text, useBreakpointValue } from "@chakra-ui/react";

const RegisterSection: React.FC = () => {

    const heightGral = useBreakpointValue({
        base: '100%',
        sm: '80%',
        md: '50%',
        lg: '70%',
    });
    
    return(
        <Flex w={heightGral} flexDirection='column' alignItems='center' justifyContent='center'
            border='1px solid #6b46c12f' p='4' outlineOffset='2px' boxShadow='md'>
            <Box mt='4' w='75%'>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' size='md'
                    borderRadius='0px' _focus={{'border':'0px'}} _active={{'border':'0px'}}/>
            </Box>
            <Box mt='4' w='75%'>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type='password' size='md' borderRadius='0px' _focus={{'border':'0px'}} _active={{'border':'0px'}}/>
            </Box>
            <Text p='4' w='80%' textAlign='left' fontSize='md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam sed consequat ante, et sagittis.
            </Text>    

            <Button borderRadius='none' bg='purple.600' color='white' _hover={{'backgroundColor':'purple.600'}} minW='100px'>Register</Button>
        </Flex>
    )
};

export default RegisterSection;