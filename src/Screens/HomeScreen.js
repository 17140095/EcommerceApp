import { Text, Box } from 'native-base';
import Colors from '../Colors/colors';
import HomeSearch from '../Components/HomeSearch';
import HomeProducts from '../Components/HomeProducts';

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.secondary}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  )
}

export default HomeScreen