import { Card } from "@rneui/base";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { RESTURAUNTS } from "../shared/RESTURAUNTS";
import { useState } from "react";

const ResturauntListScreen = () => {
    const [resturaunts, setResturaunts] = useState(RESTURAUNTS);

    //I don't know why yet, but I think item: unpacks all the items from an object instead of individual destructuring...?
    const renderListItem = ({ item: resturaunts }) => {
        return (
            <Card>
                <Card.Title>{resturaunts.name}</Card.Title>
                <Card.Divider />
                <View>
                    <Text>{resturaunts.description}</Text>
                </View>
            </Card>
        );
    };

    return (
        <FlatList
            data={resturaunts}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default ResturauntListScreen;