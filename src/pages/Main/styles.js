// snippet styled-rn

import styled from 'styled-components/native';

// justify-content: alinhar o conteudo ao centro
export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

// O flex 1 vai jogar o nosso tabs lá pra baixo da página, porque ele irá garantir
// Que o elemento Content ocupe todo espaço disponivel possível
// Como o Header e o Tabs possui um tamanho especifico ele irá ocupar todo o tamanho no centro da tela.
// O flex 1 serve também para ocupar todo o espaço disponivel.

// z-index para sobrepor animações
export const Content = styled.View`
  flex: 1;
  max-height: 400px
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;

`;

// flex-direction: row: alinha os itens horizontalmene |
// justify-content: space-between: Faz com que o icone de $ fique a esquerda e o visibility a direita
// padding espaçamento nas laterais.
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

// Flex: 1 pra ele ocupar todo o tamanho possível.
// padding 0 30px: apenas nas laterais
// justify-content para alinhar o texto do saldo disponivel no centro.
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

// Saldo disponivel
export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

// RS 197.611,65
export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

// Texto do footer
export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
