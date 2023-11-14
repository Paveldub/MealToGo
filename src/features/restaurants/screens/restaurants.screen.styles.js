import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
