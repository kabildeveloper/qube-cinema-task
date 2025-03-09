import styled from "styled-components";

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    & > thead {
        text-align: left;
        font-size: 0.875rem;
        color: #29313A;
        & th {
            font-weight: 450;
            padding: 12px;
        }
    }
    
    & tbody {
        border: 1px solid #E1E4E9;
        & td {
            font-size: 0.75rem;
            padding: 14px 12px;
            border-bottom: 1px solid #E1E4E9;
        }
    }
    
    @media screen and (max-width: 768px){
        width: 150%;
    }
    
`

export const StyledCollectionName = styled.td`
    & div:nth-child(2) {
        color: #677A90;
    }
`;

export const StyledTableContainer = styled.div`
    width: 100%;
    background-color: white;
    @media screen and (max-width: 768px){
        overflow-x: scroll;
    }
`