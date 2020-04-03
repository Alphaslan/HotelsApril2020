package stepdefinition;

import cucumber.api.java.en.*;
import org.testng.Assert;
import runnerTest.webPages.Hotels;
import utils.BasePage;
import utils.ConfigReader;

public class HotelsSD {

    private Hotels hotels = new Hotels();


    @Given("^I am on default location search locations screen$")
    public void verifyHomePageUrlAntTitle() {
        Assert.assertEquals(BasePage.get().getCurrentUrl(), ConfigReader.getProperty("url"));
        Assert.assertEquals(BasePage.get().getTitle(), ConfigReader.getProperty("title"));
    }

    @When("^I enter (.+) and select (CityName|CheckIn|CheckOut|Rooms) field on the homepage page$")
    public void selectValues(String value, String selection) {

        switch (selection) {
            case "CityName":
                hotels.sendCityName(value);
                break;
            case "CheckIn":
                hotels.checkIn(value);
                break;
            case "CheckOut":
                hotels.checkOut(value);
                break;
            case "Rooms":
                hotels.setRooms(value);
        }
    }

    @Then("^I verify system displays only (.+) hotels on search result$")
    public void selectStar(String selection) {
        switch (selection) {

            case "3 star":
                hotels.clickOnSearch();
                hotels.clickOnCityCenter();
                hotels.setThreeStar();
                hotels.printStarList(hotels.threeStarHotelList());
                break;
            case "4 star":
                hotels.clickOnSearch();
                hotels.clickOnCityCenter();
                hotels.setFourStar();
                hotels.printStarList(hotels.fourStarHotelList());
                break;
            case "5 star":
                hotels.clickOnSearch();
                hotels.clickOnCityCenter();
                hotels.setFiveStar();
                hotels.printStarList(hotels.fiveStarHotelList());
                break;
        }
    }


    @And("^I select system displays all hotels within 10 or less mile radius of downtown$")
    public void findHotels() {
        hotels.clickOnSearch();
        hotels.clickOnCityCenter();
        hotels.printMileageList();
    }

    @Then("^I select all Hilton hotels from previous list$")
    public void hiltonHotels() {
        hotels.findHiltonHotels();
    }

}