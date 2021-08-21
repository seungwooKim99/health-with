import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";

import Tag from "./Tag";

const WorkoutCard = ({sessionTitle, sessionBody}) => {
    const [DATA,setDATA] = useState([])

    const onPress = () => {
        console.log('hello')
    }


    function fetchData (sessionTitle,sessionBody){
        //console.log(sessionTitle[0].tag)
        // put data into DATA array and render it to list
        for(let i=0;i<sessionTitle.length;i++){
            let obj = {}
            obj=sessionBody[i]
            obj.tag=sessionTitle[i].tag

            setDATA(prevArr => [...prevArr, obj])
        }
    }

    //fetch data only mount - data 바뀔 일이 없음
    useEffect(()=>{
        fetchData(sessionTitle,sessionBody)
    },[])

    function rendersets(item) {
        return item.data.map((data,index)=>{
            console.log(data)
            return(
                <View key={index} style={{flexDirection:'row'}}>
                    <Text>{index + 1}세트</Text>
                    <Text>{data.weight}kg</Text>
                    <Text>{data.rep}회</Text>
                </View>
            )
        })
    }

    return DATA.map((item,index)=>{
        //console.log(item)
        return(
            <View key={index} style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.item}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Tag tag={item.tag}></Tag>
                    </View>
                    <View>
                        {rendersets(item)}
                    </View>
                </TouchableOpacity>
            </View>
        )
    })

}

export default WorkoutCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: COLORS.skyBlue,
      padding: 20,
      marginBottom: 8,
      borderRadius: SIZES.radius,
      marginHorizontal: 10
    },
    title: {
      fontSize: SIZES.h4,
      fontFamily: 'RobotoBlack',
      paddingRight: SIZES.padding
    },
  });