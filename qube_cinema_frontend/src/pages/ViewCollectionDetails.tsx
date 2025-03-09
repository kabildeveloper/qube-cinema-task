import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCollectionById} from "../api/CollectionAPI.ts";
import {CollectionDetailType} from "../types/collectionType.ts";
import {useAppState} from "../context/AppContext.tsx";
import {StyledTable, StyledTableContainer} from "../styled/StyledTable.ts";
import {formatSize, formatTimeFromSeconds} from "../utils.ts";
import DetailsPanel from "../components/DetailsPanel.tsx";
import {Breadcrumb} from "../components/Breadcrumbs.tsx";

const ViewCollectionDetails = () => {

    const params = useParams();
    const {updateAppState, updateBreadcrumbs} = useAppState();

    const [collectionDetails, setCollectionDetails] = useState<CollectionDetailType>();

    useEffect(() => {
        fetchCollectionDetails();
    },[]);

    const updateBreadcrumbsDetail = (name: string) => {
        const breadcrumbs: Breadcrumb[] = [{label: "Overview", url: "/"}, {label: name, url: `/collection-details/${params.id}`}];
        updateBreadcrumbs(breadcrumbs);
    }


    const fetchCollectionDetails = () => {
        if(params.id){
            getCollectionById(params.id).then((collectionDetailsData) => {
                updateAppState({
                    headerText: collectionDetailsData.name
                })
                updateBreadcrumbsDetail(collectionDetailsData.name);
                setCollectionDetails(collectionDetailsData);
            })
        }
    }

    const totalDurationAndSize = () => {
        let totalDuration = 0;
        let totalSize = 0;

        if(collectionDetails) {
            collectionDetails.songs.forEach(song => {
                totalDuration = totalDuration + song.durationInSeconds;
                totalSize = totalSize + song.sizeInBytes;
            })
        }

        return {totalDuration, totalSize};

    }

    const {totalDuration, totalSize} = totalDurationAndSize();



    return (
        <div>
            <div style={{marginBottom:'24px'}}>
                <DetailsPanel
                    artist={collectionDetails?.artist || ''}
                    songCount={collectionDetails?.songCount || 0}
                    type={collectionDetails?.type || ''}
                    releaseDate={collectionDetails?.releasedOn || ''}
                    totalDuration={totalDuration}
                    totalSize={totalSize}
                />
            </div>

            <StyledTableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Performers</th>
                            <th>Duration</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody style={{borderInline: '0'}}>
                    {
                       collectionDetails?.songs?.map((song, i)=>{
                           return <tr key={i}>
                               <td>{song.title}</td>
                               <td>{song.performers.join(", ")}</td>
                               <td>{formatTimeFromSeconds(song.durationInSeconds)}</td>
                               <td>{formatSize(song.sizeInBytes)}</td>
                           </tr>
                       })
                    }
                    {
                        collectionDetails?.songs?.length === 0 &&
                        <tr>
                            <td style={{textAlign:"center"}} aria-colspan={4} colSpan={4}>
                                No Data Found
                            </td>
                        </tr>
                    }
                    </tbody>
                </StyledTable>
            </StyledTableContainer>
        </div>
    );
}

export default ViewCollectionDetails;