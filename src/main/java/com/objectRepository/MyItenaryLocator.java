package com.objectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.resources.BaseClass;

public class MyItenaryLocator extends BaseClass {

	public MyItenaryLocator() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "check_all")
	private WebElement check_all;

	@FindBy(name = "cancelall")
	private WebElement cancelall;

	@FindBy(id = "logout")
	private WebElement logout;

	public WebElement getCheck_all() {
		return check_all;
	}

	public WebElement getCancelall() {
		return cancelall;
	}

	public WebElement getLogout() {
		return logout;
	}

}
