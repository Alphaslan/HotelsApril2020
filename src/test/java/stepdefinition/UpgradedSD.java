package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.HotelsUpgraded;
import utils.BasePage;
import utils.ConfigReader;

public class UpgradedSD {
    private HotelsUpgraded hotels =new HotelsUpgraded();

    @Given("^I am on default location search locations screen U$")
    public void verifyHomePageUrlAntTitle() {
        Assert.assertEquals(BasePage.get().getCurrentUrl(), ConfigReader.getProperty("url"));
        Assert.assertEquals(BasePage.get().getTitle(), ConfigReader.getProperty("title"));
    }

    @When("^I enter (.+) and select (CityName|CheckIn|CheckOut|Rooms) field on the homepage page U$")
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

    @Then("^I verify system displays only (.+) hotels on search result U$")
    public void selectStar(String selection) {
        switch (selection) {

            case "3 star":
                hotels.clickOnSearch();
                hotels.setThreeStar();
                hotels.clickOnCityCenter();
                hotels.getHotels();
                hotels.starDistance(3,10.0);
                hotels.specificHotelsInDistance(10.0,"Marriott");
                break;
            case "4 star":
                hotels.clickOnSearch();
                hotels.setFourStar();
                hotels.clickOnCityCenter();
                hotels.getHotels();
                hotels.starList(4);
                hotels.distanceList(10.0);
                break;
            case "5 star":
                hotels.clickOnSearch();
                hotels.setFiveStar();
                hotels.clickOnCityCenter();
                hotels.distanceList(10.0);
                break;
        }
    }


}

