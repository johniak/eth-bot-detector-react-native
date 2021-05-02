import messaging from '@react-native-firebase/messaging';

export async function requestPermissionsAndGetToken() {
  const permissionsReceived = await requestUserPermission();
  if (!permissionsReceived) {
    return null;
  }
  return messaging().getToken();
}

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    return true;
  }
  return enabled;
}
