import { useState } from "react"
import { AutoCompleteResponse, SearchState } from "../types/types"
import debounce from 'lodash.debounce';
import instance from "../networking/BaseClient";
import { OMDB_API_KEY, autoCompleteSuggestionBaseUrl } from "../constants/Constants";




/*

Have used datamuse API to mock autocomplete search  feature...
Basically it will give all combinations of a word with its +1 letter variations(for demo purpose)
On click of autocompleted suggestion movie suggestions will popup

*/


export default () => {

    const initialState: SearchState = {
        result: [],
        autoCompleteResult: []
    }

    //other options include using useReducer/or Redux/Context ..used minimal state management since use case is minimal
    const [query, setSearchQuery] = useState<string>('')
    const [searchState, setSearchState] = useState<SearchState>(initialState)

    const setQuery = (q: string) => {
        setSearchQuery(q)
        if (q.length > 3) {
            debouncedAutoCompleteSearchResult(q)
        } else {
            setSearchState({
                ...searchState,
                result: [],
                autoCompleteResult: []
            })
        }
    }

    //Applying debounce to handle the API call after a certain delay so that multiple request wont be send
    const debouncedAutoCompleteSearchResult = debounce(async (searchQuery: string) => {
        try {
            const response = await instance.get(
                `${autoCompleteSuggestionBaseUrl}words?sp=${searchQuery}?`
            );
            let result = response.data.map((item: AutoCompleteResponse) => item.word)
            setSearchState({
                ...searchState,
                autoCompleteResult: [searchQuery, ...result]
            })
        } catch (error) {
            console.log(error)
        }

    }, 300);


    const searchMovie = (async (searchQuery: string) => {
        try {
            const response = await instance.get(
                `?apikey=${OMDB_API_KEY}&s=${searchQuery}`
            );
            console.log(response)
            setSearchState({
                ...searchState,
                result: response?.data?.Search ?? [],
                autoCompleteResult: []
            })
            setSearchQuery('')
        } catch (error) {
            console.log(error)
        }

    })


    return {
        searchState,
        query,

        actions: {
            setQuery,
            searchMovie
        }
    }

}