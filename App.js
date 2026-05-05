import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./src/components/atoms/box.atom";
import { OverView } from "./src/components/pages/OverViewPage";

export default function App() {
  return (
    <Box>
      <OverView />
    </Box>
  );
}
