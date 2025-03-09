import {dateFormatter, formatSize, formatTimeFromSeconds} from "../utils.ts";
import {StyledDetailCell, StyledDetailsPanel} from "../styled/StyledDetailsPanel.ts";

type Props = {
    artist: string;
    type: string;
    songCount: number;
    totalSize: number;
    totalDuration: number;
    releaseDate: string;
}

const DetailsPanel = (props: Props) => {
    return (
        <StyledDetailsPanel>
            <StyledDetailCell>
                <p>Artist</p>
                <p>{props.artist}</p>
            </StyledDetailCell>
            <StyledDetailCell>
                <p>Type</p>
                <p>{props.type}</p>
            </StyledDetailCell>
            <StyledDetailCell>
                <p>Song Count</p>
                <p>{props.songCount}</p>
            </StyledDetailCell>
            <StyledDetailCell>
                <p>Total Size</p>
                <p>{formatSize(props.totalSize)}</p>
            </StyledDetailCell>
            <StyledDetailCell>
                <p>Total Duration</p>
                <p>{formatTimeFromSeconds(props.totalDuration)}</p>
            </StyledDetailCell>
            <StyledDetailCell>
                <p>Released On</p>
                <p>{props.releaseDate && dateFormatter.format(new Date(props.releaseDate))}</p>
            </StyledDetailCell>
        </StyledDetailsPanel>
    )
}

export default DetailsPanel;