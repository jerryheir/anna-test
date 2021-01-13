import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const styles = StyleSheet.create({
    listAtomView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 11
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileTextView: {
        height: 70,
        width: 70,
        borderRadius: 5,
        marginRight: 11,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    profileImage: {
        height: 70,
        width: 70,
        borderRadius: 5,
        marginRight: 11,
    },
    profileText: { 
        fontSize: 21, 
        fontWeight: 'bold' 
    },
    viewedDot: {
        height: 16,
        width: 16,
        borderRadius: 8,
        position: 'absolute',
        top: 21,
        right: 16,
        zIndex: 999,
        backgroundColor: colors.primary
    },
    profileName: { 
        fontSize: 16, 
        paddingVertical: 2 
    },
    profileEmail: { 
        fontSize: 12, 
        fontStyle: 'italic' 
    },
    timefontSize12: { 
        fontSize: 12 
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    headerIcon: {
        fontSize: 42,
        marginRight: 8,
        color: colors.darkGray
    },
    headerText: {
        color: colors.primary,
        fontSize: 32
    },
    chevronRight: { 
        fontSize: 42, 
        color: colors.darkGray 
    },
    modalTextView: {
        height: 150,
        width: 150,
        borderRadius: 11,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    carouselBg: { 
        flex: 1, 
        backgroundColor: colors.bgColor, 
        paddingTop: 80 
    },
    modalImage: {
        height: 150,
        width: 150,
        borderRadius: 11,
        alignSelf: 'center'
    },
    modalName: { 
        fontSize: 21,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        width: 200,
        marginVertical: 21
    },
    modalBioBold: { 
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        width: 340,
        marginBottom: 21
    },
    modalBioNormal: { 
        fontWeight: '600', 
        fontSize: 16, 
        fontStyle: 'italic' 
    },
    modalEmailView: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalEmailIcon: { 
        fontSize: 32, 
        color: colors.primary, 
        marginRight: 16 
    },
    modalEmail: { 
        fontSize: 18 
    },
    modalMainView: {
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: colors.bgColor
    },
    modalCloseIcon: { 
        position: 'absolute',
        top: 32,
        left: 21,
        zIndex: 999,
        fontSize: 36,
        color: colors.darkGray
    },
    flex: { 
        flex: 1 
    },
    appContainer: {
        flex: 1,
        backgroundColor: colors.bgColor,
    }
})