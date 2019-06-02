package com.objectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.resources.BaseClass;

public class ConfirmBookingLocator extends BaseClass {

	public ConfirmBookingLocator() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "order_no")
	private WebElement order_no;

	@FindBy(id = "my_itinerary")
	private WebElement my_itinerary;

	public WebElement getOrder_no() {
		return order_no;
	}

	public WebElement getMy_itinerary() {
		return my_itinerary;
	}

}
