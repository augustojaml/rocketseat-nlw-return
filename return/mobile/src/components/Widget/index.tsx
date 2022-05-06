import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { styles } from './styles';

import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedBackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);
  const [feedBackSent, setFeedBackSent] = useState(false);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestarFeedBack() {
    setFeedBackType(null);
    setFeedBackSent(false);
  }

  function handleFeedBackSent() {
    setFeedBackSent(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedBackSent ? (
          <Success onSendAnotherFeedBack={handleRestarFeedBack} />
        ) : (
          <>
            {feedBackType ? (
              <Form
                feedbackType={feedBackType}
                onFeedBAckCanceled={handleRestarFeedBack}
                onFeedBackSend={handleFeedBackSent}
              />
            ) : (
              <Options onFeedBackTypeChange={setFeedBackType} />
            )}
          </>
        )}

        {/* <Form feedbackType="BUG" /> */}
        {/* <Success /> */}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
