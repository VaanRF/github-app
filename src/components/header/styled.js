import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  justify-content: space-between;
  padding: 8px;
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 35px;
    padding: 10px;
    font-weight: 750;
    color: #808080;
  }

 div {
    color: #549CE9;
    font-size: 16px;
    font-style: bold;
    font-weight: 900;
    font-stretch: extra-condensed;
    text-align: center;
    margin-right: 20px;
  }
  button {
    background-color: #549CE9;
    padding: 4px 12px;
    margin: 0 16px;
    border-radius: 8px;
    height: 35px;
    &:hover {
      background-color: #337FED;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;