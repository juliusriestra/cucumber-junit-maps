package com.ebay.steps;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchSteps {
	
	WebDriver driver;
	WebDriverWait driverWait;
	
	@Given("^i am on the store home page$")
	public void i_am_on_the_store_home_page() {
		System.setProperty("webdriver.chrome.driver", "E:\\webdrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.ebay.com/");
	}
	
	@When("^enter the requested product$")
	public void enter_the_requested_product() {
		driverWait = new WebDriverWait(driver, 10);
		driverWait.until(ExpectedConditions.presenceOfElementLocated(By.id("gh-ac")));
		driver.findElement(By.id("gh-ac")).sendKeys("shoes");
	}

	@Then("^press enter$")
	public void press_enter() {
		driver.findElement(By.id("gh-ac")).submit();
	}

	@Then("^click the button search$")
	public void click_the_button_search() {
		driver.findElement(By.id("gh-btn")).click();
	}
	
	@Then("^i select the specifications$")
	public void i_select_the_specifications(DataTable searchData) {
	    
		for (Map<String, String> data : searchData.asMaps()) {
			driverWait = new WebDriverWait(driver, 10);
			
		    By checkBrand = By.xpath("//input[contains(@type,'checkbox') and contains(@aria-label,'" + data.get("brand") + "')]");
			driverWait.until(ExpectedConditions.presenceOfElementLocated(checkBrand));
			driver.findElement(checkBrand).click();
			
			By checkSize = By.xpath("//input[contains(@type,'checkbox') and contains(@aria-label,'" + data.get("size") + "')]");
			driverWait.until(ExpectedConditions.presenceOfElementLocated(checkSize));
		    driver.findElement(checkSize).click();
		}
		
	}
	
	@Then("^i see the list of the requested product$")
	public void I_see_the_list_of_the_requested_product() {
		driverWait = new WebDriverWait(driver, 10);
		By message = By.xpath("//*[@id='mainContent']/div[1]/div/div[2]/div/div[1]/h1/span[1]");
		driverWait.until(ExpectedConditions.presenceOfElementLocated(message));
		driver.findElement(message).getText();
	}
	
	@Then("^i close browser$")
	public void i_close_browser() {
		driver.close();
	}
	
}
