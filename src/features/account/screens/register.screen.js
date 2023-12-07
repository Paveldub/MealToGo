import React, { useContext, useState } from "react";

import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Typography/Typography.component";
import { AuthenticationContext } from "../../../services/auth/auth.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AuthInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
      />
      <Spacer size="large">
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
      </Spacer>
      <Spacer size="large">
        <AuthInput
          label="Repeat password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
      </Spacer>
      {error && (
        <ErrorContainer size="large">
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      <Spacer size="large">
        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </Spacer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
