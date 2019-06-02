package com.objectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.resources.BaseClass;

public class SelectPageLocator extends BaseClass {
	public SelectPageLocator() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "radiobutton_0")
	private WebElement radiobutton_0;

	@FindBy(id = "continue")
	private WebElement continuee;

	public WebElement getRadiobutton_0() {
		return radiobutton_0;
	}

	public WebElement getContinuee() {
		return continuee;
	}

}
