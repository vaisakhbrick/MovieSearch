

export type SearchState = {
    result: SearchResponse[]
    autoCompleteResult: string[]
}


export type SearchResponse = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type AutoCompleteResponse = {
    word: string,
    score: number
}