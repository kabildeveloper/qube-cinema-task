import styled from "styled-components";

export const StyledSearch = styled.input`
    position: absolute;
    border: 1px solid #C2CAD3;
    border-radius: 4px;
    padding: 4px 9px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    
    &:focus-visible {
        outline: 1px solid #025992;
    }
    
`

export const StyledSearchWrapper = styled.div`
    position: relative;
    width: 310px;
    height: 34px;
    
    &:focus-within {
        ul {
            display: block;
        }
    }
    
    & ul {
        display: none;
    }
    
`

export const StyledSearchIcon = styled.img`
    position: absolute;
    right: 9px;
    top: 50%;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
`

export const SearchHistory = styled.ul`
    background-color: white;
    padding: 8px;
    border-radius: 8px;
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% + 8px);
    border: 1px solid lightgray;
    box-shadow: 0px 4px 8px rgba(4, 38, 82, 0.1);

    & li:hover {
        background-color: #efefef;
        cursor: pointer;
    }
`;