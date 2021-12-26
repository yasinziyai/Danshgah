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
import AddressCard from "../components/AdressCard";
import BookMark from "../components/BookMark";
import Book from "../components/Book";
import Clock from "../components/Clock";
import Adjust from "../components/Adjust";
import Hotel from "../components/Hotel";
import CalendarAlt from "../components/CalendarAlt";
import Star from "../components/Star";
import FontAwesome from "../components/FontAwesome";
export default function () {
  return (
    <View style={StyleSheet.wrapper}>
      <ImageBackground
        source={{ uri: "./gi.jpg" }}
        style={{
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.app}>
          <View
            style={{
              width: "100%",
              alignItems: "center",

              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <a style={{ color: "#E5386D" }}> بازگشت</a>
            <Text style={{ fontSize: 30, color: "#E5386D", fontWeight: 600 }}>
              ثبت دوره جدید
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "center",
              borderBottomWidth: 1,
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
                backgroundColor: "#0E3150",
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  right: 45,
                  backgroundColor: "white",
                  color: "#0E3150",
                  fontSize: 13,
                }}
              >
                اطلاعاتپرسنلی
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 30,
              width: "100%",
            }}
          >
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <AddressCard width={18} />
              <TextInput style={{ direction: "rtl" }} placeholder="شماره ملی" />
            </View>
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <IdCard width={18} />
              <TextInput style={{ direction: "rtl" }} placeholder="کد پرسنلی" />
            </View>
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <UserIcon width={18} />
              <TextInput
                style={{
                  direction: "rtl",
                  color: "#0E3150",
                }}
                placeholder="نام و نام خانوادگی"
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              width: "100%",
              marginTop: 50,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <Text
              style={{
                backgroundColor: "white",
                position: "absolute",
                right: 45,
              }}
            >
              اطلاعات دوره
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 50,
            }}
          >
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <Clock width={15} />
              <TextInput style={{ direction: "rtl" }} placeholder="ساعت دوره" />
            </View>
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <Book width={15} />
              <TextInput
                style={{ width: 550, direction: "rtl" }}
                placeholder="نام دوره"
              />
            </View>
            <View
              style={{ flexDirection: "row-reverse", borderBottomWidth: 1 }}
            >
              <BookMark width={18} />
              <TextInput style={{ direction: "rtl" }} placeholder="شناسه" />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",

                borderBottomWidth: 1,
              }}
            >
              <Adjust width={15} />
              <TextInput style={{ direction: "rtl" }} placeholder="نوع دوره" />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",

                borderBottomWidth: 1,
              }}
            >
              <Hotel width={15} />
              <TextInput style={{ direction: "rtl" }} placeholder="میزبان " />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",

                borderBottomWidth: 1,
              }}
            >
              <CalendarAlt width={15} />
              <TextInput
                style={{ direction: "rtl" }}
                placeholder="تاریخ نهایی "
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",

                borderBottomWidth: 1,
              }}
            >
              <Star width={15} />
              <TextInput
                style={{ direction: "rtl" }}
                placeholder=" نمره نهایی"
              />
            </View>
            <View
              style={{
                flexDirection: "row-reverse",

                borderBottomWidth: 1,
              }}
            >
              <FontAwesome width={15} />
              <TextInput
                style={{ direction: "rtl" }}
                placeholder="نتیجه نهایی "
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Pressable
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E5386D",
                width: 200,
                height: 40,
                marginTop: 35,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>ثبت اطلاعات</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  app: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 1015,
    height: 500,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "column",
  },
});
