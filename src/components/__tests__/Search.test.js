import {fireEvent, render , screen} from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mocking the fetch API


global.fetch = jest.fn(() => {  // Mocking fetch function
  return Promise.resolve({  //  returning a resolved promise
    json: () => {           // json method to parse the response
        
      return Promise.resolve(MOCK_DATA);  // returning mock data as JSON
    },
  });
});

  it("should Search Res List for burger text input ", async () => {  // Test case to check if Body component renders correctly

    await act(async () => 

    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    )
    );

      const cardsBeforeSearch = screen.getAllByTestId("restaurant-card"); // Get all restaurant cards before search  

      const restaurants = MOCK_DATA.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      expect(cardsBeforeSearch.length).toBe(restaurants.length); // Expecting number based on mock data

      const searchBtn = screen.getByRole("button", { name: "Search" }); // Get the search button

      const searchInput = screen.getByRole("textbox"); // Get the search input box

      fireEvent.change(searchInput, { target: { value: "burger" } }); // Simulate typing "burger" in the search box

      fireEvent.click(searchBtn); // Simulate clicking the search button

      const cardsAfterSearch = screen.getAllByTestId("restaurant-card");

      const expectedAfterSearch = restaurants.filter(r => r.info.name.toLowerCase().includes("burger")).length;
      
      expect(cardsAfterSearch.length).toBe(expectedAfterSearch); // Expecting number based on mock data filter
  });   

  it("should filter Top Rated Restaurants when button clicked", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const restaurants = MOCK_DATA.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    const expectedTopRated = restaurants.filter(r => r.info.avgRating > 4).length;

    const topRatedBtn = screen.getByRole("button", { name: /Top Rated Restaurants/i });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("restaurant-card");
    expect(cardsAfterFilter.length).toBe(expectedTopRated);
  });