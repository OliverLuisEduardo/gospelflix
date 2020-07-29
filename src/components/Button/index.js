import styled from "styled-components";
import {Link} from "react-router-dom";

const Button = styled(Link)`
  color: var(--white);
  border: 1px solid var(--white);
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
  opacity: .5;
  }

  @media (max-width: 800px){
    background-color: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;   
    text-align: center;
}
`;

export default Button;