import {LinearGradient} from "expo-linear-gradient";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./styles";

export interface IButtonProps {
    onPress?: () => void,
    title: string,
    style?: string,
}

export default function Button(props: IButtonProps) {
    const {title} = props;
    return (
        <TouchableOpacity>
            <LinearGradient
                colors={['#FF8C00', '#FFA300']}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}