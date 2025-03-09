import TableFilter from "../components/TableFilter.tsx";
import {StyledCollectionName, StyledTable, StyledTableContainer} from "../styled/StyledTable.ts";
import viewIcon from '../assets/view.svg';
import StyledTextLink from "../components/StyledTextLink.tsx";
import {dateTimeFormatter, formatSize, formatTimeFromSeconds} from "../utils.ts";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import {getCollections} from "../api/CollectionAPI.ts";
import {MultiSelectOption, CollectionType} from "../types/collectionType.ts";
import {useAppState} from "../context/AppContext.tsx";
import useDebounce from "../hooks/useDebounce.ts";

const Home = () => {

    const { updateAppState, updateBreadcrumbs } = useAppState();

    useEffect(() => {
        updateAppState({
            headerText:'Overview'
        })
        updateBreadcrumbs([]);
    }, []);

    const [collections, setCollections] = useState<CollectionType[]>([]);


    const [search, setSearch] = useState("");

    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const debouncedSearchValue = useDebounce(search, 300);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
    }

    const updateSearch = (value: string) => {
        setSearch(value);
    }

    const [options, setOptions] = useState<MultiSelectOption[]>(
        [
            {label: 'Album', isSelected: false},
            {label: 'EP', isSelected: false},
            {label: 'Single', isSelected: false}
        ]
    );

    const handleOptionChange = (value: string) => {
        console.log("handleOptionChange", value);
        const opts = [...options];
        const idx = opts.findIndex(x=>x.label===value);
        if (idx > -1) {
            opts[idx].isSelected = !opts[idx].isSelected;
        }
        setOptions(opts);
    }

    const filteredCollections = useMemo((): CollectionType[] => {

        // Search Spec
        let result = collections.filter(collection=> {
            return collection.name.toLowerCase().includes(search.toLowerCase()) || collection.artist.toLowerCase().includes(search.toLowerCase());
        });

        // Selected Options Spec
        const selectedOptions: MultiSelectOption[] = options.filter(x=>x.isSelected);
        if (selectedOptions.length > 0) {
            result = result.filter(collection=> {
             return selectedOptions.some(x=>x.label===collection.type);
            })
        }

        // Return Result in Alphabetical order
        return result.sort((a, b) => a.name.localeCompare(b.name));
    }, [debouncedSearchValue, collections, options]);

    useEffect(() => {
        fetchCollections();
    }, []);

    useEffect(() => {
        if(debouncedSearchValue.length >2) {
            const set = new Set<string>([...searchHistory, debouncedSearchValue]);

            const updatedHistory = [...set];
            if(updatedHistory.length>5) {
                updatedHistory.splice(0, updatedHistory.length-5);
            }
            setSearchHistory(updatedHistory);
        }
    }, [debouncedSearchValue]);


    const fetchCollections = () => {
        getCollections().then((res) => {
            setCollections(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <TableFilter
                search={search}
                handleSearch={handleSearchChange}
                options={options}
                onClick={handleOptionChange}
                searchHistory={searchHistory}
                updateSearch={updateSearch}
            />

            <StyledTableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th> Collection Name</th>
                            <th>Type</th>
                            <th>Song Count</th>
                            <th>Duration</th>
                            <th>Size</th>
                            <th>Released On</th>
                            <th>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCollections.map((collection: CollectionType) => {
                                return (
                                    <tr key={collection.id}>
                                        <StyledCollectionName>
                                            <div>
                                                {collection.name}
                                            </div>
                                            <div>
                                                {collection.artist}
                                            </div>
                                        </StyledCollectionName>
                                        <td>{collection.type}</td>
                                        <td>{collection.songCount}</td>
                                        <td>{formatTimeFromSeconds(collection.durationInSeconds)}</td>
                                        <td>{formatSize(collection.sizeInBytes)}</td>
                                        <td> {dateTimeFormatter.format(new Date(collection.releasedOn)) } </td>
                                        <td>
                                            <StyledTextLink state={collection} to={`/collection-details/${collection.id}`} src={viewIcon} alt={'view icon'}>
                                                View Details
                                            </StyledTextLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            filteredCollections.length === 0 && <tr>
                            <td style={{textAlign:'center'}} aria-colspan={7} colSpan={7}>
                                { collections.length === 0 ? "No Data Found" : "No Data, try different filters" }
                            </td>
                          </tr>
                        }
                    </tbody>
                </StyledTable>
            </StyledTableContainer>
        </>
    )
}

export default Home;