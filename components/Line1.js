import React from "react";
import { View} from "react-native";
import { COLORS, SIZES } from "../constants";

const Line1 = () => {
    return(
        <View
            style={{
                height: 1,
                width: SIZES.width/10,
                backgroundColor: COLORS.lightPrimary,
            }}
        />
    )
}

export default Line1;