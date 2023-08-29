import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 400,
        }}
      >
        <Pressable style={{ marginTop: 15 }}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"700",color:"black"}}>Welcome</Text>
                <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              color: "gray",
              textAlign: "center",
              marginLeft:5,
            }}
          >
             {user.email}
          </Text>
            </View>
         
        </Pressable>

        <Pressable style={{ marginTop: 15 }} onPress={signOutUser}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              color: "gray",
              textAlign: "center",
            }}
          >
            Sign Out
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
