import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Button, ScrollView, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";

const Tag = ({name,color}) => {
        return(
            <TouchableOpacity style={styles.container}>
                <View style={{backgroundColor:color, borderRadius:SIZES.radius}}>
                    <Text style={styles.tag}>{name}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default Tag;

const styles = StyleSheet.create({
    tag:{
        color: COLORS.lightWhite,
        fontFamily:'RobotoBold',
        fontSize:SIZES.body4,
        textAlign:'center',
        padding:"0.5%",
        paddingRight:"2%",
        paddingLeft:"2%"
    },
    container:{
        paddingLeft: SIZES.base/2,
    }
  });