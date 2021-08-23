import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import favicon from '../assets/favicon.png'
import { COLORS, SIZES } from '../constants';
import Line3 from '../components/Line3';
import Tag from '../components/Tag';

const Workout = ({ route }) => {

    // 임시
    const [DATA,setDATA] = useState([
        {
            title: '랫풀다운',
            tag: [{name:'등',color:COLORS.tag_orange}],
            data: [
                {rep: 10, weight: 40, time: null},
                {rep: 10, weight: 40, time: null},
                {rep: 10, weight: 40, time: null},
                {rep: 10, weight: 40, time: null},
                {rep: 10, weight: 40, time: null}
            ]
        },
        {
            title: '데드리프트',
            tag: [{name:'등',color:COLORS.tag_darkblue},{name:'하체',color:COLORS.tag_purple}],
            data: [
                {rep: 10, weight: 80, time: null},
                {rep: 10, weight: 80, time: null},
                {rep: 10, weight: 80, time: null},
                {rep: 10, weight: 80, time: null},
                {rep: 10, weight: 100, time: null},
            ]
        }
    ])

    const [value, onChangeText] = useState('')

    const onEndEditing = () => {
        console.log('edit finished')
    }

    function fetchData(){
        // get data from local storage
        console.log('hello')
    }

    useEffect(()=> {
        // 처음 마운트 되었을 때 넘어온 id로 local storage에서 get.
        const {itemId} = route.params;
        console.log(itemId)

        if (itemId === 2){
            // no item id, 새로 작성하는 경우
            console.log('생성')
        }else{
            // get data from local storage
            console.log('수정')
            fetchData(itemId)
        }
        // 화면을 나갈 때 변경사항이 있는지 체크(저장할 경우 data가 바뀌므로)
        return () => {
            console.log('Workout Page 언마운트')
        }
    }, []);

    // function renderAll(){
    //     return DATA.map((item,index)=>{
    //         return(
    //             <View key={index}>
    //                 {renderFormTitle(item,index)}
    //             </View>
    //         )
    //     })
    // }

    // function renderFormTitle (item,index){
    //     return(
    //         <>
    //         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    //             <TextInput
    //                 style={{ fontSize:SIZES.h4,fontFamily:'RobotoBold'}}
    //                 onChangeText={text => setDATA(prevArr => [...prevArr,prevArr[index].title=text])}
    //                 value={item.title}
    //                 autoFocus={true}
    //                 placeholder='제목'
    //                 onEndEditing={()=>onEndEditing()}
    //                 autoCompleteType='off'
    //                 autoCorrect={false}
    //             />
    //             {item.tag?<>
    //                     <View style={{flexDirection:'row',alignItems:'center'}}>
    //                         <Tag tag={item.tag}></Tag>
    //                         <TouchableOpacity style={{paddingLeft: SIZES.base/2}}>
    //                         <View style={{backgroundColor:COLORS.primary, borderRadius:SIZES.radius}}>
    //                             <Text style={styles.tag}>태그 추가</Text>
    //                         </View>
    //                     </TouchableOpacity>
    //                     </View>
                        
    //                 </>:
    //             <TouchableOpacity><Text>불러오기</Text></TouchableOpacity>
    //             }
    //         </View>
    //         <Line3/>
    //         </>
    //     )
    // }

    function renderForm(){
        return(
            <Text>hello</Text>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{margin:'5%',}}>
                    {DATA.map(renderForm)}
                    {/* <>
                        {schedule === 1 ? renderAll() : renderFormTitle(null,null)}
                    </> */}
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
    },
    tag:{
        color: COLORS.lightWhite,
        fontFamily:'RobotoBold',
        fontSize:SIZES.body4,
        textAlign:'center',
        padding:"0.5%",
        paddingRight:"2%",
        paddingLeft:"2%"
    },
})

export default Workout;