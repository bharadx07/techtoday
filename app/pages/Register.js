import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import {Formik} from "formik"

const Register = () => {
  return (
    <Formik
     initialValues={{ email: '', password: '', name: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
        <Text>Logo soon</Text>
        <Text>Welcome</Text>
        <Text>Register to TechToday to Continue</Text>
        <Text>Name</Text>
         <TextInput
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
         />
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
         <Button onPress={handleSubmit} title="Submit" />
         <Text>Allready have an account?<Text>
Login</Text></Text>
       </View>
     )}
   </Formik>
  )
}

export default Register
