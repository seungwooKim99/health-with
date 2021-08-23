import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants';
import Line3 from '../components/Line3';
import Tag from '../components/Tag';
import Line2 from '../components/Line2';
import { FontAwesome } from '@expo/vector-icons';

const Workout = ({ route }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  


    // 임시
    const [DATA,setDATA] = useState([])
    // const [DATA,setDATA] = useState([
    //     {
    //         title: '랫풀다운',
    //         tag: [{name:'등',color:COLORS.tag_orange}],
    //         data: [
    //             {rep: 10, weight: 40, time: null},
    //             {rep: 10, weight: 40, time: null},
    //             {rep: 10, weight: 40, time: null},
    //             {rep: 10, weight: 40, time: null},
    //             {rep: 10, weight: 40, time: null}
    //         ]
    //     },
    //     {
    //         title: '데드리프트',
    //         tag: [{name:'등',color:COLORS.tag_darkblue},{name:'하체',color:COLORS.tag_purple}],
    //         data: [
    //             {rep: 10, weight: 80, time: null},
    //             {rep: 10, weight: 80, time: null},
    //             {rep: 10, weight: 80, time: null},
    //             {rep: 10, weight: 80, time: null},
    //             {rep: 10, weight: 100, time: null},
    //         ]
    //     }
    // ])

    const [value, onChangeText] = useState('')

    const onEndEditing = () => {
        console.log('edit finished')
    }

    function fetchData(){
        // get data from local storage
        console.log('fetchData')
    }

    useEffect(()=> {
        // 처음 마운트 되었을 때 넘어온 id로 local storage에서 get.
        const {itemId} = route.params;
        //console.log(itemId)

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
    function renderHeader(){
        return(
            <>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <TextInput
                        style={{ fontSize:SIZES.h4,fontFamily:'RobotoBold'}}
                        onChangeText={onChangeText}
                        value={value}
                        autoFocus={true}
                        placeholder='제목'
                        onEndEditing={()=>onEndEditing()}
                        autoCompleteType='off'
                        autoCorrect={false}
                    />
                    <TouchableOpacity><Tag name='+ 태그추가' color={COLORS.primary}></Tag></TouchableOpacity>
                </View>
                <Line2/>
            </>
        )
    }

    function renderBody(){
        return(
            <>
            <View style={{margin:'3%'}}>
                <View style={styles.rowcontainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily:'RobotoRegular',fontSize:SIZES.body4}}>아이콘</Text>
                        <Text style={{fontFamily:'RobotoRegular',fontSize:SIZES.body4}}>고급기능</Text>
                    </View>
                    <Switch
                        trackColor={{true:COLORS.primary}}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{transform: [{ scaleX: .8 }, { scaleY: .8 }]}}
                    />
                </View>
                <View style={styles.rowcontainer}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome
                        name="arrow-right"
                        backgroundColor={COLORS.transparent}
                        color={COLORS.primary}
                        style={{transform: [{ scaleX: 1.2 }, { scaleY: 1 }]}}
                        />
                        <Text style={[styles.text,{marginLeft:SIZES.padding2*2}]}>1세트</Text>
                    </View>
                    <Text style={styles.text}>20kg</Text>
                    <Text style={styles.text}>10회</Text>
                    <TouchableOpacity><Text style={{color:COLORS.primary, fontSize:SIZES.body1,fontFamily:'RobotoBold',marginRight:'3%'}}>-</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', alignItems:'center',marginTop:SIZES.padding}}>
                    <FontAwesome
                    name="plus"
                    backgroundColor={COLORS.transparent}
                    color={COLORS.primary}
                    style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
                    />
                    <TouchableOpacity>
                    <Text style={{marginLeft:SIZES.padding2*2,fontSize:SIZES.body3,fontFamily:'RobotoRegular',color:'#C4C4C6'}}>세트추가</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Line3/>
            </>
        )
    }

    function renderForm(){
        return(
            <>
            {renderHeader()}
            {renderBody()}
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{margin:'5%',}}>
                    {renderForm()}
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
    rowcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        fontFamily:'RobotoRegular',
        fontSize:SIZES.body3
    }
})

export default Workout;