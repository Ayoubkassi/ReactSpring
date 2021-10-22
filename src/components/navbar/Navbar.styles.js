import styled from 'styled-components';
import {
  Link
} from "react-router-dom";


export const Container = styled.div`
  height : 10vh;
  background-color : rgb(76, 202, 207);
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0 30px;
`;

export const Item = styled.a`
  color : #fff;
  font-size : 18px;

  &:hover{
    text-decoration : underline;
    cursor : pointer;
  }
`;
