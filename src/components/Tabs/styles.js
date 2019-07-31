import styled from 'styled-components/native';

// Altura máxima de 100px
// margin-top de 20px
export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

// A scrollview dentro do react-native tem duas propriedades de estilo
// A primeira se chama style, que são estilos para espaçamento externo da scrollview, max pra altura.
// E outra para tratar a estilização do conteudo dentro dela, utilizamos a propriedade ContentContainerStyle
// Pra isso, utilizo o attrs
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

// Itens do nosso menu
// width: largura
// height: altura
// background: 20% de opacidade com a cor branca de fundo
// o margin-left de 10px vai suprir a falta do paddingLeft 10 do TabsContainer
// padding: espaçamento interno de 10px
// justify-content: space-between: quero que o item da TabItem esteja alinhado ao topo, enquanto o
// texto dessa TabItem esteja totalmente alinhado abaixo, no footer dela
export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
