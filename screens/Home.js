import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";

const Home = ( {navigation} ) => {
  // function renderHeader() {
  //   return (
  //     <View style={{ flexDirection: "row", height: 40, backgroundColor: 'white' }}>
  //       <View
  //         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
  //       >
  //         <View style={styles.header}>
  //           <Text>캘린더</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // }

  function renderCalendar() {
    return (
      <View style={{flex: 1}}>
        <Text>캘린더</Text>
      </View>
    )
  }

  function renderSchedule() {
    return (
      <View style={{flex: 1}}>
        <Text>스케줄</Text>
        <Button
          onPress={() => navigation.navigate("Workout", {
            itemId: 80
          })}
          title="수정 / 추가 탭"
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*renderHeader()*/}
      {renderCalendar()}
      {renderSchedule()}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "70%",
    height: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 30    
  }
});

export default Home;
