import styled from 'styled-components';
import searchIcon from '../assets/search.svg';
import { ChangeEvent } from "react";
import MultiSelect from "./MultiSelect.tsx";
import {MultiSelectOption} from "../types/collectionType.ts";
import {SearchHistory, StyledSearch, StyledSearchIcon, StyledSearchWrapper} from "../styled/Search.ts";

const StyledTableFilter = styled.section`
    background-color: white;
    padding: 1rem 0.875rem;
    display: flex;
    align-items: center;
    gap: 12px;
`

type Props = {
    search: string,
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
    options: MultiSelectOption[],
    onClick: (value: string) => void,
    searchHistory: string[],
    updateSearch: (value:string)=>void
}


const TableFilter = ({
        search='',
        handleSearch,
        onClick,
        options,
        searchHistory,
        updateSearch,
     }: Props) => {

    return (
        <StyledTableFilter>
            <StyledSearchWrapper>
                <StyledSearch tabIndex={0} placeholder='Search' onChange={handleSearch} value={search} type='search'/>
                <StyledSearchIcon aria-placeholder='Search Music Collections' src={searchIcon} alt='search' />
                <SearchHistory>
                    {
                        searchHistory.map((history, i) => (
                            <li onClick={()=>{updateSearch(history)}} key={i}>{history}</li>
                        ))
                    }
                </SearchHistory>
            </StyledSearchWrapper>
            <MultiSelect onClick={onClick} options={options}/>
        </StyledTableFilter>
    )
}

export default TableFilter;