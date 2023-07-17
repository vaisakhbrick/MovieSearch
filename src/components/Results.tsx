import { TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import GenericText from "./Atoms/GenericText";
import { SearchResponse } from "../types/types";
import { FC } from "react";
import Card from "./Atoms/Card";
import Spacer from "./Atoms/Spacer";

type ResultProps = {
    result: SearchResponse[]
}

const Results: FC<ResultProps> = ({ result }) => {

    const renderItem = ({ item }: { item: SearchResponse }) => (
        <TouchableOpacity>
            <Card row >
                <Image source={{ uri: item.Poster }} style={{ width: 50, height: 75 }} />
                <Card>
                    <GenericText>{item.Title}</GenericText>
                    <GenericText>{item.Year}</GenericText>
                </Card>

            </Card>
        </TouchableOpacity>
    );

    return (
        result.length ? <FlatList
            data={result}
            renderItem={renderItem}
            keyExtractor={(item) => item.imdbID}
            style={style.flatlist}
            ItemSeparatorComponent={() => <Spacer />}
        />
            :
            null
    );

}

const style = StyleSheet.create({
    flatlist: {
        height: '60%',
        backgroundColor: 'grey'
    }
})

export default Results