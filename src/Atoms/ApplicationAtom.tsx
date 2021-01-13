import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useSelector } from "react-redux";
import moment from "moment";
import { styles } from '../Styles';

const ApplicationAtom = ({ item, onPress }: any) => {
    const viewed = useSelector(({ main }: any)=>main.viewed);
    const getFirstname = item.form_response.answers.find((val: any)=>val.field.ref === "application_firstname");
    const getLastname = item.form_response.answers.find((val: any)=>val.field.ref === "application_lastname");
    const getPicture = item.form_response.answers.find((val: any)=>val.field.ref === "application_profile_picture");
    const getEmail = item.form_response.answers.find((val: any)=>val.field.ref === "application_email");
    // Below is called guarding ... To ensure app does not break when some info comes blank
    const firstname = getFirstname ? getFirstname.text : ' ';
    const lastname = getLastname ? getLastname.text : ' ';
    const profilePicture = getPicture ? getPicture.file_url : null; // I also added index so I can have different pictures. . . Nothing serious
    const email = getEmail? getEmail.email : ' ';
    const filterViewedId = viewed.findIndex((id: string)=>id === item.id);
    const viewedNotExist = filterViewedId <= -1 ? true : false;
    return (
        <TouchableOpacity
        activeOpacity={1}
        style={styles.listAtomView}
        onPress={onPress}
        >
            <View
            style={styles.rowAlignCenter}>
                {!profilePicture && <View style={styles.profileTextView}>
                    <Text style={styles.profileText}>{firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase()}</Text>
                </View>}
                {profilePicture && <Image 
                source={{ uri: profilePicture }}
                style={styles.profileImage}
                />}
                <View>
                    <Text style={styles.profileName}>{firstname.trim()+ ' ' + lastname.trim()}</Text>
                    <Text style={styles.profileEmail}>{email}</Text>
                </View>
            </View>
            <Text style={styles.timefontSize12}>{moment(item.form_response.submitted_at).format('DD MMM - hh:mm A')}</Text>
            {viewedNotExist && <View style={styles.viewedDot} />}
        </TouchableOpacity>
    )
}

export default ApplicationAtom; 
