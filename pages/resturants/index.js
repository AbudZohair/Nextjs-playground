import { Flex, Box } from 'reflexbox';
import { useRouter } from 'next/router';
import axios from 'axios';
import Card from 'components/Card';

function ResturantsPage({ resturants, page, numberOfresturants }) {
  const router = useRouter();
  console.log(numberOfresturants, page, resturants);

  const lastPage = Math.ceil(numberOfresturants / 3);

  return (
    <Box variant="container" pt={40}>
      <Flex
        mx="auto"
        my={20}
        pl={20}
        justifyContent="space-between"
        maxWidth={300}
      >
        <button
          onClick={() => router.push(`/resturants?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/resturants?page=${page + 1}`)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', md: 'row' }}
        mb={100}
        flexWrap="wrap"
      >
        {resturants.map(resturant => (
          <Box
            key={resturant.id}
            alignSelf="stretch"
            width={{ _: '100%', md: '30%' }}
          >
            <Card resturant={resturant} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const numberOfresturantsResponse = await axios.get(
    `${API_URL}/resturants/count`
  );
  const numberOfresturants = await numberOfresturantsResponse.data;

  const response = await axios.get(
    `${API_URL}/resturants?_limit=3&_start=${start}`
  );
  const { data } = await response;

  return {
    props: {
      resturants: data,
      page: +page,
      numberOfresturants
    }
  };
}

export default ResturantsPage;
