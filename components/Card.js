import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Flex } from 'reflexbox';

const Card = ({ resturant }) => {
  const { API_URL } = process.env;
  return (
    <CardStyled>
      <div className="poster">
        {resturant.image.url && (
          <img src={`${API_URL}${resturant.image.url}`} alt="Resturant" />
        )}
      </div>
      <div className="body">
        <h3>{resturant.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: resturant.description }}></p>
        <Link href="/resturants/[slug]" as={`/resturants/${resturant.slug}`}>
          <a>Read More</a>
        </Link>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  border: 1px solid #ccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
  }
  .body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #666;
      line-height: 1.5;
    }
    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;

export default Card;
