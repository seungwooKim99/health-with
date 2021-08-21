import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Button, ScrollView, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../constants";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

// const temp = [
//     {
//       session_title: '',
//       tag: [''],
//       data: [
//         {weight: '',rep:''},
//       ]
//     }
// ];

function fetchData (sessionTitle,sessionBody){
    // put data into DATA array and render it to list
    console.log(sessionTitle)
}

const Item = ({ item, onPress, style }) => (
<TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
</TouchableOpacity>
);


const WorkoutCard = ({sessionTitle, sessionBody}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

        return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
    };

    useEffect(()=>{
        fetchData(sessionTitle,sessionBody)
    },[])

    return (
        <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
        />
        </View>
    );
}

export default WorkoutCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });