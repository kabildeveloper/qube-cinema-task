import styled from "styled-components";

export const StyledDetailsPanel = styled.div`
    background-color: white;
    padding-inline: 24px;
    padding-block: 12px;
    display: flex;
    justify-content: space-between;
`;

export const StyledDetailCell = styled.div`
    color: #2D3540;
    p:first-child {
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.25rem;
    }
    p:nth-child(2) {
        font-size: 0.875rem;
        line-height: 1.5rem;
    }
`