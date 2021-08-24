import { VStack, Box, Heading, Button, Text } from '@chakra-ui/react';

export function HomeInfo() {
  return (
    <VStack
      align="flex-start"
      maxW={{ base: '360px', '2xl': '470px' }}
      spacing="5"
      mb="20"
    >
      <Box>
        <Text
          fontSize={{ base: 'lg', '2xl': 'xl' }}
          fontWeight="light"
          textTransform="uppercase"
        >
          Desenvolvedor full-stack web
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: '5xl', '2xl': '7xl' }}
          fontWeight="semibold"
        >
          <Text display="inline" color="red.700">
            G
          </Text>
          abriel Souza
        </Heading>
        <Text fontSize={{ base: 'lg', '2xl': '2xl' }}>
          Apaixonado pelo impacto que a programação causa no mundo e motivado
          por novos desafios.
        </Text>
      </Box>
      <Button
        bg="transparent"
        border="3px solid"
        borderColor="red.700"
        textTransform="uppercase"
        fontWeight="semibold"
        fontSize={{ base: 'lg', '2xl': 'xl' }}
        px="10"
        py="6"
        transition="filter 0.2s"
        _hover={{ bg: 'transparent', filter: 'brightness(80%)' }}
      >
        Baixar currículo
      </Button>
    </VStack>
  );
}
