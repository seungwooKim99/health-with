import React from "react";
import { View} from "react-native";
import { COLORS, SIZES } from "../constants";

const Line2 = () => {
    return(
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: COLORS.gray,
                marginTop:SIZES.padding/2
            }}
        />
    )
}

export default Line2;