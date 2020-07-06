import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { NavigationsContext } from '../pages/_app';

const Navigation = () => {
  const navigations = useContext(NavigationsContext);
  const router = useRouter();
  return (
    <NavigationStyled>
      <ul>
        {navigations.map(navigator => (
          <li key={navigator.id}>
            <Link href={navigator.slug}>
              <a className={router.pathname === navigator.slug ? 'active' : ''}>
                {navigator.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};
const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 10px;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      &:hover {
        text-decoration: underline;
        transform: scale(1.1);
      }
      &.active {
        color: #fff;
      }
    }
  }
`;

// export async function getServerSideProps() {
//   const { API_URL } = process.env;

//   const response = await axios.get(`${API_URL}/navigations`);
//   const { data } = await response;

//   console.log(data);
//   return {
//     props: {
//       data
//     }
//   };
// }
export default Navigation;
