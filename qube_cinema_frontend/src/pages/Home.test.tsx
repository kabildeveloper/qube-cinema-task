import {screen, render, waitFor} from "@testing-library/react";
import Home from "./Home.tsx";
import {useAppState} from "../context/AppContext.tsx";
import {userEvent} from "@testing-library/user-event";
import {getCollections} from "../api/CollectionAPI.ts";
import { MemoryRouter } from "react-router-dom";

jest.mock("../context/AppContext", () => ({
    useAppState: jest.fn(),
}));

jest.mock("../api/CollectionAPI", () => ({
    getCollections: jest.fn(),
}));

const renderWithRouter = (ui: React.ReactElement) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('Home Page',()=>{
    beforeEach(() => {
        (useAppState as jest.Mock).mockReturnValue({
            appState: { headerText: "Overview" },
            updateAppState: jest.fn(),
            breadcrumbs: [],
            updateBreadcrumbs: jest.fn(),
        });

        (getCollections as jest.Mock).mockResolvedValueOnce(
            Promise.resolve([
                { id: 1, name: "Album One", artist: "Artist A", type: "Album", songCount: 10, durationInSeconds: 3600, sizeInBytes: 5000000, releasedOn: "2023-01-01" },
                { id: 2, name: "Single Hit", artist: "Artist B", type: "Single", songCount: 1, durationInSeconds: 240, sizeInBytes: 1000000, releasedOn: "2023-02-01" }
            ])
        );

    });


    test('There Should be a search box', async ()=>{
        renderWithRouter(<Home />);

        await waitFor(() => {
            const element = screen.getByRole("searchbox");
            expect(element).toBeInTheDocument();
        })
    });

    test('Search box should be editable', async ()=>{
        renderWithRouter(<Home />);
        const element = screen.getByRole("searchbox");
        element.focus();
        await userEvent.type(element, 'search');
        expect(element).toHaveValue('search');
    });

    test("fetches and displays collections", async () => {

        renderWithRouter(<Home />);

        expect(await screen.findByText("Album One")).toBeInTheDocument();
        expect(await screen.findByText("Single Hit")).toBeInTheDocument();
    });

})

test("displays error message if API call fails", async () => {

    (useAppState as jest.Mock).mockReturnValue({
        appState: { headerText: "Overview" },
        updateAppState: jest.fn(),
        breadcrumbs: [],
        updateBreadcrumbs: jest.fn(),
    });


    const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

    (getCollections as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch"));

    renderWithRouter(<Home />);

    await waitFor(() => {
        expect(consoleLogMock).toHaveBeenCalledWith(expect.any(Error));
    });

    // Clean up mock
    consoleLogMock.mockRestore();
});