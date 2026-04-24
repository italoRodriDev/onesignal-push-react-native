# Exemplo implementacao OneSingal React Native by Italo Rodri. Dev.

› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

# 1 - Configurar ambiente:

> > Variaveis de ambiente global

ANDROID_HOME: C:\Users\Italo\AppData\Local\Android\Sdk
JAVA_HOME: C:\Program Files\Java\jdk-17
ANDROID_ADV_HOME: D:\Projetos\emuladores (Opcional)

> > > No path:
> > > ANDROID_ADV_HOME
> > > %ANDROID_HOME%\platform-tools
> > > %ANDROID_HOME%\emulator
> > > %ANDROID_HOME%\tools

# 2 - Instalar dependencias

npm install react-native-onesignal

# 3 - Configurar Onesignal

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
