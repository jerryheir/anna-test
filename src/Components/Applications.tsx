import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { setViewed } from "../Actions";
import ApplicationAtom from '../Atoms/ApplicationAtom';
import HeaderAtom from '../Atoms/HeaderAtom';
import ApplicationModal from './ApplicationModal';
import { styles } from '../Styles';

const Applications = ({ navigation, route }: any) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);
    const data = route.params;
    const renderItem = ({ item, index }: any)=>{
        return (
            <ApplicationAtom 
            item={item}
            onPress={()=>setData(item)}
            />
        )
    }
    const setData = (item: any) => {
        dispatch(setViewed(item, data.applications));
        setVisible(true);
    }
    const closeModal = () => {
        setVisible(false);
    }
    return (
        <SafeAreaView style={styles.flex}>
            <HeaderAtom 
            title={data.name} 
            onBack={navigation.goBack}
            />
            <FlatList 
            data={data.applications}
            renderItem={renderItem}
            keyExtractor={(item, index)=>index.toString()} // only accepts strings
            />
            <ApplicationModal 
            visible={visible}
            closeModal={closeModal}
            />
        </SafeAreaView>
    )
}

export default Applications;