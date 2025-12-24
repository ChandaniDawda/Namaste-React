import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props Data", () => {

    render(<RestaurantCard  resData = {{ info: MOCK_DATA }} />);

   const RestaurantName = screen.getByText("Pizza Paradise");

    expect(RestaurantName).toBeInTheDocument();

});

it("should render RestaurantCard component with promoted Label", () => {
    const Enhanced = withPromotedLabel(RestaurantCard);
    render(<Enhanced  resData = {{ info: MOCK_DATA }} />);

   const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();

});