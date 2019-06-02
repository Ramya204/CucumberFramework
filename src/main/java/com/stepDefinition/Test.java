package com.stepDefinition;

import java.awt.AWTException;
import java.sql.DriverPropertyInfo;

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

public class Test extends BaseClass {
	
	public static LoginPageLocator l;
	public static BookHotelLocator b;
	public static ConfirmBookingLocator c;
	public static SearchPAgeLocator se;
	public static SelectPageLocator s;
	public static MyItenaryLocator m;
	
	public static void main(String[] args) throws InterruptedException, AWTException {

		// launch browser
		launchBrowser("http://www.adactin.com/HotelApp/index.php");

		// login page
		l = new LoginPageLocator();

		sendKeys(l.getUsername(), "Pubg12345");
		sendKeys(l.getPassword(), "1234567890");
		click(l.getLogin());

		// user room select page
		se = new SearchPAgeLocator();
		dropdownValue(se.getLocation(), "Sydney");

		dropdownValue(se.getHotels(), "Hotel Creek");

		dropdownValue(se.getRoom_type(), "Double");

		dropdownValue(se.getRoom_nos(), "1");

		/*
		 * dropdownValue(l.getLocation(), "Sydney");
		 * dropdownValue(l.getHotels(), "Hotel Creek");
		 * dropdownValue(l.getRoom_type(), "Double");
		 * dropdownValue(l.getRoom_nos(), "1");
		 */
		/*
		 * click(l.getDatepick_in()); robotClass();
		 */
		clear(se.getDatepick_in());
		sendKeys(se.getDatepick_in(), "07/06/2019");
		click(se.getDatepick_out());

		clear(se.getDatepick_out());
		sendKeys(se.getDatepick_out(), "09/06/2019");
		dropdownValue(se.getAdult_room(), "2");
		// dropdownValue(l.getAdult_room(), "2");
		dropdownIndex(se.getChild_room(), "0");
		// dropdownIndex(l.getChild_room(), 0);
		click(se.getSubmit());

		// user details and payment page
		s = new SelectPageLocator();
		click(s.getRadiobutton_0());
		click(s.getContinuee());

		// book hote page
		b = new BookHotelLocator();
		sendKeys(b.getFirst_name(), "Pepper");
		sendKeys(b.getLast_name(), "potts");
		sendKeys(b.getAddress(), "Brittany");
		sendKeys(b.getCc_num(), "1234567890098765");
		dropdownValue(b.getCc_type(), "AMEX");
		dropdownValue(b.getCc_exp_month(), "2");
		dropdownValue(b.getCc_exp_year(), "2020");
		/*
		 * dropdownValue(l.getCc_type(), "AMEX");
		 * dropdownValue(l.getCc_exp_month(), "2");
		 * dropdownValue(l.getCc_exp_year(), "2020");
		 */
		sendKeys(b.getCc_cvv(), "1122");
		click(b.getBook_now());

		// check itenary page
		c = new ConfirmBookingLocator();
		WebDriverWait explicitWait = new WebDriverWait(driver, 20000);
		WebElement orderNumber = explicitWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("order_no")));
		String attribute = orderNumber.getAttribute("value");
		System.out.println("Your booking Id is: " + attribute);
		click(c.getMy_itinerary());
		
		// confirm booking
		
		m=new MyItenaryLocator();
		click(m.getCheck_all());
		click(m.getCancelall());
		simpleOrConfirmAlerts("ok");
		// alertWindow();
		m.getLogout().click();

		// close browser
		closeBrowser();
	}

}
