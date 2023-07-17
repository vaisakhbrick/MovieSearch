
export enum NavigationConstans {
    Search = 'Search'
}

export const OMDB_API_KEY = "ed67e452"

export const baseUrl = `http://www.omdbapi.com`
export const autoCompleteSuggestionBaseUrl  = 'https://api.datamuse.com/'



export enum AppStrings {

    SearchTitle = 'Search Movies',
    SearchPlaceholder = 'Search(Input more than 3 chars)'
}

//for basic use case.. for scalability use robust theming
export enum AppDesignConstants {

    navBarHeight = 56,
    standardInputSize = 54,


    //generic spacings
    xss = 1,
    xs = 4,
    small = 8,
    xxm = 10,
    xm = 12,
    medium = 16,
    large = 20,
    xl = 24,
    xxl = 32,
    xxxl = 36,

    headerFont = 20
}