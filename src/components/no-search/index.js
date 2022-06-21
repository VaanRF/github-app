import React from "react";
import * as S from "./styled";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>
        Para começar, pesquiser por um Github Username! 
        <br></br> 
        Esta aplicação retorna os dados como nome e repositórios do Usuário direto da API do github. 
        <br></br> 
        Para visualizar o perfil do criador dessa aplicação, procure por VaanRF.
      </h1>
    </S.Wrapper>
  );
};

export default NoSearch;