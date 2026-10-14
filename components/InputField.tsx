import React from "react"
import {View, Text, TextInput, StyleSheet, TextInputProps,} from "react-native"
import { colors } from "../constants/colors";

interface InputFieldProps extends TextInputProps {
    label: string;
    error ?: string;
}

export const InputField = ({ label, error, ...props }: InputFieldProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, error && styles.inputError]}
            placeholderTextColor={colors.text}
            {...props}/>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.surface,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 8,
        padding:12,
        fontSize: 16,
        backgroundColor: colors.surface,
        color: colors.text,
    },
    inputError: {
        borderColor: colors.background,
    },
    errorText: {
        color: colors.surface,
        fontSize: 12,
        marginTop: 4,
    },
});