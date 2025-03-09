import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledTextLink = styled(Link)`
    background-color: transparent;
    outline: none;
    color: #025992;
    font-weight: 500;
    vertical-align: middle;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    
    &:hover {
        text-decoration: underline;
    }

    &:focus-visible {
        text-decoration: underline;
    }

    & > span {
        display: inline-block;
        line-height: 16px;
        vertical-align: middle;
    }
`;

export const StyledIcon = styled.img`
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
`;