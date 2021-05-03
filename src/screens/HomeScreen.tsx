import React from 'react';
import {FcmRegistrationStatusComponent} from '../components/FcmRegistrationStatusComponent';

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
