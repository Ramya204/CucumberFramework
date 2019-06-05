package com.resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
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
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	public static WebDriver driver = null;
	public static Actions action = null;
	public static Alert alert = null;
	public static TakesScreenshot screenShot;
	public static JavascriptExecutor js = null;
	public static Select s = null;

	// launch browser
	public static WebDriver launchBrowser(String url) {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\CucumberProject\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		return driver;

	}

	// get current URL
	public static void getCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println("The currentURL is= " + currentUrl);
	}

	// get title
	public static void getTitle() {
		String title = driver.getTitle();
		System.out.println("The title is= " + title);
	}

	// close browser
	public static void closeBrowser() {
		driver.close();
	}

	// quit browser
	public static void quitBrowser() {
		driver.quit();
	}

	// send keys
	public static void sendKeys(WebElement e, String s) {
		e.sendKeys(s);
	}

	// click
	public static void click(WebElement e) {
		e.click();
	}

	// clear
	public static void clear(WebElement e) {
		e.clear();
	}

	// get text
	public static void getText(WebElement e) {
		e.getText();
	}

	// get Attribute
	public static void getAttribute(WebElement e) {
		e.getAttribute("value");
	}

	// move To Element
	public static void moveToElement(WebElement e) {
		action = new Actions(driver);
		action.moveToElement(e).perform();
	}

	// double Click
	public static void doubleClick(WebElement e) {
		action = new Actions(driver);
		action.doubleClick(e).perform();
	}

	// context click
	public static void contextClick(WebElement e) {
		action = new Actions(driver);
		action.contextClick(e).perform();
	}

	// drag and drop
	public static void dragAndDrop(WebElement src, WebElement des) {
		action = new Actions(driver);
		action.dragAndDrop(src, des).perform();
	}

	// key up
	public static void keyUp(WebElement e, String s) {
		action = new Actions(driver);
		action.keyUp(e, Keys.SHIFT).sendKeys(s).keyDown(e, Keys.SHIFT);
	}

	// key down
	public static void keydown(WebElement e, String s) {
		action = new Actions(driver);
		action.keyDown(e, Keys.SHIFT).sendKeys(s).keyUp(e, Keys.SHIFT);
	}

	// alerts
	public static void alerts(String alertType, String action) {
		alert = driver.switchTo().alert();

		if (alertType.equalsIgnoreCase("Simple")) {
			if (action.equalsIgnoreCase("accept")) {
				alert.accept();
			}
		} else if (alertType.equalsIgnoreCase("confirm")) {
			if (action.equalsIgnoreCase("accept")) {
				alert.accept();
			} else {
				alert.dismiss();
			}
		} else if (alertType.equals("Prompt")) {
			if (action.equals("accept")) {
				alert.sendKeys("Yes");
				alert.accept();
			} else if (action.equals("dismiss")) {
				alert.sendKeys("No");
				alert.dismiss();
			}
		}

	}

	// screenshot
	public static void screenshot(String imageName) throws IOException {
		screenShot = (TakesScreenshot) driver;
		SimpleDateFormat date = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		File src = screenShot.getScreenshotAs(OutputType.FILE);
		String imageLoc = "C:\\Selenium\\screenshot" + imageName + "_" + date + ".png";
		File des = new File(imageLoc);
		FileUtils.copyFile(src, des);
	}

	// scroll up/down
	public static void scrollUpDown(WebElement e, String upOrDown) {
		js = (JavascriptExecutor) driver;
		if (upOrDown.equalsIgnoreCase("down")) {
			js.executeScript("arguments[0].scrollIntoView(false)", e);
		} else {
			js.executeScript("arguments[0].scrollIntoView(true)", e);
		}

	}

	// java script
	public static void javaScript() {

	}

	// windows handling using Set
	public static void windowsHandlingSet(WebDriver drive) {
		String thisWindow = drive.getWindowHandle();
		Set<String> AllWindow = drive.getWindowHandles();
		for (String childWindow : AllWindow) {
			if (!(thisWindow.equals(childWindow))) {
				driver.switchTo().window(childWindow);
			}
		}

	}

	// windows handling using list
	public static void windowsHandlingList(WebDriver drive) {
		String thisWindow = drive.getWindowHandle();
		System.out.println("main: " + thisWindow);
		Set<String> AllWindow = drive.getWindowHandles();
		ArrayList<String> toList = new ArrayList<String>(AllWindow);
		for (String childWindow : toList) {
			if (!(thisWindow.equals(childWindow))) {
			}
		}
	}

	// from url:
	// https://stackoverflow.com/questions/30996826/how-to-handle-multiple-windows-in-selenium-webdriver
	/*
	 * public static void multipleWindowsHandle(Integer windowNumber) { String
	 * thisWindow = driver.getWindowHandle(); Set<String> AllWindow =
	 * driver.getWindowHandles(); ArrayList<String> toList = new
	 * ArrayList<String>(AllWindow); String specificWindow =
	 * toList.get(windowNumber - 1); if
	 * (!(thisWindow.equalsIgnoreCase(specificWindow))) {
	 * driver.switchTo().window(specificWindow); } }
	 */

	// multiple windows handling
	public static void multipleWindowsHandling(WebDriver drive, int window) {
		Set<String> allWind = drive.getWindowHandles();
		ArrayList<String> list = new ArrayList<String>();
		list.addAll(allWind);
		driver.switchTo().window(list.get(window - 1));
	}

	// web table
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

	// https://www.guru99.com/select-option-dropdown-selenium-webdriver.html
	/*
	 * public static void dropDown(WebElement e, String typeOfSelect,String
	 * value) throws NumberFormatException { s = new Select(e); if
	 * (typeOfSelect.equalsIgnoreCase("Value")) { s.selectByValue(typeOfSelect);
	 * } else if (typeOfSelect.equalsIgnoreCase("text")) {
	 * s.selectByVisibleText(typeOfSelect); } else { Integer index =
	 * Integer.valueOf(typeOfSelect); s.selectByIndex(index); } }
	 */

	// Drop down select with value
	public static void dropdownValue(WebElement element, String value) {
		s = new Select(element);
		s.selectByValue(value);
	}

	// Drop down select with Index
	public static void dropdownIndex(WebElement element, String value) {
		s = new Select(element);
		Integer index = Integer.valueOf(value);
		s.selectByIndex(index);
	}

	// Drop down select with text
	public static void dropdownText(WebElement element, String value) {
		s = new Select(element);
		s.selectByVisibleText(value);
	}

	// Frame size
	public static void frameSize(WebDriver driver) {
		int size = driver.findElements(By.tagName("iframe")).size();
		System.out.println("The iFrame size is: " + size);
	}

	// Switch To Frame With Index
	public static void switchToFrameWithIndex(Integer index) {
		driver.switchTo().frame(index);
	}

	// Switch To Frame With name or id
	public static void switchToFrameWithNameOrId(String value) {
		driver.switchTo().frame(value);
	}

	// Switch To Frame With web element
	public static void switchToFrameWithWebElement(WebElement element) {
		driver.switchTo().frame(element);
	}

	// switch to default frame
	public static void switchToDefaultFrame(WebDriver driver) {
		driver.switchTo().defaultContent();
	}

	// switch to parent frame
	public static void switchToParentFrame(WebDriver driver) {
		driver.switchTo().parentFrame();
	}

	// frame inside frame
	public void frameInsideFrame(WebDriver driver, String ParentFrame, String ChildFrame) {
		driver.switchTo().frame(ParentFrame).switchTo().frame(ChildFrame);
	}

	// Implicit wait
	public static void implicitwait(WebDriver driver) {

		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}

	// explicit wait
	public static WebDriverWait webDriverExplicitWait(WebDriver driver) {
		WebDriverWait eWait = new WebDriverWait(driver, 2000);
		return eWait;
	}

	// fluent wait
	public static Wait fluentWait(WebDriver driver) {
		@SuppressWarnings("deprecation")
		Wait fWait = new FluentWait(driver).withTimeout(100, TimeUnit.SECONDS).pollingEvery(10, TimeUnit.MILLISECONDS)
				.ignoring(Throwable.class);
		return fWait;

	}

	// Data driven framework
	public static String getData(int r, int c,String fileLoc) throws IOException {
		File loc = new File(fileLoc);
		FileInputStream f = new FileInputStream(loc);
		Workbook w = new XSSFWorkbook(f);
		Sheet s = w.getSheet("Datas");
		Row row = s.getRow(r);
		Cell cell = row.getCell(c);
		int type = cell.getCellType(); 
		String value = null;
		if (type == 1) {
			value = cell.getStringCellValue();
		} else if (type == 0) {
			if (DateUtil.isCellDateFormatted(cell)) {
				Date date = cell.getDateCellValue();
				SimpleDateFormat sim = new SimpleDateFormat("mm/dd/yyyy");
				value = sim.format(date);
			} else {
				double num = cell.getNumericCellValue();
				long l = (long) num;
				value = String.valueOf(l);
			}
		}
		return value;
	}

}
