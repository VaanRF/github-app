import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  margin-right:20%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px ;
  margin-left: 30px;
  height: 200px;
  h1 {
    color: #808080;
    font-size: 20px;
    font-weight: 700;
  }
  h3 {
    color: #808080;
    font-size: 18px;
    font-weight: 800;
  }
  h4 {
    color: #808080;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  color: #808080;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    color: #808080;
    margin-right: 8px;
  }
  a {
    font-size: 18px;
    color: #549CE9;
    font-weight: 800;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: 8px;
  justify-content: center;
  margin-left: 20%
`;