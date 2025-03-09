import {useAppState} from "../context/AppContext";
import {StyledHeader} from "../styled/StyledHeader.ts";


const Header = () => {

    const { appState } = useAppState();

    return (
        <StyledHeader>
            {appState.headerText}
        </StyledHeader>
    )
}

export default Header;
