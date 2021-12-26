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
export default function ({
  Number,
  Id,
  Title,
  Time,
  Type,
  Host,
  Date,
  Finalscore,
  Finalresult,
}) {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#0E3150",
          paddingHorizontal: 10,
          height: 30,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white" }}>#</Text>
        <Text style={{ color: "white" }}>شناسه</Text>
        <Text style={{ color: "white" }}>عنوان</Text>
        <Text style={{ color: "white" }}>ساعت</Text>
        <Text style={{ color: "white" }}>نوع</Text>
        <Text style={{ color: "white" }}>میزبان</Text>
        <Text style={{ color: "white" }}>تاریخ</Text>
        <Text style={{ color: "white" }}>نمره نهایی</Text>
        <Text style={{ color: "white" }}>نتیجه نهایی</Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#0E31501A",
          paddingHorizontal: 10,
          height: 30,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#0E3150" }}>{Number}</Text>
        <Text style={{ color: "#0E3150" }}>{Id}</Text>
        <Text style={{ color: "#0E3150" }}>{Title}</Text>
        <Text style={{ color: "#0E3150" }}>{Time}</Text>
        <Text style={{ color: "#0E3150" }}>{Type}</Text>
        <Text style={{ color: "#0E3150" }}>{Host}</Text>
        <Text style={{ color: "#0E3150" }}>{Date}</Text>
        <Text style={{ color: "#0E3150" }}>{Finalscore}</Text>
        <Text style={{ color: "#0E3150" }}>{Finalresult}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    width: 920,
    alignItems: "center",
    justifyContent: "center",
  },
});
