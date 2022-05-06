import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedBackType } from '../Widget';
import { styles } from './styles';

interface OptionsProps {
  onFeedBackTypeChange: (feedBackType: FeedBackType) => void;
}

export function Options({ onFeedBackTypeChange }: OptionsProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Deixe seu feedback</Text>

        <View style={styles.options}>
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedBackTypeChange(key as FeedBackType)}
            />
          ))}
        </View>

        <Copyright />
      </View>
    </>
  );
}
