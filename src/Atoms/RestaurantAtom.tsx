import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from '../Styles';

const RestaurantAtom = ({ item, onPress }: any) => {
    return (
        <TouchableOpacity
        activeOpacity={1}
        style={styles.listAtomView}
        onPress={onPress}
        >
            <View
            style={styles.rowAlignCenter}>
                <View style={styles.profileTextView}>
                    <Text style={styles.profileText}>{item.restaurant.label.charAt(0).toUpperCase()}</Text>
                </View>
                <View>
                    <Text style={styles.profileName}>{item.restaurant.label}</Text>
                    <Text style={styles.profileEmail}>{item.total + ' application(s)'}</Text>
                </View>
            </View>
            <MaterialIcons 
            name="chevron-right"
            style={styles.chevronRight}
            />
        </TouchableOpacity>
    )
}

export default RestaurantAtom; 
