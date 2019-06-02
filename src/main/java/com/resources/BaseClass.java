package com.resources;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class BaseClass {
	public static WebDriver driver = null;
	public static Actions action = null;
	public static Alert alert=null;
	public static TakesScreenshot screenShot;
	public static JavascriptExecutor js = null;
	public static Select s = null;

	public static WebDriver launchBrowser(String url) {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\CucumberProject\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		return driver;

	}

	public static void getCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println("The currentURL is= " + currentUrl);
	}

	public static void getTitle() {
		String title = driver.getTitle();
		System.out.println("The title is= " + title);
	}

	public static void closeBrowser() {
		driver.close();
	}

	public static void quitBrowser() {
		driver.quit();
	}

	public static void sendKeys(WebElement e, String s) {
		e.sendKeys(s);
	}

	public static void click(WebElement e) {
		e.click();
	}

	public static void clear(WebElement e) {
		e.clear();
	}

	public static void getText(WebElement e) {
		e.getText();
	}

	public static void getAttribute(WebElement e) {
		e.getAttribute("value");
	}

	public static void moveToElement(WebElement e) {
		action = new Actions(driver);
		action.moveToElement(e).perform();
	}

	public static void doubleClick(WebElement e) {
		action = new Actions(driver);
		action.doubleClick(e).perform();
	}

	public static void contextClick(WebElement e) {
		action = new Actions(driver);
		action.contextClick(e).perform();
	}

	public static void dragAndDrop(WebElement src, WebElement des) {
		action = new Actions(driver);
		action.dragAndDrop(src, des).perform();
	}

	public static void keyUp(WebElement e, String s) {
		action = new Actions(driver);
		action.keyUp(e, Keys.SHIFT).sendKeys(s).keyDown(e, Keys.SHIFT);
	}

	public static void keydown(WebElement e, String s) {
		action = new Actions(driver);
		action.keyDown(e, Keys.SHIFT).sendKeys(s).keyUp(e, Keys.SHIFT);
	}

	public static void simpleOrConfirmAlerts(String okOrCancel) {
		alert = driver.switchTo().alert();
		if (okOrCancel.equalsIgnoreCase("ok")) {
			alert.accept();
		} else {
			alert.dismiss();
		}

	}

	public static void promptAlert(String yesOrNo, String okOrCancel) {
		alert = driver.switchTo().alert();
		alert.sendKeys(yesOrNo);
		simpleOrConfirmAlerts(okOrCancel);
	}

	public static void screenshot(String desPath) throws IOException {
		screenShot = (TakesScreenshot) driver;
		File src = screenShot.getScreenshotAs(OutputType.FILE);
		File des = new File(desPath);
		FileUtils.copyFile(src, des);
	}

	public static void scrollUpDown(WebElement e, String upOrDown) {
		js = (JavascriptExecutor) driver;
		if (upOrDown.equalsIgnoreCase("down")) {
			js.executeScript("arguments[0].scrollIntoView(false)", e);
		} else {
			js.executeScript("arguments[0].scrollIntoView(true)", e);
		}

	}

	public static void javaScript() {

	}

	public static void windowsHandlingSet() {
		String thisWindow = driver.getWindowHandle();
		System.out.println("main: " + thisWindow);
		Set<String> AllWindow = driver.getWindowHandles();
		for (String childWindow : AllWindow) {
			System.out.println("child: " + childWindow);
			if (!(thisWindow.equals(childWindow))) {
				driver.switchTo().window(childWindow);
			}
		}

	}

	public static void windowsHandlingList() {
		String thisWindow = driver.getWindowHandle();
		System.out.println("main: " + thisWindow);
		Set<String> AllWindow = driver.getWindowHandles();
		ArrayList<String> toList = new ArrayList<String>(AllWindow);
		for (String childWindow : toList) {
			System.out.println("child: " + childWindow);
			if (!(thisWindow.equals(childWindow))) {
				driver.switchTo().window(childWindow);
			}
		}
	}

	// from url:
	// https://stackoverflow.com/questions/30996826/how-to-handle-multiple-windows-in-selenium-webdriver
	public static void multipleWindowsHandle(Integer windowNumber) {
		String thisWindow = driver.getWindowHandle();
		System.out.println("main: " + thisWindow);
		Set<String> AllWindow = driver.getWindowHandles();
		ArrayList<String> toList = new ArrayList<String>(AllWindow);
		String specificWindow = toList.get(windowNumber - 1);
		if (!(thisWindow.equalsIgnoreCase(specificWindow))) {
			driver.switchTo().window(specificWindow);
		}
	}

	public static void webTable(String coldata) {
		List<WebElement> trow = driver.findElements(By.tagName("tr"));
		for (WebElement row : trow) {
			List<WebElement> tdata = row.findElements(By.tagName("td"));
			for (WebElement data : tdata) {
				String text = data.getText();
				if (text.equalsIgnoreCase("UAE")) {
					System.out.println(text);
				}
			}
		}
	}

	//https://www.guru99.com/select-option-dropdown-selenium-webdriver.html
/*	public static void dropDown(WebElement e, String typeOfSelect,String value) throws NumberFormatException {
		s = new Select(e);
		if (typeOfSelect.equalsIgnoreCase("Value")) {
			s.selectByValue(typeOfSelect);
		} else if (typeOfSelect.equalsIgnoreCase("text")) {
			s.selectByVisibleText(typeOfSelect);
		} else {
			Integer index = Integer.valueOf(typeOfSelect);
			s.selectByIndex(index);
		}
	}*/
	public static void dropdownValue(WebElement element, String value) {
		s = new Select(element);
		s.selectByValue(value);
	}

	public static void dropdownIndex(WebElement element, String value) {
		s = new Select(element);
		Integer index=Integer.valueOf(value);
		s.selectByIndex(index);
	}
	public static void dropdownText(WebElement element, String value) {
		s = new Select(element);
		s.selectByVisibleText(value);
	}

	public static void frames() {

	}

	public static void waits() {

	}

	public static void dataDrivenFramework() {

	}

}
