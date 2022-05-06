import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { theme } from '../../theme';
import { FeedBackType } from '../Widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { api } from '../../libs/api';

interface FormProps {
  feedbackType: FeedBackType;
  onFeedBAckCanceled: () => void;
  onFeedBackSend: () => void;
}

export function Form({ feedbackType, onFeedBAckCanceled, onFeedBackSend }: FormProps) {
  const feedBackTypeInfo = feedbackTypes[feedbackType];
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [isSendFeedBack, setIsSendFeedBack] = useState(false);
  const [comment, setComment] = useState('');

  function handleScreenShot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then((uri) => {
        console.log(uri);
        setScreenShot(uri);
      })
      .catch((err) => console.log(err));
  }

  function handleScreenShotRemove() {
    setScreenShot(null);
  }

  async function handleSendFeedBack() {
    try {
      /** type, comment, screenshot */
      if (isSendFeedBack) {
        return;
      }
      setIsSendFeedBack(true);

      const screenShotBase64 =
        screenShot && (await FileSystem.readAsStringAsync(screenShot, { encoding: 'base64' }));

      const data = {
        type: feedbackType,
        comment: comment,
        screenshot: `data:image/png;base64, ${screenShotBase64}`,
      };

      await api.post('/feedbacks', data);
      onFeedBackSend();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSendFeedBack(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onFeedBAckCanceled}>
            <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
          </TouchableOpacity>

          <View style={styles.titleContent}>
            <Image style={styles.image} source={feedBackTypeInfo.image} />
            <Text style={styles.titleText}>{feedBackTypeInfo.title}</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          multiline
          placeholderTextColor={theme.colors.text_secondary}
          autoCorrect={false}
          onChangeText={setComment}
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <View style={styles.footer}>
          <ScreenshotButton
            screenshot={screenShot}
            onTakeShot={handleScreenShot}
            onRemoveShot={handleScreenShotRemove}
          />
          <Button isLoading={isSendFeedBack} onPress={handleSendFeedBack} />
        </View>
      </View>
    </>
  );
}
