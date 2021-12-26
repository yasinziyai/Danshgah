import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import UserIcon from "../components/UserIcon";
import IdCard from "../components/IdCard";
import AdressCard from "../components/AdressCard";
import { Button } from "react-native-web";

export default function App(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "./gi.jpg" }}
        style={{
          width: "100vw",
          height: "100vh",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 100,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="./logo.png"
            style={{
              width: 230,
              height: 345,
            }}
          />

          <Text
            style={{
              fontSize: 22,
              marginTop: 20,
              color: "#0E3150",
            }}
          >
            سیستم مدیریت دوره های کارکنان
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: 420,
            minHeight: 450,
            borderRadius: 10,
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            paddingBottom: 40,
          }}
        >
          <Text
            style={{
              fontSize: 37,
              color: "#E5386D",
              fontWeight: 700,
            }}
          >
            اطلاعات کارکنان
          </Text>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                borderBottomWidth: 2,
              }}
            >
              <UserIcon width={18} />
              <TextInput
                style={{
                  direction: "rtl",
                  width: 300,
                }}
                placeholder="نام و نام خانوادگی"
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderBottomWidth: 1,
              }}
            >
              <IdCard width={18} />
              <TextInput
                style={{
                  direction: "rtl",
                  width: 300,
                }}
                placeholder="کد پرسنلی"
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                borderBottomWidth: 1,
              }}
            >
              <AdressCard width={18} />
              <TextInput
                style={{
                  direction: "rtl",
                  width: 300,
                }}
                placeholder="شماره ملی"
              />
            </View>
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E5386D",
                width: 120,
                height: 30,
                marginTop: 30,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>جست جو</Text>
            </Pressable>
            <a style={{ color: "red", marginTop: 20 }}>ثبت دوره جدید</a>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
});
