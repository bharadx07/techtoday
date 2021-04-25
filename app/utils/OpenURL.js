import { Linking } from "react-native";

const openURL = (url) => {
  try {
    Linking.openURL(url);

    return {
      success: true,
      message: "Opened Link",
    };
  } catch (err) {
    return {
      success: false,
      message: err,
    };
  }
};




export default openURL