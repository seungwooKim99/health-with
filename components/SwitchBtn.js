import React from 'react';
import { Switch, View } from 'react-native';
import { COLORS } from '../constants';


export default SwitchBtn = ({isEnabled, setIsEnabled}) => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Switch
        trackColor={{ false: '#767577', true: COLORS.primary }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor={COLORS.gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}