import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";
import favicon from '../assets/favicon.png'

const Workout = ({ route }) => {

    const [workout, setWorkout] = useState(null)

    // useEffect(()=> {
    //     // 처음 마운트 되었을 때 수정인지 아닌지 판단하려면 넘어온 props를 통해 체크 필요함.
    //     console.log('Workout Page 마운트')
    //     const {itemId} = route.params;
    //     console.log(itemId)
    //     setWorkout(itemId)

    //     // 이후 작업

    //     // 화면을 나갈 때 변경사항이 있는지 체크(저장할 경우 data가 바뀌므로)
    //     return () => {
    //         console.log('Workout Page 언마운트, cleanup 및 저장 필요')
    //         // 저장인지 그냥 나가는건지 체크하는 함수로 작업
    //     }
    // }, []);

    // function renderHeader() {
    //     return(
    //         <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
    //             {/* go back button */}
    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingLeft: 15,
    //                     justifyContent: 'center'
    //                 }}
    //                 onPress={()=>navigation.goBack()}
    //             >
    //                 <Image
    //                     source={favicon}
    //                     resizeMode='contain'
    //                     style={{
    //                         width:30,
    //                         height: 30
    //                     }}
    //                 />
    //             </TouchableOpacity>

    //             {/* Page title Part */}
    //             <View style={styles.primary}>
    //                 <View style= {{
    //                     width: "70%",
    //                     height: 40,
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 paddingHorizontal: 10,
    //                 borderRadius: 30,
    //                 backgroundColor: 'gray'
    //                 }}>
    //                     <Text>Workout</Text>
    //                 </View>
    //             </View>

    //             {/* 저장 버튼 */}
    //             <TouchableOpacity
    //                 style={{
    //                     width: 50,
    //                     paddingRight: 15,
    //                     justifyContent: 'center'
    //                 }}
    //                 onPress={()=>navigation.goBack()}
    //             >
    //                 <Text style={{color: 'tomato'}}>저장</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    return (
        <SafeAreaView style={styles.container}>
            {/*renderHeader()*/}
            <Text>Workout</Text>
            <Text>item id : {workout}</Text>
            <Text>item id는 해당 workout id나 date id 둘 중 하나만 있으면 될 듯</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    primary: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Workout;