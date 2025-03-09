import {Link} from "react-router-dom";
import styled from "styled-components";
import right from "../assets/right.svg";

export type Breadcrumb = {
    label: string,
    url: string,
}

type Props = {
    breadcrumbs: Breadcrumb[],
}

const StyledBreadcrumbWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-inline: 24px;
`;

const StyledBreadCrumbItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    &:not(:last-child) {
        color: #677A90;
    }
`;

const StyledBreadcrumb = styled(Link)`
    line-height: 1.25rem;
    font-size: 0.75rem;
    padding-block: 6px;
    display: inline-block;
    margin-block: 4px;
    
`;



const Breadcrumbs = (props: Props) => {
    return (
        <StyledBreadcrumbWrapper>
            {
                props.breadcrumbs?.map((item, i)=>{
                    return (
                        <StyledBreadCrumbItem key={i}>
                            <StyledBreadcrumb to={item.url} >
                                {item.label}
                            </StyledBreadcrumb>
                            {i!==props.breadcrumbs.length -1 && <img src={right} alt={'Chevron right'}/>}
                        </StyledBreadCrumbItem>
                    )
                })
            }
        </StyledBreadcrumbWrapper>
    )
}

export default Breadcrumbs;