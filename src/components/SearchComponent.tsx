import { useState } from "react";
import GenericInput from "./Atoms/GenericInput";
import { AppDesignConstants, AppStrings } from "../constants/Constants";
import Card from "./Atoms/Card";
import useMovieSearch from "../hooks/useMovieSearch";
import Results from "./Results";
import Spacer from "./Atoms/Spacer";
import AutoResults from "./AutoCompleteResults";




const SearchComponent = ({ }) => {

    const { query, searchState, actions } = useMovieSearch()

    return (
        <Card pLeft={AppDesignConstants.medium} pRight={AppDesignConstants.medium}>
            <GenericInput
                placeholder={AppStrings.SearchPlaceholder}
                height={AppDesignConstants.standardInputSize}
                value={query}
                onChangeText={actions.setQuery}
                autoCapitalize={"none"}
            />
            <Spacer height={AppDesignConstants.xss} />
            <AutoResults result={searchState.autoCompleteResult} searchMovie={actions.searchMovie} />
            <Results result={searchState.result} />
        </Card>
    );
}


export default SearchComponent