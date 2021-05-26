import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import profileImage from "../assets/images/me.jpg";

export default function Header() {
  return (
    <Header__Container>
      <nav>
        <ul>
          <Link to="/">
            <Div__Mask_Circular>
              <img width="50" src={profileImage} alt="Picture of me" />
            </Div__Mask_Circular>
          </Link>
        </ul>
      </nav>
    </Header__Container>
  );
}

const Div__Mask_Circular = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
  }
`;

const Header__Container = styled.header`
  background-color: ${(props) => props.theme.themeColors.header};
  padding: 0 2em;
`;
