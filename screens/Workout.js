import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import favicon from '../assets/favicon.png'
import { SIZES } from '../constants';
import Line3 from '../components/Line3';

const Workout = ({ route }) => {

    const [workout, setWorkout] = useState(null)

    const [value, onChangeText] = React.useState('');

    const onEndEditing = () => {
        console.log('edit finished')
    }
    

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

    function renderFormTitle (){
        return(
            <>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TextInput
                    style={{ fontSize:SIZES.h4,fontFamily:'RobotoBold'}}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    autoFocus={true}
                    placeholder='제목'
                    onEndEditing={()=>onEndEditing()}
                    autoCompleteType='off'
                />
                <TouchableOpacity>
                    <Text>불러오기</Text>
                </TouchableOpacity>
            </View>
            <Line3/>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{margin:'5%',}}>
                    {renderFormTitle()}
                </View>
            </ScrollView>
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