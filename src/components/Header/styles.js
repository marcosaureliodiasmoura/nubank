import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// align-items: center;  todo conteudo esteja alinhado ao centro
// padding: 40px no topo, 0 nas laterais e 30px abaixo.
export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
  padding-top: ${getStatusBarHeight()}px;
`;

// flex-direction Vou alinhar o conteúdo em forma de row, ou seja, um ao lado do outro.
// align-items: vou inseri-los ao centro, alinhados verticalmente, porque a logo vai ser maior que o titulo.
// margin-bottom: para distânciar da flexinha
export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;
