package runnerTest.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.BasePage;
import java.util.ArrayList;
import java.util.List;

public class Hotels extends ElementUtil {

    private By cityName=By.id("qf-0q-destination");
    private By dropOpt1= By.xpath("//tr[@id='citysqm-asi0-s0']");
    private By checkIn= By.xpath(" //input[@id='qf-0q-localised-check-in']");
    private By checkOut = By.xpath("//input[@id='qf-0q-localised-check-out']");
    private By rooms = By.xpath("//select[@id='qf-0q-rooms']");
    private By search = By.xpath("//button[@class='cta cta-strong']");

    private By distance = By.xpath("//a[@data-menu='sort-submenu-distance']");
    private By cityCenter = By.xpath("//a[contains(text(),'City center')]");
    private By hotelName = By.xpath("//a[@class='property-name-link']");
    private By range = By.xpath("//ul[@class='property-landmarks']/li[1]");
    private By endOfpage = By.xpath("//h3[contains(text(),'Want to see more hotels? ')]");

    private By greyStarHotel = By.xpath("//span[@class='star-rating-text']");
    private By redStarHotel  =By.xpath("//span[@class='star-rating-text star-rating-text-strong']");
    private By threeStar = By.xpath("//span[text()='3-star']");
    private By fourStar = By.xpath("//span[text()='4-star']");
    private By fiveStar = By.xpath("//span[text()='5-star']");



    public void sendCityName(String value){
        sendValue(cityName,value);
    }

    public void checkIn(String value){
        clear(checkIn);
        sendValue(checkIn,value);
    }

    public void checkOut(String value){
        clear(checkOut);
        sendValue(checkOut,value);
    }

    public void setRooms(String value){
        sendValue(rooms,value);
    }

    public void clickOnSearch(){
        clickOn(search);
    }

    public void clickOnCityCenter(){
        moveToElement(distance);
        clickOn(cityCenter);
    }

    public void setThreeStar(){
        clickOn(threeStar);
    }

    public void setFourStar(){
        clickOn(fourStar);
    }

    public void setFiveStar(){
        clickOn(fiveStar);
    }


    public ArrayList<String[]> threeStarHotelList() {
        List<WebElement> rangeList = webElements(range);
        ArrayList<String[]> wholeList = new ArrayList<>();

        int j=rangeList.size();
        for(int i=1;i<j;i++) { //this is for scrolling down enough
            scrollByPixel("0", "2000");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            rangeList = webElements(range);
            j=rangeList.size();

            String range1 = rangeList.get(j-1).getText().replaceAll("[a-zA-Z ]", "");
            double distance = Double.parseDouble(range1);
            boolean isDistance = distance > 10.0;
            if(isDistance || rangeList.size() >200){
                break;
            }
            try{
                if(BasePage.get().findElement(endOfpage).isDisplayed()){
                    break;
                }
            }catch (org.openqa.selenium.NoSuchElementException ignored){
            }
        }
        List<WebElement> hotelNames = webElements(hotelName);
        List <WebElement> starList=webElements(greyStarHotel);
        for (int i = 0; i < rangeList.size(); i++) {

            String range1 = rangeList.get(i).getText().replaceAll("[a-zA-Z ]", "");
            String star1 = starList.get(i).getText().replaceAll("[a-zA-Z -]", "");
            double distance = Double.parseDouble(range1);
            double starPoint = Double.parseDouble(star1);

            boolean isStar = starPoint >= 3.0 && starPoint <= 3.9;
            boolean isDistance = distance < 10.0;

            if (isDistance && isStar) {
                String star = String.valueOf(starPoint);
                String distance1 = String.valueOf(distance);

                String hotelText = hotelNames.get(i).getText();

                String[] arrayForlist = { "Star rate: ", star, " Milage: ", distance1, " ", hotelText };
                wholeList.add(arrayForlist);

            }
        }
        return wholeList;
    }

    public ArrayList<String[]> fourStarHotelList() {
        List<WebElement> rangeList = webElements(range);
        ArrayList<String[]> wholeList = new ArrayList<>();

        int j=rangeList.size();
        for(int i=1;i<j;i++) { //this is for scrolling down enough
            scrollByPixel("0", "2000");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            rangeList = webElements(range);
            j=rangeList.size();

            String range1 = rangeList.get(j-1).getText().replaceAll("[a-zA-Z ]", "");
            double distance = Double.parseDouble(range1);
            boolean isDistance = distance > 10.0;
            if(isDistance || rangeList.size() >200){
                break;
            }
            try{
                if(BasePage.get().findElement(endOfpage).isDisplayed()){
                    break;
                }
            }catch (org.openqa.selenium.NoSuchElementException ignored){
            }
        }
            List<WebElement> hotelNames = webElements(hotelName);
            List <WebElement> starList=webElements(redStarHotel);
        for (int i = 0; i < rangeList.size()-1; i++) {

            String range1 = rangeList.get(i).getText().replaceAll("[a-zA-Z ]", "");
            String star1 = starList.get(i).getText().replaceAll("[a-zA-Z -]", "");
            double distance = Double.parseDouble(range1);
            double starPoint = Double.parseDouble(star1);

            boolean isStar = starPoint >= 4.0 && starPoint <= 4.9;
            boolean isDistance = distance < 10.0;

            if (isDistance && isStar) {
                String star = String.valueOf(starPoint);
                String distance1 = String.valueOf(distance);

                String hotelText = hotelNames.get(i).getText();

                String[] arrayForlist = { "Star rate: ", star, " Milage: ", distance1, " ", hotelText };
                wholeList.add(arrayForlist);

            }
        }
        return wholeList;
    }

