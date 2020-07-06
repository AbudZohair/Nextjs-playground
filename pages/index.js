import axios from 'axios';
import useSWR from 'swr';
import { Flex, Box } from 'reflexbox';

import Card from '../components/Card';

const Home = ({ resturantsList, numberOfResturants, page }) => {
  return (
    <Box variant="container">
      {resturantsList && (
        <>
          <Box my={40} textAlign="center" as="h2">
            Highly Rated Rsturants
          </Box>
          <Flex
            justifyContent="space-between"
            flexDirection={{ _: 'column', md: 'row' }}
            mb={100}
            flexWrap="wrap"
          >
            {resturantsList.map(resturant => (
              <Box
                key={resturant.id}
                alignSelf="stretch"
                width={{ _: '100%', md: '30%' }}
              >
                <Card resturant={resturant} />
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const response = await axios.get(`${API_URL}/resturants?_limit=3`);
  const resturantsList = await response.data;

  return {
    props: {
      resturantsList
    }
  };
}
export default Home;
