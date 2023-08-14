import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, useWindowDimensions, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { postDataEndPoint } from '../../../api/post';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoader from '../../../components/molecules/appLoader';
const Login = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [toggleInput, setToggleInput] = useState(false)
    const handleLogin = async (values) => {
        // Handle login logic here
        setIsLoading(true)
        const data = await postDataEndPoint('api/auth/admin/sign-in/', values, setError, setIsLoading)
        if (data?.accessToken) {
            await AsyncStorage.setItem('token', data?.accessToken)
            navigation.navigate('bottomTabs', { screen: 'homeStack' })
            setIsLoading(false)
        }
        if (data?.success == false) {
            setIsLoading(false)
            setError(data?.message)
            setTimeout(() => {
                setError(null)
            }, 2000)
        }

    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    return (
        <View style={styles.container}>
            {
                error && (
                    <Text style={{ textAlign: "center", fontWeight: "400", fontSize: 15, marginVertical: 15, color: "red" }}>{error}</Text>
                )
            }
            <Text style={{ textAlign: "center", fontSize: 19, fontWeight: "500", marginBottom: 50 }}>Admin Dashboard</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            secureTextEntry={toggleInput}
                            right={<TextInput.Icon onPress={() => {
                                setToggleInput(!toggleInput)
                            }} icon={toggleInput ? "eye" : "eye-off"} />}
                        />

                        {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                        <Button title="Login" onPress={handleSubmit} />
                        {/* <View style={{ alignItems: "flex-end", marginVertical: 10 }}>
                            <Pressable onPress={() => alert('hello')}>
                                <Text style={{ color: "blue" }}>Sign up</Text>
                            </Pressable>
                        </View> */}
                    </View>
                )}
            </Formik>
            {
                isLoading &&
                <AppLoader />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
});

export default Login;