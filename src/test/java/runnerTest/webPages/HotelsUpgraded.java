package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.BasePage;

import java.util.ArrayList;
import java.util.List;

class Hotel {
    private String name;
    private double distance;
    private double star;

    public Hotel(String name, double distance, double star) {
        this.name = name;
        this.distance = distance;
        this.star = star;
    }

    public Hotel() {
    }

    public String getAll() {
        return name + distance + star;
    }

    public void createHotel(String name, double distance, double star) {
        this.name = name;
        this.distance = distance;
        this.star = star;
    }

    public String getName() {
        return name;
    }

    public double getDistance() {
        return distance;
    }

    public double getStar() {
        return star;
    }

    public void printHotelList() {
        System.out.println("Star rating: " + star + " Distance: " + distance + " " + name);
    }
}

public class HotelsUpgraded extends ElementUtil {

    Hotel hotel = new Hotel();

    List<Hotel> hotelList = new ArrayList<Hotel>();

    private final By cityName = By.id("qf-0q-destination");
    private final By checkIn = By.xpath(" //input[@id='qf-0q-localised-check-in']");
    private final By checkOut = By.xpath("//input[@id='qf-0q-localised-check-out']");
    private final By rooms = By.xpath("//select[@id='qf-0q-rooms']");
    private final By search = By.xpath("//button[@class='cta cta-strong']");

    private final By distance = By.xpath("//a[@data-menu='sort-submenu-distance']");
    private final By cityCenter = By.xpath("//a[contains(text(),'City center')]");
    private final By hotelName = By.xpath("//a[@class='property-name-link']");
    private final By range = By.xpath("//ul[@class='property-landmarks']/li[1]");

    private final By hotelStar = By.xpath("//span[contains(text(),'star')]");
    private final By threeStar = By.xpath("//span[text()='3-star']");
    private final By fourStar = By.xpath("//span[text()='4-star']");
    private final By fiveStar = By.xpath("//span[text()='5-star']");

    private final By endOfPage1 = By.xpath("//h3[contains(text(),'Want to see more hotels? ')]");
    private final By endOfPage2 = By.xpath("//div[@class='info unavailable-info']");


    public void sendCityName(String value) {
        sendValue(cityName, value);
    }

    public void checkIn(String value) {
        clear(checkIn);
        sendValue(checkIn, value);
    }

    public void checkOut(String value) {
        clear(checkOut);
        sendValue(checkOut, value);
    }

    public void setRooms(String value) {
        sendValue(rooms, value);
    }

    public void clickOnSearch() {
        clickOn(search);
    }

    public void clickOnCityCenter() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        moveToElement(distance);
        clickOn(cityCenter);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        scrollByRange();
    }

    public void setThreeStar() {
        clickOn(threeStar);
    }

    public void setFourStar() {
        clickOn(fourStar);
    }

    public void setFiveStar() {
        clickOn(fiveStar);
    }

    public void scrollByRange() {
        List<WebElement> rangeList = webElements(range);
        int j = rangeList.size();
        for (int i = 1; i < j; i++) { //this is for scrolling down enough
            scrollByPixel("0", "1000");
            rangeList = webElements(range);
            j = rangeList.size();
            String range1 = rangeList.get(j - 1).getText().replaceAll("[a-zA-Z ]", "");
            double distance = Double.parseDouble(range1);
            boolean isDistance = distance > 10.0;
            try {
                if (BasePage.get().findElement(endOfPage1).isDisplayed()
                        || BasePage.get().findElement(endOfPage2).isDisplayed()) {
                    break;
                }
            } catch (org.openqa.selenium.NoSuchElementException ignored) {
            }
            if (isDistance || (rangeList.size() > 200)) {
                break;
            }
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public void getHotels() {
        List<WebElement> rangeList =  webElements(range);
        List<WebElement> hotels = webElements(hotelName);
        List<WebElement> stars = webElements(hotelStar);
        for (int i = 0; i < rangeList.size() - 1; i++) {
            String hotelName = hotels.get(i).getText();
            double dist = Double.parseDouble(rangeList.get(i).getText().replaceAll("[a-zA-Z ]", ""));
            double star = Double.parseDouble(stars.get(i+5).getText().replaceAll("[a-zA-Z -]", ""));
            hotel = new Hotel();
            hotel.createHotel(hotelName, dist, star);
            hotelList.add(hotel);

        }
    }

    public void distanceList(Double wantedDistance) {
        System.out.println("\nHotels in "+wantedDistance+" mile radius\n");
        for (Hotel value : hotelList) {
            double dist = value.getDistance();
            if (dist <= wantedDistance) {
                value.printHotelList();
            }
        }
    }

    public void specificHotelsInDistance(Double wantedDistance, String hotelName) {
        System.out.println("\n"+hotelName+" hotels in "+wantedDistance+" mile radius\n");
        for (Hotel value : hotelList) {
            double dist = value.getDistance();
            String name = value.getName();
            if (dist <= wantedDistance && name.contains(hotelName)) {
                value.printHotelList();
            }
        }
    }

    public void starList(int wantedStar) {
        System.out.println("\nHotels with "+wantedStar+" stars\n");
        for (Hotel value : hotelList) {
            double star = value.getStar();
            switch (wantedStar) {
                case 3:
                    if (star >= 3.0 && star < 3.99) {
                        value.printHotelList();
                    }
                    break;
                case 4:
                    if (star >= 4.0 && star < 4.99) {
                        value.printHotelList();
                    }
                    break;
                case 5:
                    if (star >= 5) {
                        value.printHotelList();
                    }
                    break;
            }
        }
    }

    public void starDistance(int wantedStar, double wantedDistance) {
        System.out.println("\nHotels with "+wantedStar+" stars and in "+wantedDistance+" mile radius\n");
        for (Hotel value : hotelList) {
            double star = value.getStar();
            switch (wantedStar) {
                case 3:
                    if (star >= 3.0 && star < 3.99) {
                        double dist = value.getDistance();
                        if (dist <= wantedDistance) {
                            value.printHotelList();
                        }
                    }
                    break;
                case 4:
                    if (star >= 4.0 && star < 4.99) {
                        double dist = value.getDistance();
                        if (dist <= wantedDistance) {
                            value.printHotelList();
                        }
                    }
                    break;
                case 5:
                    if (star >= 5) {
                        double dist = value.getDistance();
                        if (dist <= wantedDistance) {
                            value.printHotelList();
                        }
                    }
                    break;
            }
        }
    }

}
