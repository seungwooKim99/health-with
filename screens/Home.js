import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import CalendarBase from "../components/Calendar";

const Home = ( {navigation} ) => {

  function renderCalendar() {
    return (
      <View style={{flex: 1}}>
        <CalendarBase/>
      </View>
    )
  }

  function renderSchedule() {
    return (
      <View>
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
      {renderCalendar()}
      {renderSchedule()}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Home;
