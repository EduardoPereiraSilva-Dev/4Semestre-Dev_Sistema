import { HeaderStyles } from "./HeaderStyle"
import { Text, View } from "react-native"

export const Header = () => {
    return (
        <View style={HeaderStyles.header}>

            <Text style={HeaderStyles.headerTitle}>React List</Text>
        </View >
    )
}

