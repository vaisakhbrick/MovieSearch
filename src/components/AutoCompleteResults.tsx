import { TouchableOpacity, FlatList, StyleSheet } from "react-native";
import GenericText from "./Atoms/GenericText";
import { FC } from "react";
import Spacer from "./Atoms/Spacer";

type ResultProps = {
    result: string[]
    searchMovie: (x: string) => {}
}

const AutoResults: FC<ResultProps> = ({ result, searchMovie }) => {

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity onPress={() => searchMovie(item)}>
            <GenericText>{item}</GenericText>
        </TouchableOpacity>
    );


    return (
        result.length ? <FlatList
            data={result}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            style={style.flatlist}
            ItemSeparatorComponent={() => <Spacer />}
        />
            :
            null
    );

}

const style = StyleSheet.create({
    flatlist: {
        height: '20%',
        backgroundColor: 'grey'
    }
})

export default AutoResults