import React from "react";
import {TouchableOpacity, Text, StyleSheet, ViewStyle,} from "react-native";
import { colors } from "../constants/colors";

interface NavigationButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "danger";
    style?: ViewStyle;
}

export const NavigationButton = ({
    title, 
    onPress,
    variant = "primary",
    style,
}: NavigationButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, styles[variant], style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text
                style={[
                    styles.text,
                    variant !== "primary" && styles.textSecondary,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        padding:16,
        borderRadius:8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:8,
    },
    primary: {
        backgroundColor: colors.surface,
    },
    secondary: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: colors.surface,
    },
    danger: {
        backgroundColor: colors.background,
        borderWidth: 2,
        borderColor: colors.surface,
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "600",
    },
    textSecondary: {
        color: colors.surface,
    },
});