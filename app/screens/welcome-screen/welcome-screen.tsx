import * as React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Screen, Text, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
const abettaWorldLogo = require("./abettaworld_logo.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const LOGO: ImageStyle = {
  marginVertical: spacing[5],
  maxWidth: "100%",
  maxHeight: "60%",
}
const BUTTON: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  marginVertical: spacing[1],
}
const BUTTON_FACEBOOK: ViewStyle = {
  ...BUTTON,
  backgroundColor: "#3B5998",
};
const BUTTON_OTHER: ViewStyle = {
  ...BUTTON,
  backgroundColor: "#000000",
};
const BUTTON_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
    props.navigation,
  ])

  return (
    <View style={FULL}>
      <Wallpaper />
      <Text style={TITLE} text="ABettaMe" />
      <Image source={abettaWorldLogo} style={LOGO} />
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            style={BUTTON_FACEBOOK}
            textStyle={BUTTON_TEXT}
            tx="welcomeScreen.facebookLogin"
            onPress={nextScreen}
          />
          <Button
            style={BUTTON_OTHER}
            textStyle={BUTTON_TEXT}
            tx="welcomeScreen.otherOptions"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
