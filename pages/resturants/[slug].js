import { NextSeo } from 'next-seo';
import getConfig from 'next/config';
import axios from 'axios';
import styled from '@emotion/styled';

import Error from '../_error';

const ResturantDetails = ({ data, statusCode }) => {
  if (statusCode === 404) {
    // This line will show the default Error Page
    return <Error statusCode={statusCode} />;
  }
  const SEO = {
    title: `Resturants Hub | ${data.name}`,
    description: data.description,

    openGraph: {
      title: `Resturants Hub | ${data.name}`,
      description: data.description
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ResturantStyled>
        <h2>{data.name}</h2>
        <img src={`${API_URL}${data.image.url}`} alt="Resturant" />
        <p>{data.description}</p>
      </ResturantStyled>
    </>
  );
};

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export async function getServerSideProps({ query }) {
  const response = await axios.get(`${API_URL}/resturants?slug=${query.slug}`);
  const { data } = await response;

  return {
    props: {
      data: data[0] || null,
      statusCode: data[0] ? 200 : 404
    }
  };
}

const ResturantStyled = styled.div`
  h2 {
    margin: 30px 0;
    text-align: center;
  }
  img {
    display: block;
    max-width: 500px;
    margin: 50px auto;
  }
  p {
    max-width: 700px;
    margin: 30px auto;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
  }
`;
export default ResturantDetails;
