import { useEffect } from "react";
import { Text, View } from "react-native";
import {
  NotificationClickEvent,
  NotificationWillDisplayEvent,
  OneSignal,
} from "react-native-onesignal";

export default function Home() {
  useEffect(() => {
    OneSignal.initialize("40c554c5-ac6d-41d8-b223-03ef453fa1b8");

    OneSignal.Notifications.requestPermission(true);

    OneSignal.login("09578483406");
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
