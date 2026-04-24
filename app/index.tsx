import { useEffect } from "react";
import { Text, View } from "react-native";
import {
  NotificationClickEvent,
  NotificationWillDisplayEvent,
  OneSignal,
} from "react-native-onesignal";

export default function Home() {
  useEffect(() => {
    OneSignal.initialize("app_id");

    OneSignal.Notifications.requestPermission(true);

    OneSignal.login("meu_exeternal_id");
    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay",
      (event: NotificationWillDisplayEvent) => {
        console.log("Notificação recebida", event);

        event.getNotification().display();
      },
    );

    OneSignal.Notifications.addEventListener(
      "click",
      (event: NotificationClickEvent) => {
        console.log("Notificação aberta:", event);
      },
    );
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Teste OneSignal React Native</Text>
    </View>
  );
}
