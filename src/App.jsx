import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setCount(res.data.products);
    });
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5}>
        {count.map((item) => {
          const { title, description, price, thumbnail } = item;
          return (
            <Card maxW="sm" key={item.id}>
              <CardBody>
                <Image src={thumbnail} alt={title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{title}</Heading>
                  <Text>{description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default App;
