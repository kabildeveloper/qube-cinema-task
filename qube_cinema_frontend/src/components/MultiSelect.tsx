import downArrow from "../assets/downArrow.svg";
import {useRef, useState} from "react";
import {MultiSelectOption} from "../types/collectionType.ts";
import React from "react";
import useClickOutside from "../hooks/useClickOutside.ts";
import {List, ListItem, StyledSelect} from "../styled/StyledMultiSelect.ts";

type Props = {
    options: MultiSelectOption[];
    onClick: (value:string) => void;
}


const MultiSelect = ({options, onClick}: Props) => {

    const [isExpanded, setExpanded] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const closeMenu = () => {
        if(!isExpanded) {
            setExpanded(false);
        }
    }

    useClickOutside(ref, closeMenu);

    const toggle = () => {
        setExpanded(prevState => !prevState);
    }

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        onClick(event.target.value);
    }

    const selected = () => {
        const n = options.filter((option) => option.isSelected).length;
        if(n>0) {
            return `(${n})`
        }
        return '';
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    };

    const handleKeyDownCheckbox = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            const changeEvent = {
                target: e.currentTarget,
            } as React.ChangeEvent<HTMLInputElement>;

            handleClick(changeEvent);
        }
    };


    const N = selected();

    return (
        <div ref={ref} style={{position:'relative'}}>
            <StyledSelect tabIndex={0} $isSelected={Boolean(N)} aria-expanded={isExpanded} onKeyDown={handleKeyDown} onClick={toggle}  role='combobox'>
                <span>Type {N}</span>
                <img src={downArrow} alt='downArrow' />
            </StyledSelect>
            <List $isExpanded={isExpanded} role='listbox'>
                {
                    options.map((option, index) => (
                        <ListItem key={index}>
                            <input onKeyDown={handleKeyDownCheckbox} id={option.label} tabIndex={0} onChange={handleClick} role='option' type='checkbox' checked={option.isSelected} value={option.label} />
                            <label htmlFor={option.label}>{option.label}</label>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default MultiSelect;