package com.stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.objectRepository.BookHotelLocator;
import com.objectRepository.ConfirmBookingLocator;
import com.objectRepository.LoginPageLocator;
import com.objectRepository.MyItenaryLocator;
import com.objectRepository.SearchPAgeLocator;
import com.objectRepository.SelectPageLocator;
import com.resources.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FeatureFileDefinition extends BaseClass {
	public static LoginPageLocator l;
	public static BookHotelLocator b;
	public static ConfirmBookingLocator c;
	public static SearchPAgeLocator se;
	public static SelectPageLocator s;
	public static MyItenaryLocator m;

	@Before
	public void launchAdactinBrowser() {
		launchBrowser("http://www.adactin.com/HotelApp/index.php");
	}

	@After
	public void closeAdactinBrowser() {
		closeBrowser();
	}

	@Given("^user enters username and password and logs in \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_username_and_password_and_logs_in_and(String un, String ps) {

		l = new LoginPageLocator();

		sendKeys(l.getUsername(), un);
		sendKeys(l.getPassword(), ps);
		click(l.getLogin());
	}

	@Given("^user enters location hotel roomtype roomno \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_location_hotel_roomtype_roomno_and(String lo , String ho, String ro, String no) {

		se = new SearchPAgeLocator();

		dropdownValue(se.getLocation(), lo);
		dropdownValue(se.getHotels(), ho);
		dropdownValue(se.getRoom_type(), ro);
		dropdownValue(se.getRoom_nos(), no);

	}

	@When("^also enters indate outdate adults childrens and submits \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void also_enters_indate_outdate_adults_childrens_and_submits_and(String in, String out, String ad,
			String ch) {
		
		clear(se.getDatepick_in());
		sendKeys(se.getDatepick_in(), in);
		click(se.getDatepick_out());
		clear(se.getDatepick_out());
		sendKeys(se.getDatepick_out(), out);
		dropdownValue(se.getAdult_room(), ad);
		dropdownIndex(se.getChild_room(), ch);
		click(se.getSubmit());
		
		s = new SelectPageLocator();
		
		click(s.getRadiobutton_0());
		click(s.getContinuee());
	}

	@When("^enters fname lname and address \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void enters_fname_lname_and_address_and(String fn, String ln, String add) {

		b = new BookHotelLocator();
		
		sendKeys(b.getFirst_name(), fn);
		sendKeys(b.getLast_name(),ln);
		sendKeys(b.getAddress(), add);
		
	}

	@When("^also enters cardno cardtype expmonth expyear cvv and books \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void also_enters_cardno_cardtype_expmonth_expyear_cvv_and_books_and(String cc, String ty, String em,
			String ey, String cvv) {
		
		sendKeys(b.getCc_num(), cc);
		dropdownValue(b.getCc_type(), ty);
		dropdownValue(b.getCc_exp_month(), em);
		dropdownValue(b.getCc_exp_year(), ey);
		sendKeys(b.getCc_cvv(), cvv);
		click(b.getBook_now());
	}

	@Then("^prints booking id and clicks itenary$")
	public void prints_booking_id_and_clicks_itenary() {
		
		c = new ConfirmBookingLocator();
		
		WebDriverWait explicitWait = new WebDriverWait(driver, 20000);
		WebElement orderNumber = explicitWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("order_no")));
		String attribute = orderNumber.getAttribute("value");
		System.out.println("Your booking Id is: " + attribute);
		click(c.getMy_itinerary());
	}

	@Then("^user selects all the bookins and cancel it$")
	public void user_selects_all_the_bookins_and_cancel_it() {

		m=new MyItenaryLocator();
		
		click(m.getCheck_all());
		click(m.getCancelall());
		simpleOrConfirmAlerts("Cancel");
		m.getLogout().click();
	}
}
