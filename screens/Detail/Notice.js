import React from 'react';
import { View, Text } from "react-native";

const Notice = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>공지사항</Text>
        </View>
    );
};

export default Notice