    public ArrayList<String[]> fiveStarHotelList() {
        List<WebElement> rangeList = webElements(range);
        ArrayList<String[]> wholeList = new ArrayList<>();

        int j=rangeList.size();
        for(int i=1;i<j;i++) { //this is for scrolling down enough
            scrollByPixel("0", "2000");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            rangeList = webElements(range);
            j=rangeList.size();

            String range1 = rangeList.get(j-1).getText().replaceAll("[a-zA-Z ]", "");
            double distance = Double.parseDouble(range1);
            boolean isDistance = distance > 10.0;
            if(isDistance || rangeList.size() >200){
                break;
            }
            try{
                if(BasePage.get().findElement(endOfpage).isDisplayed()){
                    break;
                }
            }catch (org.openqa.selenium.NoSuchElementException ignored){
            }
        }
        List<WebElement> hotelNames = webElements(hotelName);
        List <WebElement> starList=webElements(redStarHotel);
        for (int i = 0; i < rangeList.size()-1; i++) {

            String range1 = rangeList.get(i).getText().replaceAll("[a-zA-Z ]", "");
            String star1 = starList.get(i).getText().replaceAll("[a-zA-Z -]", "");
            double distance = Double.parseDouble(range1);
            double starPoint = Double.parseDouble(star1);

            boolean isStar = (starPoint == 5.0);
            boolean isDistance = distance < 10.0;

            if (isDistance && isStar) {
                String star = String.valueOf(starPoint);
                String distance1 = String.valueOf(distance);

                String hotelText = hotelNames.get(i).getText();

                String[] arrayForlist = { "Star rate: ", star, " Milage: ", distance1, " ", hotelText };
                wholeList.add(arrayForlist);

            }
        }
        return wholeList;
    }

    public ArrayList<String[]> hotelNameList() {
        List<WebElement> rangeList = webElements(range);
        ArrayList<String[]> wholeList = new ArrayList<>();

        int j=rangeList.size();
        for(int i=1;i<j;i++) {
            scrollByPixel("0", "2000");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            rangeList = webElements(range);
            j=rangeList.size();

            String range1 = rangeList.get(j-1).getText().replaceAll("[a-zA-Z ]", "");
            double distance = Double.parseDouble(range1);
            boolean isDistance = distance > 10.0;
            if(isDistance || rangeList.size() >200){
                break;
            }
        }

        List<WebElement> hotelNames = webElements(hotelName);

        for (int i = 0; i < rangeList.size(); i++) {
            String range1 = rangeList.get(i).getText().replaceAll("[a-zA-Z ]", "");

            double distance = Double.parseDouble(range1);
            boolean isDistance = distance < 10.0;

            if (isDistance) {
                String distance1 = String.valueOf(distance);
                String hotelText = hotelNames.get(i).getText();
                String[] arrayForlist = {" Milage: ", distance1, " ", hotelText };
                wholeList.add(arrayForlist);
            }
        }
        return wholeList;
    }

    public void printMileageList(){
        System.out.println("---The hotels which are in 10 mile radius---");
        for (String[] a : hotelNameList()) {
            System.out.println(a[0] + a[1] + a[2] + a[3]);
        }
    }

    public void findHiltonHotels(){
        System.out.println("---The Hilton hotels which are in 10 mile radius---");
        for (String[] a : hotelNameList()) {
            if(a[3].contains("Hilton")) {
                System.out.println(a[0] + a[1] + a[2] + a[3]);
            }
        }
    }

    public void printStarList(ArrayList<String[]> list) {
        for (String[] a : list) {
            System.out.println(a[0] + a[1] + a[2] + a[3] + a[4] + a[5]);
        }
    }

    public void printHiltonStarList(ArrayList<String[]> list) {
        for (String[] a : list) {
            if (a[5].contains("Hilton")) {
                System.out.println(a[0] + a[1] + a[2] + a[3] + a[4] + a[5]);
            }
        }
    }

}
