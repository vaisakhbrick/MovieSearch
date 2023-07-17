import * as React from 'react';
import { AppDesignConstants, AppStrings } from '../constants/Constants';
import SearchComponent from '../components/SearchComponent';
import Spacer from '../components/Atoms/Spacer';
import Card from '../components/Atoms/Card';
import GenericText from '../components/Atoms/GenericText';


const Search = () => {
    return (
        <Card fill>
            {/* header */}
            <Card center>
                <Spacer height={AppDesignConstants.navBarHeight} />
                <GenericText bold fontSize={AppDesignConstants.headerFont}>{AppStrings.SearchTitle}</GenericText>
                <Spacer height={AppDesignConstants.large} />
            </Card>

            {/* search logic UI */}
            <SearchComponent />
        </Card>
    );
}

export default Search