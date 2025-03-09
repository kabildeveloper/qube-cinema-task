import styled, {css} from "styled-components";

type SelectType = {
    $isSelected: boolean;
}

export const selectedStyles = css`
    & span {
        color: #084782;
    }
    
    background-color: #EBF5FF;
    border: 1px solid #084782;
`

const defaultStyles = css`
    & span {
        color: #29313A;
    }
    
    background-color: #E1E4E9;
`

export const StyledSelect = styled.div<SelectType>`

    &:focus-visible {
        outline: 1px solid #025992;
    }
    
    & span {
        font-size: 0.75rem;
        font-weight: 500;
        color: #29313A;
        line-height: 20px;
    }
     
    display: flex;
    align-items: center;
    gap: 6px;
    
    //background-color: #E1E4E9;
    border-radius: 0.5rem;
    width: fit-content;
    padding-block: 6px;
    padding-inline: 8px;

    ${({ $isSelected }) => ($isSelected ? selectedStyles : defaultStyles)}
    
    
`;

type MenuType = {
    $isExpanded: boolean
}

export const List = styled.ul<MenuType>`
    position: absolute;
    top: calc(100% + 6px);
    padding: 8px;
    background-color: white;
    width: fit-content;
    border-radius: 0.5rem;
    border: 1px solid #E1E4E9;
    
    display: ${({ $isExpanded }) => ($isExpanded ? 'block' : 'none')};
`

export const ListItem = styled.li`
    width: 189px;

    &:not(:last-child) {
        margin-bottom: 0.25rem;
    }

    & input {
        height: 16px;
        width: 16px;
        margin: 0.5rem;
        vertical-align: middle;
        margin-inline-end: 0.5rem;
        border: 1px solid #677A90;
        border-radius: 4px;
        appearance: none;

        &:checked {
            border-color: #084782;
            background-size: 16px;
            background-image: url("/tick.svg");
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    & label {
        display: inline-block;
        line-height: 24px;
        vertical-align: middle;
        font-size: 0.75rem;
        cursor: pointer;
    }

    & input {
        cursor: pointer;

        &:focus-visible {
            outline: 1px solid #025992;
        }
    }
`