import React, {useEffect} from 'react';
import {Alert, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {requestPermissionsAndGetToken} from './src/utils';
import {HomeScreen} from './src/screens/HomeScreen';
import {useRegisterFcmToken} from './src/hooks/useRegisterFcmToken';
import messaging from '@react-native-firebase/messaging';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const FullscreenView = styled.View`
  flex: 1;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #333;
  flex: 1;
`;

function App(): React.ReactElement {
  const {
    registerFcmToken,
    registered: fcmTokenRegistered,
  } = useRegisterFcmToken();
  const initPushNotifications = async () => {
    const token = await requestPermissionsAndGetToken();
    if (!token) {
      Alert.alert(
        'Error',
        'There is problem with registering push notifications',
      );
      return;
    }
    await registerFcmToken(token);
  };
  useEffect(() => {
    initPushNotifications();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      showMessage({
        message: remoteMessage?.notification?.title || '',
        description: remoteMessage?.notification?.body,
        type: 'success',
        duration: 4000,
      });
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullscreenView>
      <StyledSafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <HomeScreen fcmTokenRegistered={fcmTokenRegistered} />
      </StyledSafeAreaView>
      <FlashMessage position="top" />
    </FullscreenView>
  );
}
export default App;
