import { useState } from "react";
import {
  ScrollView,
  Box,
  Image,
  Heading,
  HStack,
  Spacer,
  Text,
} from "native-base";
import Colors from "../Colors/colors";
import NumericInput from "react-native-numeric-input";
import ButtonCustom from "../Components/Button";
import ProductRating from "../Components/ProductRating";
import ProductReview from "../Components/ProductReview";

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/1.png")}
          alt="Logo"
          w="full"
          h={300}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas Shoes
        </Heading>
        <ProductRating rating={4.5} />
        <HStack space={2} my={5} alignItems="center">
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={1}
            rounded
            textColor={Colors.primary}
            borderColor={Colors.secondaryLight}
            iconStyle={{ color: Colors.secondaryLight }}
            rightButtonBackgroundColor={Colors.primary}
            leftButtonBackgroundColor={Colors.primary}
          />
          <Spacer />
          <Heading bold fontSize={19} color={Colors.black}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Occaecat elit labore amet ullamco excepteur pariatur amet laboris ut
          ullamco. Irure nostrud non aliqua fugiat ex ut id. Tempor irure
          laborum laborum quis aute. Aute dolore veniam irure aliqua aliquip
          laboris nostrud Lorem laborum. Qui esse ullamco elit non
          reprehenderit.
        </Text>
        <ButtonCustom bg={Colors.primary} color={Colors.secondaryLight} mt={10}>
          ADD TO CART
        </ButtonCustom>
        <ProductReview />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
