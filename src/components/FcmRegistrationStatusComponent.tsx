import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: aliceblue;
  font-size: 20px;
  text-align: center;
`;
interface FcmRegistrationStatusComponentProps {
  fcmTokenRegistered: boolean;
}
export function FcmRegistrationStatusComponent({
  fcmTokenRegistered,
}: FcmRegistrationStatusComponentProps): React.ReactElement {
  let label = null;
  if (fcmTokenRegistered) {
    label =
      'Your FCM token is now registered. Yo will receive future notifications about detected ETH bots';
  } else {
    label = 'Your FCM token is not Registered';
  }
  return <StyledText>{label}</StyledText>;
}
