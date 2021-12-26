import { useState } from "react";
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
import Table from "../components/Table";
export default function () {
  let [State, Setstate] = useState([
    {
      Number: "1",
      Id: "123456",
      Title: "آشنایی با تفسیر سوره حمد با محوریت تفسیر امام خمینی(ره)",
      Time: "16",
      Type: "مجازی",
      Host: "واحد الکترونیکی",
      Date: "81/1/16",
      Finalscore: "بدون ازمون",
      Finalresult: "قبول",
    },
  ]);
  return (
    <ImageBackground
      source={{ uri: "./gi.jpg" }}
      style={styles.ImageBackground}
    >
      <View style={styles.app}>
        <View
          style={{
            width: "100%",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 36, color: "#E5386D", fontWeight: 700 }}>
              دوره های گذرانده شده
            </Text>
            <Pressable
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#E5386D",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 14 }}>
                ثبت دوره جدید
              </Text>
            </Pressable>
          </View>
          <a style={{ color: "#E5386D" }}>بازگشت</a>
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "flex-start",
            width: 920,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "#0E3150", fontSize: 19 }}>
            خانم/اقای معین دانش ارا با کد پرسنلی12345
          </Text>
        </View>
        {State.map((Item) => (
          <Table
            Number={Item.Number}
            Id={Item.Id}
            Title={Item.Title}
            Time={Item.Time}
            Type={Item.Type}
            Host={Item.Host}
            Date={Item.Date}
            Finalscore={Item.Finalscore}
            Finalresult={Item.Finalresult}
          />
        ))}
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ImageBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
  app: {
    alignItems: "center",
    justifyContent: "center",
    width: 1015,
    height: 500,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "column",
  },
});
