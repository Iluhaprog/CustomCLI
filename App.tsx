import React from 'react';
import { Text } from 'react-native';
import { VK_APP_ID } from '@env';

const App = () => {
  return (
    <>
      <Text>{VK_APP_ID}</Text>
    </>
  );
};

export default App;
