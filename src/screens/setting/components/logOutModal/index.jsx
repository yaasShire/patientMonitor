import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SCREEN_PADDING, colors } from '../../../../constants'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
const LogOutModal = ({ show = false, setShow = () => { }, onPress = () => { } }) => {
    return (
        <Modal
            visible={show}
            onDismiss={() => setShow(prev => !prev)}
            onRequestClose={() => setShow(prev => !prev)}
        >
            <SafeAreaView style={styles.contentWrapper}>
                <View style={styles.miniWrapper}>
                    <View style={styles.upperContent}>
                        <View style={styles.logoutIconText}>
                            <MaterialCommunityIcons name="logout" size={30} color="red" />
                            <Text style={styles.warningText}>Are you sure to log out?</Text>
                        </View>
                        <Pressable onPress={onPress} style={styles.logoutBtn}>
                            <Text style={styles.logoutBtnText}>Log out</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => setShow(false)} style={styles.cancelButtonWrapper}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default LogOutModal

const styles = StyleSheet.create({
    contentWrapper: {
        // backgroundColor: "pink",
        flex: 1,
        justifyContent: "flex-end"
    },
    miniWrapper: {
        height: "50%",
        justifyContent: "space-around",
        padding: SCREEN_PADDING,
    },
    upperContent: {
        height: "60%",
        backgroundColor: colors.SECONDARY_COLOR,
        borderWidth: 1,
        borderColor: colors.SECONDARY_COLOR,
        borderRadius: 6,
        padding: SCREEN_PADDING,
        elevation: 1,
        justifyContent: "space-around"

    },
    cancelButtonWrapper: {
        height: "15%",
        backgroundColor: colors.SECONDARY_COLOR,
        borderWidth: 1,
        borderColor: colors.SECONDARY_COLOR,
        borderRadius: 5,
        padding: SCREEN_PADDING,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1
    },
    btnText: {
        fontWeight: "400",
        fontSize: 16,
        color: colors.BLACK
    },
    logoutIconText: {
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    logoutBtnText: {
        fontWeight: "400",
        fontSize: 16,
        color: colors.WHITE
    },
    warningText: {
        fontWeight: "500",
        fontSize: 19
    },
    logoutBtn: {
        backgroundColor: colors.LIGHT_BLUE,
        height: 50,
        borderRadius: 5,
        padding: SCREEN_PADDING,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1
    }

})