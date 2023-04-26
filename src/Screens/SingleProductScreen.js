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
import { useNavigation } from '@react-navigation/native';

const SingleProductScreen = ({route}) => {
  const navigation = useNavigation();
  const product = route.params;
  const [value, setValue] = useState(0);

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: product.image}}
          alt="Logo"
          w="full"
          h={300}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <ProductRating rating={product.rating} text={`${product.numReviews} Reviews`}  />
        <HStack space={2} my={5} alignItems="center">
          {product.countInStock>0 ? (
            <NumericInput
            onChange={setValue}
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
            minValue={1}
            rounded
            textColor={Colors.primary}
            borderColor={Colors.secondaryLight}
            iconStyle={{ color: Colors.secondaryLight }}
            rightButtonBackgroundColor={Colors.primary}
            leftButtonBackgroundColor={Colors.primary}
          />
          ):(
            <Heading bold color={Colors.red} fontSize={12}>Out of stock</Heading>
          )}
          
          <Spacer />
          <Heading bold fontSize={19} color={Colors.black}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <ButtonCustom bg={Colors.primary} color={Colors.secondaryLight} mt={10} onPress={()=>navigation.navigate("Cart")}>
          ADD TO CART
        </ButtonCustom>
        <ProductReview />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
