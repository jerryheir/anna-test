import React from 'react';
import { View, Text, Modal, Image, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-native-snap-carousel';
import { setViewed } from "../Actions";
import { colors } from '../Styles/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Styles';

const ApplicationModal = ({ visible, closeModal }: any) => {
    const { width, height } = useWindowDimensions();
    const dispatch = useDispatch();
    const viewList = useSelector(({ main }: any)=>main.viewList);
    const scrollIndex = useSelector(({ main }: any)=>main.scrollIndex);
    const renderItem = ({ item, index }: any) => {
        const getFirstname = item.form_response.answers.find((val: any)=>val.field.ref === "application_firstname");
        const getLastname = item.form_response.answers.find((val: any)=>val.field.ref === "application_lastname");
        const getPicture = item.form_response.answers.find((val: any)=>val.field.ref === "application_profile_picture");
        const getEmail = item.form_response.answers.find((val: any)=>val.field.ref === "application_email");
        const getBio = item.form_response.answers.find((val: any)=>val.field.ref === "application_work_experience");
        // const getWorkHours = item.form_response.answers.find((val: any)=>val.field.ref === "application_workhours");
        // const getStartDate = item.form_response.answers.find((val: any)=>val.field.ref === "application_start_date");
        const getPhone = item.form_response.answers.find((val: any)=>val.field.ref === "application_phone_number");
        // Below is called guarding ... To ensure app does not break when some info comes blank
        const firstname = getFirstname ? getFirstname.text : ' ';
        const lastname = getLastname ? getLastname.text : ' ';
        const profilePicture = getPicture ? getPicture.file_url : null; // I also added index so I can have different pictures. . . Nothing serious
        const email = getEmail ? getEmail.email : ' ';
        return (
            <View style={styles.carouselBg}>
                {!profilePicture && <View style={styles.modalTextView}>
                    <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase()}</Text>
                </View>}
                {profilePicture && <Image 
                source={{ uri: profilePicture }}
                style={styles.modalImage}
                />}
                <Text style={styles.modalName}>{firstname + ' ' + lastname}</Text>
                {getBio ? <Text style={styles.modalBioBold}>Bio: <Text style={styles.modalBioNormal}>{getBio.text}</Text></Text> : null}
                <View style={styles.modalEmailView}>
                    <MaterialIcons 
                    name="mail-outline"
                    style={styles.modalEmailIcon}
                    />
                    <Text style={styles.modalEmail}>{email}</Text>
                </View>
                {getPhone ? <View style={[styles.modalEmailView, {
                    marginVertical: 8
                }]}>
                    <MaterialIcons 
                    name="contact-phone"
                    style={styles.modalEmailIcon}
                    />
                    <Text style={styles.modalEmail}>{getPhone ? getPhone.phone_number : '-- Not Provided --'}</Text>
                </View> : null}
            </View>
        )
    }
    const onSnapToItem = (index: number) => {
        dispatch(setViewed(viewList[index], viewList));
    }
    return (
        <Modal
        testID= "appsModal"
        animationType="slide"
        transparent={false}
        visible={visible}
        style={styles.modalMainView}
        onRequestClose={closeModal}
        >
            <MaterialIcons 
            name="close"
            style={styles.modalCloseIcon}
            onPress={closeModal}
            />
            <Carousel
            removeClippedSubviews={false}
            firstItem={scrollIndex}
            data={viewList}
            onSnapToItem={onSnapToItem}
            renderItem={renderItem}
            sliderHeight={height}
            sliderWidth={width}
            itemWidth={width}
            useScrollView={true}
            />
        </Modal>
    )
}

export default ApplicationModal;
