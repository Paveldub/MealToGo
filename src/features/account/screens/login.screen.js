import React, { useContext, useState } from "react";

import { AccountBackground, AccountCover } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/auth/auth.context";
import { AuthInput, AuthButton } from "../components/account.styles";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Typography/Typography.component";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

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
          secure
          onChangeText={(p) => setPassword(p)}
        />
      </Spacer>
      {error && (
        <Spacer size="large">
          <Text variant="error">{error}</Text>
        </Spacer>
      )}
      <Spacer size="large">
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
