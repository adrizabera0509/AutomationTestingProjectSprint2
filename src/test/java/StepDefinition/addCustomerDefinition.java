package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.asserts.SoftAssert;

import Hooks.hooksClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addCustomerDefinition {

	WebDriver driver = hooksClass.driver;
	SoftAssert obj = new SoftAssert();
	@Given("^User is on the login page$")
	public void user_is_on_the_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expectedTitle = "Administration";
		    String actualTitle = driver.getTitle();
		    if(expectedTitle.equals(actualTitle))
		    {
		    	System.out.println("User is on the login page");
		    }
		    else
		    {
		    	System.out.println("User is on wrong page");
		    	Assert.fail();
		    }
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String user = "admin";
	    	String password = "admin@123";
	    	driver.findElement(By.xpath("//input[@name = 'username']")).sendKeys(user);
	    	driver.findElement(By.xpath("//input[@name = 'password']")).sendKeys(password);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter credentials");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User clicks the login button$")
	public void user_clicks_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//button[@type = 'submit']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click login button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^User is on the dashboard$")
	public void user_is_on_the_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	String expectedTitle = "Dashboard";
	    	String actualTitle = driver.getTitle();
	    	if(expectedTitle.equals(actualTitle))
	    	{
	    		System.out.println("User is on " + actualTitle);
	    	}
	    	else
	    	{
	    		System.out.println("Not able to enter dashboard");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter dashboard");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@When("^User clicks the Customers option under Customer menu$")
	public void user_clicks_the_Customers_option_under_Customer_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//li[@id = 'menu-customer']")).click();
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//li[@id = 'menu-customer']/ul/li/a[contains(text(),'Customers')]")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click customer option");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^User is on the Customers page$")
	public void user_is_on_the_Customers_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	String expectedTitle = "Customers";
	    	String actualTitle = driver.getTitle();
	    	if(expectedTitle.equals(actualTitle))
	    	{
	    		System.out.println("User is on " + actualTitle + " page");
	    	}
	    	else
	    	{
	    		System.out.println("Not able to enter Customers page");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User clicks add new button$")
	public void user_clicks_add_new_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		   {
			   driver.findElement(By.xpath("//a[@data-original-title = 'Add New']")).click();
		   }
		catch(Exception e)
		{
			System.out.println("Not able to click add new button");
			Assert.fail();
		}
	}

	@Then("^User is on the Add Customer page$")
	public void user_is_on_the_Add_Customer_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   try {
		   String expectedTitle = "Add Customer";
		   String actualTitle = driver.findElement(By.xpath("//h3[@class = 'panel-title']")).getText();
		   if(expectedTitle.equals(actualTitle))
		   {
			   System.out.println("User is on the " + actualTitle + " page");
		   }
		   else
		   {
			   System.out.println("Not able to enter Add customer page");
			   Assert.fail();
		   }
		   Thread.sleep(1000);
	   }
	   catch(Exception e)
	   {
		   System.out.println(e);
		   Assert.fail();
	   }
	}
	@When("^User selects an option for customer \"([^\"]*)\" group dropdown$")
	public void user_selects_an_option_for_customer_group_dropdown(String group) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	if(group.length()!= 0) {
	    		Select customer = new Select(driver.findElement(By.xpath("//select[@id = 'input-customer-group']")));
		    	customer.selectByVisibleText(group);
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User is not able to select customer group");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User enters firstname \"([^\"]*)\"  and lastname \"([^\"]*)\"$")
	public void user_enters_firstname_and_lastname(String firstname, String lastname) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	driver.findElement(By.xpath("//input[@name = 'firstname']")).sendKeys(firstname);
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//input[@name = 'lastname']")).sendKeys(lastname);	
	    	Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter name");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User enters email \"([^\"]*)\", telephone \"([^\"]*)\" and fax \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_enters_email_telephone_and_fax(String email, String phone, String fax, String flag) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	int f = Integer.parseInt(flag);
	    	if(f == 1)
	    	{
	    		int n = 5;
				String alphaNumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnop" + "1234567890";
				String temp = new String();
				for(int i = 0; i < n; i++)
				{
					int index = (int)(alphaNumericChars.length() * Math.random());
					temp+= alphaNumericChars.charAt(index);
				}
				email = temp + "@gmail.com";
	    	}
	    	driver.findElement(By.xpath("//input[@name = 'email']")).sendKeys(email);
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//input[@name = 'telephone']")).sendKeys(phone);
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//input[@name = 'fax']")).sendKeys(fax);
	    	Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User not able to enter email, phone or fax");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User enters password \"([^\"]*)\" and confirms \"([^\"]*)\"$")
	public void user_enters_password_and_confirms(String password, String confirm) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	driver.findElement(By.xpath("//input[@name = 'password']")).sendKeys(password);
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//input[@name = 'confirm']")).sendKeys(confirm);
	    	Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter password");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^User selects an option for newsletter \"([^\"]*)\", status \"([^\"]*)\", approved \"([^\"]*)\" and safe \"([^\"]*)\"$")
	public void user_selects_an_option_for_newsletter_status_approved_and_safe(String newsletter, String status, String approved, String safe) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Select obj;
	    	if(newsletter.length()!= 0)
	    	{
	    		obj = new Select(driver.findElement(By.xpath("//select[@name = 'newsletter']")));
		    	obj.selectByVisibleText(newsletter);
		    	Thread.sleep(1000);
	    	}
	    	if(status.length() != 0)
	    	{
	    		obj = new Select(driver.findElement(By.xpath("//select[@name = 'status']")));
		    	obj.selectByVisibleText(status);
		    	Thread.sleep(1000);
	    	}
	    	if(approved.length()!= 0)
	    	{
	    		obj = new Select(driver.findElement(By.xpath("//select[@name = 'approved']")));
		    	obj.selectByVisibleText(approved);
		    	Thread.sleep(1000);
	    	}
	    	if(safe.length()!= 0)
	    	{
	    		obj = new Select(driver.findElement(By.xpath("//select[@name = 'safe']")));
		    	obj.selectByVisibleText(safe);
		    	Thread.sleep(1000);
	    	}
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to select options");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^User clicks on save button$")
	public void user_clicks_on_save_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//button[@data-original-title=\"Save\"]")).click();
		}
	    catch(Exception e)
		{
	    	System.out.println("Not able to click save button");
	    	System.out.println(e);
	    	Assert.fail();
		}
	}

	@Then("^User sees validation message \"([^\"]*)\"$")
	public void user_sees_validation_message(String validation) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	String expected = new String();
	    	String actual = new String();
	    	String[] temp = new String[2]; 
	    	switch(validation)
	    	{
		    	case "Success":
		    	{
		    		expected = "Success: You have modified customers!";
		    		actual = driver.findElement(By.xpath("//div[contains(text(),'Success: You have modified customers!')]")).getText();
		    		temp = actual.split("\n");
			    	actual = temp[0];
			    	System.out.println(expected);
			    	System.out.println(actual);
			    	Assert.assertTrue(expected.contains(actual));
		    		if(expected.contains(actual))
				    	{
				    		System.out.println("Successfully registered");
				    	}
		    		else
		    		{
		    			System.out.println("Testcase failed");
		    			Assert.fail();
		    		}
		    		break;
		    	}
		    	case "Warning":
		    	{
		    		validationClass.validateFieldsAddCustomer();
		    	}
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}	
}
