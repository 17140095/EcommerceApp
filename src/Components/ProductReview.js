import {
  View,
  Heading,
  Box,
  Text,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import { useState } from "react";

import Colors from "../Colors/colors";
import ProductRating from "./ProductRating";
import Message from "./Notifications/Message";
import ButtonCustom from "./Button";

export default function ProductReview() {
  const [ratings, setRatings] = useState("0");
  console.log(ratings);
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
      </Heading>
      {/* <Message
        color={Colors.black}
        bg={Colors.secondary}
        size={12}
        children={"No Review"}
      /> */}
      <Box p={3} bg={Colors.secondary} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          {" "}
          Jhon Doe
        </Heading>
        <ProductRating rating={4.5} />
        <Text my={2} fontSize={11}>
          02,Jan 2021
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={
            "Ea incididunt sit nulla pariatur.Ea incididunt sit nulla pariatur.Ea" +
            "incididunt sit nulla pariatur"
          }
        />
      </Box>
      <Box mt={6}>
        <Heading bold fontSize={15} mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.secondary}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.secondary,
                justifyContent: "center",
                endIcon: <CheckIcon size={5} />,
              }}
              selectedValue={ratings}
              onValueChange={setRatings}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
              <Select.Item label="4 - Very Good" value="4" />
              <Select.Item label="5  - Exceptional" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              placeholder="Write Comment here"
              h={24}
              w="full"
              borderWidth={0}
              py={4}
              bg={Colors.secondary}
              _focus={{
                bg: Colors.secondary,
              }}
            />
          </FormControl>
          <ButtonCustom bg={Colors.primary} color={Colors.secondary}>
            SUBMIT
          </ButtonCustom>
          {/* <Message bg={Colors.black} color={Colors.secondary}>
            Please 'Login' to write a review
          </Message> */}
        </VStack>
      </Box>
    </Box>
  );
}
