import styled from '@emotion/styled';
import { rem } from 'polished';
import { Flex, Box } from 'reflexbox';

import Navigation from './Navigation';
import Link from 'next/link';

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex alignItems="center" justifyContent="space-between">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.jpg" alt="logo" />
                <span className="logo-text"> Resturants Hub</span>
              </a>
            </Link>
          </div>
          <Navigation />
        </Flex>
      </Box>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${props => (props.isDark ? '#000' : 'crimson')};
  padding: 20px;
  .logo {
    display: flex;
    align-items: center;

    a {
      align-items: center;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    & img {
      width: 50px;
    }
    .logo-text {
      color: #f0f0f0;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;
export default Header;
