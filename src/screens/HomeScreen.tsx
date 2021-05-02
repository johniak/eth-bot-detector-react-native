import React from 'react';
import {FcmRegistrationStatusComponent} from '../components/FcmRegistrationStatusComponent';

// class ApiStore {
//   isTokenRegistered = false;
//   static FCM_TOKEN_URL = '/fcm-token/';
//   constructor() {
//     makeAutoObservable(this);
//   }
//
//   async registerFcmToken(token: string) {
//     const response = await fetch(`${API_URL}${ApiStore.FCM_TOKEN_URL}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({token}),
//     });
//     const data = await response.json();
//     if (data?.status !== 'ok') {
//       return false;
//     }
//     this.isTokenRegistered = true;
//     return true;
//   }
// }
//
// export const myApiStore = new ApiStore();
interface HomeScreenProps {
  fcmTokenRegistered: boolean;
}
export function HomeScreen({
  fcmTokenRegistered,
}: HomeScreenProps): React.ReactElement {
  return (
    <FcmRegistrationStatusComponent fcmTokenRegistered={fcmTokenRegistered} />
  );
}
