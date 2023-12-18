import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/auth/auth.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);

      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

// const permisionFunction = async () => {
//   // here is how you can get the camera permission
//   const cameraPermission = await Camera.requestPermissionsAsync();

//   setCameraPermission(cameraPermission.status === 'granted');

//   const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
//   console.log(imagePermission.status);

//   setGalleryPermission(imagePermission.status === 'granted');

//   if (
//     imagePermission.status !== 'granted' &&
//     cameraPermission.status !== 'granted'
//   ) {
//     alert('Permission for media access needed.');
//   }
// };

// import { Linking } from "react-native";
// import { useCameraPermissions } from "expo-image-picker";

// export default function App() {

//     const [status, requestPermissions] = useCameraPermissions();

//     const requestPermissionAgain = () => {
//         Linking.openSettings();
//     }

//     useEffect(() => {
//         if (!status?.granted) requestPermissions();
//     }, []);
// }
