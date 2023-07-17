import React, { FC, PropsWithChildren } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Card from './Card';
import { AppDesignConstants } from '../../constants/Constants';

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
    placeholderTextColor?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    textInputStyle?: any;
    spaceBetween?: boolean;
    color?: string;
    height?: number;
    maxLength?: number;
    editable?: boolean;
    returnKeyType?: string;
}

const GenericInput: FC<InputProps> = ({
    placeholder,
    value,
    placeholderTextColor = 'white',
    onChangeText,
    autoCapitalize,
    keyboardType,
    secureTextEntry,
    textInputStyle,
    color,
    height = AppDesignConstants.standardInputSize,
    maxLength,
    editable }) => {
    return (
        <Card
            radius={AppDesignConstants.medium}
            color={color ? color : 'grey'}
            height={height}
        >
            <TextInput
                placeholder={placeholder}
                value={value}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={[styles.baseStyle, textInputStyle, { height: height }]}
                maxLength={maxLength}
                editable={editable}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    baseStyle: {
        color: 'white',
        fontSize: AppDesignConstants.large,
        marginLeft: AppDesignConstants.xm,
        marginRight: AppDesignConstants.xm,
    },
});

export default GenericInput;
