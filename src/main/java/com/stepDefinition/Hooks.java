package com.stepDefinition;

import com.resources.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void launchAdactinBrowser() {
		launchBrowser("http://www.adactin.com/HotelApp/index.php");
	}

	@After
	public void closeAdactinBrowser() {
		closeBrowser();
	}
}
