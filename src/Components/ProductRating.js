import { HStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Colors/colors";

export default function ProductRating({ rating }) {
  return (
    <HStack space={0.4} mt={1}>
      <FontAwesome
        name={rating >= 1 ? "star" : rating >= 0.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={rating >= 2 ? "star" : rating >= 1.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={rating >= 3 ? "star" : rating >= 2.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={rating >= 4 ? "star" : rating >= 3.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={rating >= 5 ? "star" : rating >= 4.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
    </HStack>
  );
}
