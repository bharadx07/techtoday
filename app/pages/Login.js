import React from 'react';
 import { Button, TextInput, View } from 'react-native';
 import { Formik } from 'formik';

const Login = () => {
  return (
    <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <Text>Image soon</Text>
         <Text>Welcome</Text>
         <Text>Login to TechToday to Continue</Text>
         
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
  );
};

export default Login;
