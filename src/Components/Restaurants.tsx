import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderAtom from '../Atoms/HeaderAtom';
import RestaurantAtom from '../Atoms/RestaurantAtom';
import { Routes } from '../Navigation/routes';
import { styles } from '../Styles';

const Restaurants = ({ navigation }: any) => {
    const { restaurants } = useSelector(({ main }: any)=>main);
    const renderItem = ({ item }: any)=>{
        return (
            <RestaurantAtom 
            item={item}
            onPress={()=>navigation.navigate(Routes.Applications, { 
                applications: item.applications,
                name: item.restaurant.label,
                id: item.restaurant.id
            })}
            />
        )
    }
    return (
        <SafeAreaView style={styles.flex}>
            <HeaderAtom />
            <FlatList 
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item, index)=>index.toString()}
            />
        </SafeAreaView>
    )
}

export default Restaurants;