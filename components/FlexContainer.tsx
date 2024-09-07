import {View} from "react-native";
import {ThemedView} from "./ThemedView";
import React from "react";

type FlexContainerProps = any;

export function FlexContainer({
  children,
  style,
  flex,
  flexDirection = "row",
  // TODO: create enum for defined alignment/justify types
  // and default these values
  justifyContent,
  alignItems
}: FlexContainerProps) {
    return (
        <ThemedView style={{
            flex,
            flexDirection,
            justifyContent,
            alignItems,
            backgroundColor: 'transparent',
            ...style
        }}>
            {children}
        </ThemedView>
    );
}