import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';
import { SCREEN_PADDING, colors } from '../../../../constants';
import TextField from '../../../../components/atoms/textField';
import CustomButton from '../../../../components/atoms/button';
import HeadingTitle from '../../../../components/molecules/headingTitle';
import { EvilIcons } from 'react-native-vector-icons'
import { TextInput } from 'react-native-paper';
import { postDataEndPoint } from '../../../../api/post';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Button from 'react-native-paper';

const AddResponsible = ({ show = false, setShow = () => { }, data = {} }) => {
    const [toggleInput, setToggleInput] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const validationSchema = Yup.object().shape({
        patientID: Yup.string().required('PatientId is required'),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Name is required'),
        ResponsibleType: Yup.string().required('ResponsibleType is required'),
        age: Yup.string().required('Age is required'),
        tell: Yup.string().required('Tell is required'),
        backup_tell: Yup.string().required('backup_tell is required'),
        sex: Yup.string().required('Sex is required'),
    });

    const handleLogin = async (values) => {
        const formData = {
            patientId: values.patientID,
            name: values.name,
            age: Number(values.age),
            sex: values.sex,
            tell: values.tell,
            email: values.email,
            ResponsibleType: values.ResponsibleType,
            backup_tell: values.backup_tell
        }

        const data = await postDataEndPoint('api/responsibles/signUp/', formData, setError, setIsLoading)
        if (data?.ResponsibleType) {
            setShow(false)
        }
        console.log(data)
    };


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
                    <HeadingTitle title="Add Responsible" />
                    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ rowGap: 25 }} showsVerticalScrollIndicator={false}>
                        <Formik
                            initialValues={{ patientID: "", name: "", age: "", tell: "", sex: "", password: "", backup_tell: "", ResponsibleType: "", email: "" }}
                            onSubmit={handleLogin}
                            validationSchema={validationSchema}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View style={{ rowGap: 15, height: "100%" }}>
                                    {touched.patientID && errors.patientID && <Text style={{ color: "red" }}>{errors.patientID}</Text>}
                                    <TextField
                                        placeHolder="PatientId"
                                        label="PatientId"
                                        style={styles.input}
                                        onChangeText={handleChange('patientID')}
                                        onBlur={handleBlur('patientID')}
                                        value={values.patientID}
                                        placeholder="PS089"
                                    />
                                    {touched.ResponsibleType && errors.ResponsibleType && <Text style={{ color: "red" }}>{errors.ResponsibleType}</Text>}
                                    <TextField
                                        placeHolder="Responsible Type"
                                        label="Responsible Type"
                                        style={styles.input}
                                        onChangeText={handleChange('ResponsibleType')}
                                        onBlur={handleBlur('ResponsibleType')}
                                        value={values.ResponsibleType}
                                        placeholder="Parent"
                                    />
                                    {touched.email && errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
                                    <TextField
                                        placeHolder="Email"
                                        label="Email"
                                        style={styles.input}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder="y@y.com"
                                        keyboardType='email-address'
                                    />
                                    {touched.name && errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
                                    <TextField
                                        placeHolder="Name"
                                        label="Name"
                                        style={styles.input}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        placeholder="Yusuf Ahmed Shire"
                                    />
                                    {touched.age && errors.age && <Text style={{ color: "red" }}>{errors.age}</Text>}
                                    <TextField
                                        placeHolder="Age"
                                        label="Age"
                                        onChangeText={handleChange('age')}
                                        onBlur={handleBlur('age')}
                                        value={values.age}
                                        placeholder="25"
                                        keyboardType='number-pad'
                                    />
                                    {touched.tell && errors.tell && <Text style={{ color: "red" }}>{errors.tell}</Text>}
                                    <TextField
                                        placeHolder="Tell"
                                        label="Tell"
                                        onChangeText={handleChange('tell')}
                                        onBlur={handleBlur('tell')}
                                        value={values.tell}
                                        placeholder="061234484"
                                        keyboardType='number-pad'
                                    />
                                    {touched.backup_tell && errors.backup_tell && <Text style={{ color: "red" }}>{errors.backup_tell}</Text>}
                                    <TextField
                                        placeHolder="Backup Numer"
                                        label="Backup Tell"
                                        onChangeText={handleChange('backup_tell')}
                                        onBlur={handleBlur('backup_tell')}
                                        value={values.backup_tell}
                                        placeholder="061234484"
                                        keyboardType='number-pad'

                                    />
                                    {touched.sex && errors.sex && <Text style={{ color: "red" }}>{errors.sex}</Text>}
                                    <TextField
                                        placeHolder="Sex"
                                        label="Sex"
                                        onChangeText={handleChange('sex')}
                                        onBlur={handleBlur('sex')}
                                        value={values.sex}
                                        placeholder="Male"
                                    />

                                    <CustomButton title='Register' onPress={() => {
                                        handleSubmit()
                                    }} />
                                </View>
                            )}
                        </Formik>
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
        height: "90%",
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

export default AddResponsible;