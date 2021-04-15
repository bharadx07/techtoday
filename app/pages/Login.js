import React from 'react';
 import { Button, TextInput, View, Text } from 'react-native';
 import { Formik } from 'formik';
 
const Login = props => (
   <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
        <Text>Logo soon</Text>
        <Text>Welcome</Text>
        <Text>Login to TechToday to Continue</Text>
        <Text>Email Address</Text>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Text>Password</Text>
         <TextInput
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         />
         <Text>Forgot Password</Text>
         <Button onPress={handleSubmit} title="Login" />
         <Text>Dont have an account?
<Text>Register</Text></Text>
       </View>
     )}
   </Formik>
 );

export default Login