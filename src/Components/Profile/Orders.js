import { Box, ScrollView, HStack, Text, Button, Pressable } from 'native-base'
import React from 'react'
import Colors from '../../Colors/colors';

const Orders = () => {
  return (
    <Box h="full" pt={5}>
    <ScrollView showVerticalScrollIndicator={false}>
    {/* Paid Order */}
      <Pressable>
        <HStack space={4} px={2} py={5} justifyContent="space-between" alignItems="center" bg={Colors.secondary}>
            <Text fontSize={9} isTruncated color={Colors.primary}>121545451512154512154</Text>
            <Text fontSize={9} isTruncated bold color={Colors.black}>PAID</Text>
            <Text fontSize={9} isTruncated italic color={Colors.black}>Dec 2, 2020</Text>
            <Button bg={Colors.primary} px={7} py={1.5} rounded={50}
            _pressed={{
                bg: Colors.primary,
            }}
            _text={{
                color: Colors.white,
            }}
            >
            $485
            </Button>
        </HStack>
      </Pressable>
    {/* Unpaid order */}
    <Pressable>
        <HStack space={4} px={2} py={5} justifyContent="space-between" alignItems="center" >
            <Text fontSize={9} isTruncated color={Colors.primary}>121545451512154512154</Text>
            <Text fontSize={9} isTruncated bold color={Colors.black}>NOT PAID</Text>
            <Text fontSize={9} isTruncated italic color={Colors.black}>Dec 2, 2021</Text>
            <Button bg={Colors.red} px={7} py={1.5} rounded={50}
            _pressed={{
                bg: Colors.red,
            }}
            _text={{
                color: Colors.white,
            }}
            >
            $48
            </Button>
        </HStack>
      </Pressable>
    </ScrollView>
    </Box>
  )
}

export default Orders