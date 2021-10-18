package Hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooksClass {

	public static WebDriver driver;
	
	@Before
	public void initialization() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", ".\\driver94\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin/");
		driver.manage().window().maximize();
		Thread.sleep(1000);
	}
	
	@After
	public void ending() throws InterruptedException
	{
		Thread.sleep(3000);
		driver.close();
		System.out.println("Browser successfully closed");
		Thread.sleep(1000);
	}
}
