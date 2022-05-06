import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: ScreenshotButtonProps) {
  return (
    <>
      <TouchableOpacity onPress={screenshot ? onRemoveShot : onTakeShot} style={styles.container}>
        {screenshot ? (
          <View>
            <Image source={{ uri: screenshot }} style={styles.image} />
            <Trash
              size={24}
              color={theme.colors.text_secondary}
              weight="fill"
              style={styles.removeIcon}
            />
          </View>
        ) : (
          <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
        )}
      </TouchableOpacity>
    </>
  );
}