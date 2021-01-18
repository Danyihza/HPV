import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Button } from '../../components';

const ActionButton = ({title, onPress}) => {

  return (
    <View style={styles.wrapper.component}>
      {/* <Text style={styles.text.desc}>{desc}</Text> */}
      <Button title={title} onPress={onPress}/>
    </View>
  );
};

const styles = {
  wrapper: {
    component: {marginBottom: 43, width: '70%'},
  },
};

export default ActionButton;
