import styled from "styled-components";
import Header from "../components/Header";
import {ReactNode} from "react";
import Breadcrumbs from "./Breadcrumbs.tsx";
import {useAppState} from "../context/AppContext.tsx";

const StyledLayout = styled.div`
    width: 100%;
    padding: 24px;
`

const Layout = ({children}: {children: ReactNode}) => {

    const {breadcrumbs} = useAppState();

    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <Header/>
            <StyledLayout>
                {children}
            </StyledLayout>
        </div>
    )
}

export default Layout;