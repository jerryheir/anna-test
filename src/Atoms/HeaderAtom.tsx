import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Styles/Colors';
import { styles } from '../Styles';

interface IProps {
    title?: string;
    onBack?: any; // using any here because I don't want to account for the onGestureEvent 
}

// Also to ensure this atom can be reusable, I used optional props

const HeaderAtom = ({ title, onBack }: IProps) => {
    return (
        <View style={styles.headerView}>
            {onBack && 
                <TouchableOpacity
                onPress={onBack}
                >
                    <MaterialIcons 
                    name={"chevron-left"}
                    style={styles.headerIcon}
                    />
                </TouchableOpacity>
            }
            <Text style={styles.headerText}>{title ? title : 'Restaurants'}</Text>
        </View>
    )
}

export default HeaderAtom;