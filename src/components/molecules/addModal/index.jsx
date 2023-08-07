import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import { SCREEN_PADDING, colors } from '../../../constants';
import TextField from '../../atoms/textField';
import CustomButton from '../../atoms/button';
import HeadingTitle from '../headingTitle';
import { EvilIcons } from 'react-native-vector-icons'

const AddPerson = ({ show = false, setShow = () => { } }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {
                setShow(!show);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ alignItems: "flex-end", width: "100%" }}>
                        <Pressable onPress={() => {
                            setShow(false)
                        }} style={{ width: 30, height: 30, backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                            <EvilIcons name="close" size={25} color="#fff" />
                        </Pressable>
                    </View>
                    <HeadingTitle title="Add Patient" />
                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ rowGap: 25 }} showsVerticalScrollIndicator={false}>
                        <TextField
                            placeHolder="Name"
                            label="Name"
                        />
                        <TextField
                            placeHolder="Age"
                            label="Age"
                        />
                        <TextField
                            placeHolder="Tell"
                            label="Tell"
                        />
                        <TextField
                            placeHolder="Sex"
                            label="Sex"
                        />
                        <TextField
                            placeHolder="Password"
                            label="Password"
                        />
                        <CustomButton title='Register' />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        padding: SCREEN_PADDING,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "68%",
        width: "90%",
        rowGap: 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default AddPerson;