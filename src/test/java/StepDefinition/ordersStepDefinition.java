package StepDefinition;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import Hooks.hooksClass;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ordersStepDefinition {

	WebDriver driver = hooksClass.driver;
	List<Integer> arr = new ArrayList<Integer>();
	String flag = new String();
	@When("^User clicks the orders under sales menu$")
	public void user_clicks_the_orders_under_sales_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//li[@id = 'menu-sale']")).click();
	    	driver.findElement(By.xpath("//li[@id = 'menu-sale']/ul/li/a[contains(text(),'Orders')]")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click order option");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^User is on the orders page$")
	public void user_is_on_the_orders_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expectedTitle = "Orders";
	    	String actualTitle = driver.getTitle();
	    	Assert.assertTrue(expectedTitle.equals(actualTitle));
	    	System.out.println("User is on the " + actualTitle + " page");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter orders page");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	@When("^user enters orderid \"([^\"]*)\"$")
	public void user_enters_orderid(String orderid) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	if(orderid.length() != 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id = 'input-order-id']")).sendKeys(orderid);
		    	Thread.sleep(1000);
	    	}    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter order id");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user enters order status \"([^\"]*)\"$")
	public void user_enters_order_status(String status) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(status.length() !=0 )
	    	{
	    		Select obj = new Select(driver.findElement(By.xpath("//select[@id = 'input-order-status']")));
		    	obj.selectByVisibleText(status);
		    	Thread.sleep(1000);
	    	}	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to select status");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user enters customer name \"([^\"]*)\"$")
	public void user_enters_customer_name(String customer) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(customer.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id = 'input-customer']")).sendKeys(customer);
		    	Thread.sleep(1000);
		    	driver.findElement(By.xpath("//input[@id = 'input-customer']/following-sibling::ul/li/a")).click();
		    	Thread.sleep(1000);
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Enter valid customer name");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user enters total amount \"([^\"]*)\"$")
	public void user_enters_total_amount(String total) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(total.length() != 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id = 'input-total']")).sendKeys(total);
		    	Thread.sleep(1000);
	    	}	
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to send total amount");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@When("^user enters date added \"([^\"]*)\"$")
	public void user_enters_date_added(String date) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//input[@id = 'input-date-added']")).sendKeys(date);
	    	Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter valid date added");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user enters date modified \"([^\"]*)\"$")
	public void user_enters_date_modified(String date) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
	    {
	    	driver.findElement(By.xpath("//input[@id = 'input-date-modified']")).sendKeys(date);
	    	Thread.sleep(1000);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter valid date modified");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@When("^user clicks filter button$")
	public void user_clicks_filter_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	driver.findElement(By.xpath("//button[@id = 'button-filter']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click filter button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user sees filtered result \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\"$")
	public void user_sees_filtered_result(String id, String status, String customer, String amount, String added, String modified, String validation, String result) {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			validationClass.validFieldsOrderFilter(id, status, customer, amount, added, modified, validation, result);
		}
		catch(Exception e)
    	{
    		System.out.println(e);
    		Assert.fail();
    	}
	    
	}
	@When("^user clicks one of the header of the table \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_clicks_one_of_the_header_of_the_table(String orderid, String customer, String status, String total, String added, String modified) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(orderid.length()!= 0)
	    	{
	    		if(orderid.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[2]/a")).click();
	    		}
	    		
	    	}
	    	if(customer.length()!= 0)
	    	{
	    		if(customer.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[3]/a")).click();
	    		}
	    		
	    	}
	    	if(status.length()!= 0)
	    	{
	    		if(status.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[4]/a")).click();
	    		}
	    		
	    	}
	    	if(total.length()!= 0)
	    	{
	    		if(total.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[5]/a")).click();
	    		}
	    		
	    	}
	    	if(added.length()!= 0)
	    	{
	    		if(added.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[6]/a")).click();
	    		}
	    	}
	    	if(modified.length()!= 0)
	    	{
	    		if(modified.equals("asc"))
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[7]/a")).click();
	    		}
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	@Then("^user sees sorted data in the table \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_sees_sorted_data_in_the_table(String orderid, String customer, String status, String total, String added, String modified) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			validationClass.validateSortedTable(orderid, customer, status, total, added, modified);
		}
	    catch(Exception e)
		{
	    	System.out.println(e);
	    	Assert.fail();
		}
	}
	
	@When("^user checks the checkbox on the table header$")
	public void user_checks_the_checkbox_on_the_table_header() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[1]")).click();
			Thread.sleep(1000);
		}
		catch(Exception e)
		{
			System.out.println("Not able to check the checkbox");
			System.out.println(e);
			Assert.fail();
		}
	}

	@Then("^user finds checkboxes in the each row in checked$")
	public void user_finds_checkboxes_in_the_each_row_in_checked() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	List<WebElement> checklist = driver.findElements(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr/td[1]/input[@name = 'selected[]']"));
	    	System.out.println(checklist.size());
	    	int flag = 0;
	    	for(int i = 0;i < checklist.size(); i++)
	    	{
//	    		System.out.println(checklist.get(i).isSelected());
	    		if(!checklist.get(i).isSelected())
	    		{
	    			flag = 1;
	    			break;
	    		}
	    	}
	    	if(flag != 0)
	    	{
	    		System.out.println("User could not find all checkboxes as checked");
    			Assert.fail();
	    	}
	    	else
	    	{
	    		System.out.println("All checkboxes are successfully chekced");
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user checks the checkbox of a row \"([^\"]*)\"$")
	public void user_checks_the_checkbox_of_a_row(String arg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[1]/input[@onclick ]")).isSelected())
	    	{
	    		driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/thead/tr/td[1]/input[@onclick ]")).click();
	    	}
	    	Thread.sleep(2000);
	    	int index;
	    	int rows = Integer.parseInt(arg);
	    	for(int i = 0; i < rows; i++)
	    	{
	    		index = (int) Math.floor(Math.random() * 25);
	    		if(index == 0)
	    		{
	    			index+=1;
	    		}
	    		System.out.println(index);
	    		arr.add(index);
	    		if(driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + index + "]/td[1]/input[@name='selected[]']")).isSelected())
	    		{
	    			driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + index + "]/td[1]/input[@name='selected[]']")).click();
	    		}
	    		driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + index + "]/td[1]/input[@name='selected[]']")).click();
	    		Thread.sleep(1000);
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to check checkbox");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user finds the checkbox of that particular row is checked \"([^\"]*)\"$")
	public void user_finds_the_checkbox_of_that_particular_row_is_checked(String arg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			int row = Integer.parseInt(arg);
			int index;
			int flag = 0;
			for(int i = 0; i < row; i++)
			{
				index = arr.get(i);
				if(!driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + index + "]/td[1]/input[@name='selected[]']")).isSelected())
				{
					flag = 1;
					break;
				}
				Thread.sleep(1000);
			}
			if(flag != 0)
			{
				System.out.println("Desired checkbox is not checked");
				Assert.fail();
			}
			else
			{
				System.out.println("Desired number of checkboxes are checked");
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}
	}
	@When("^user clicks add order button$")
	public void user_clicks_add_order_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	driver.findElement(By.xpath("//a[@data-original-title = 'Add New']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click add new order button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user is on the add order page$")
	public void user_is_on_the_add_order_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String actual = driver.findElement(By.xpath("//h3[contains(text(), ' Add Order')]")).getText();
	    	System.out.println(actual);
	    	String expected = "Add Order";
	    	System.out.println(expected);
	    	System.out.println(actual.equals(expected));
	    	Assert.assertTrue(actual.equals(expected));
	    	System.out.println("User is on the Add Order page");
	    	Thread.sleep(2000);
	    	driver.navigate().back();
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user clicks print delete button$")
	public void user_clicks_print_delete_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			driver.findElement(By.xpath("//button[@id = 'button-delete']")).click();
			Thread.sleep(2000);
		}
		catch(Exception e)
		{
			System.out.println("Not able to click delete button");
	    	System.out.println(e);
	    	Assert.fail();
		}
	    
	}

	@Then("^user sees alert box$")
	public void user_sees_alert_box() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Alert alertbox = driver.switchTo().alert();
	    	String alert_msg = alertbox.getText();
	    	String expected = "Are you sure?";
	    	if(alert_msg.equals(expected))
	    	{
	    		System.out.println("User sees alert box");
	    		alertbox.dismiss();
	    	}
	    	else
	    	{
	    		System.out.println("Not able to see correct alert box");
	    		alertbox.dismiss();
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    }
	}
	@When("^user clicks the edit button of an order \"([^\"]*)\"$")
	public void user_clicks_the_edit_button_of_an_order(String index) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + index + "]/td[8]/a[@data-original-title = 'Edit']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click edit button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user is on the edit order page$")
	public void user_is_on_the_edit_order_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expected = "Edit Order";
	    	System.out.println(expected);
	    	String actual = driver.findElement(By.xpath("//h3[contains(text(), ' Edit Order')]")).getText();
	    	System.out.println(actual);
	    	if(actual.equals(expected))
	    	{
	    		System.out.println("User is on the Edit Order page");
	    	}
	    	else
	    	{
	    		System.out.println("User is not in Edit Order page");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user selects store \"([^\"]*)\" and currency \"([^\"]*)\"$")
	public void user_selects_store_and_currency(String store, String currency) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			Thread.sleep(1000);
			Select obj = new Select(driver.findElement(By.xpath("//select[@id = 'input-store']")));
			obj.selectByVisibleText(store);
			Thread.sleep(1000);
			obj = new Select(driver.findElement(By.xpath("//select[@id = 'input-currency']")));
			obj.selectByValue(currency);
		}
		catch(Exception e)
		{
			System.out.println("Not able to select store or currency");
			System.out.println(e);
			Assert.fail();
		}
	    
	}

	@When("^user enters customer \"([^\"]*)\" and customer group \"([^\"]*)\"$")
	public void user_enters_customer_and_customer_group(String customer, String group) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	if(customer.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id = 'input-customer']")).clear();
	    	}
	    	driver.findElement(By.xpath("//input[@id = 'input-customer']")).sendKeys(customer);
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//input[@id = 'input-customer']/following-sibling::ul/li/a[contains(text(), 'Nandita Kumari')]")).click();
	    	Thread.sleep(1000);
	    	Select obj = new Select(driver.findElement(By.xpath("//select[@id = 'input-customer-group']")));
	    	obj.selectByVisibleText(group);
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to enter customer and customer group");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user enters firstname \"([^\"]*)\", lastname \"([^\"]*)\", email \"([^\"]*)\" , telephone \"([^\"]*)\" and fax number \"([^\"]*)\"$")
	public void user_enters_firstname_lastname_email_telephone_and_fax_number(String first, String last, String email, String phone, String fax) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Thread.sleep(1000);
	    	if(first.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id ='input-firstname']")).clear();
	    		driver.findElement(By.xpath("//input[@id ='input-firstname']")).sendKeys(first);
	    	}
	    	
	    	Thread.sleep(1000);
	    	if(last.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id ='input-lastname']")).clear();
	    		driver.findElement(By.xpath("//input[@id ='input-lastname']")).sendKeys(last);
	    	}
	    	
	    	Thread.sleep(1000);
	    	if(email.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id ='input-email']")).clear();
	    		driver.findElement(By.xpath("//input[@id ='input-email']")).sendKeys(email);
	    	}
	    	Thread.sleep(1000);
	    	if(phone.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id ='input-telephone']")).clear();
	    		driver.findElement(By.xpath("//input[@id ='input-telephone']")).sendKeys(phone);
	    	}
	    	Thread.sleep(1000);
	    	if(fax.length()!= 0)
	    	{
	    		driver.findElement(By.xpath("//input[@id ='input-fax']")).clear();
	    		driver.findElement(By.xpath("//input[@id ='input-fax']")).sendKeys(fax);
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User is not able to enter new data");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@When("^user clicks the continue button$")
	public void user_clicks_the_continue_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//button[@id = 'button-customer']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click continue button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user is on the next products tab \"([^\"]*)\"$")
	public void user_is_on_the_next_products_tab(String validation) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			if(validation.equals("success"))
			{
				if(driver.findElement(By.xpath("//div[@class = 'alert alert-danger']")).isDisplayed())
				{
					System.out.println("Testcase Failed");
					Assert.fail();
				}
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
			Assert.fail();
		}    
	}
	
	@When("^user clicks the cancel button$")
	public void user_clicks_the_cancel_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//a[contains(text(),'Cancel')]")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click the cancel button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@When("^user clicks the view button of an order \"([^\"]*)\"$")
	public void user_clicks_the_view_button_of_an_order(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	Thread.sleep(1000);
	    	driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[17]/td[8]/a[@data-original-title = 'View']")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("Not able to click view button");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user is on the view order page$")
	public void user_is_on_the_view_order_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String actual = driver.findElement(By.xpath("//h3[contains(text(),' Order Details')]")).getText();
	    	System.out.println(actual);
	    	String expected = "Order Details";
	    	System.out.println(expected);
	    	Assert.assertTrue(expected.equals(actual));
	    	System.out.println("User is on the view order page");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User is not on view order page");
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	@Then("^user sees payment method \"([^\"]*)\" under Order details$")
	public void user_sees_payment_method_under_Order_details(String payment) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expected = payment;
	    	String actual = driver.findElement(By.xpath("//h3[contains(text(),' Order Details')]/parent::div/following-sibling::table/tbody/tr[3]/td[2]")).getText();
	    	if(expected.equals(actual))
	    	{
	    		System.out.println("Correct payment method is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Incorrect payment method");
	    		Assert.fail();
	    	}
	    	
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user sees customer name \"([^\"]*)\", email \"([^\"]*)\", telephone \"([^\"]*)\" under Customer details$")
	public void user_sees_customer_name_email_telephone_under_Customer_details(String name, String email, String phone) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expected = name;
	    	String actual = driver.findElement(By.xpath("//h3[contains(text(),' Customer Details')]/parent::div/following-sibling::table/tbody/tr[1]/td[2]")).getText();
	    	if(expected.equals(actual))
	    	{
	    		System.out.println("Correct customer name is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Incorrect customer name");
	    		Assert.fail();
	    	}
	    	
	    	expected = email;
	    	actual = driver.findElement(By.xpath("//h3[contains(text(),' Customer Details')]/parent::div/following-sibling::table/tbody/tr[3]/td[2]")).getText();
	    	if(expected.equals(actual))
	    	{
	    		System.out.println("Correct email is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Incorrect email");
	    		Assert.fail();
	    	}
	  
	    	expected = phone;
	    	actual = driver.findElement(By.xpath("//h3[contains(text(),' Customer Details')]/parent::div/following-sibling::table/tbody/tr[4]/td[2]")).getText();
	    	if(expected.equals(actual))
	    	{
	    		System.out.println("Correct phone is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Incorrect phone");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }	    
	}

	@Then("^user sees payment address and shipping address under Order$")
	public void user_sees_payment_address_and_shipping_address_under_Order() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String payment_address = driver.findElement(By.xpath("//table/thead/tr[1]/td[1][contains(text(), 'Payment Address')]/parent::tr/parent::thead/following-sibling::tbody/tr/td[1]")).getText();
	    	if(payment_address.length() != 0)
	    	{
	    		System.out.println("Payment addess is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Payment address is not displayed");
	    		Assert.fail();
	    	}
	    	String shipping_address = driver.findElement(By.xpath("//table/thead/tr[1]/td[2][contains(text(), 'Shipping Address')]/parent::tr/parent::thead/following-sibling::tbody/tr/td[2]")).getText();
	    	if(shipping_address.length() != 0)
	    	{
	    		System.out.println("Shipping addess is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Shipping address is not displayed");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user sees total amount \"([^\"]*)\"$")
	public void user_sees_total_amount(String total) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String expected = total;
	    	String actual = driver.findElement(By.xpath("//table/thead/tr[1]/td[5]/parent::tr/parent::thead/following-sibling::tbody/tr[4]/td[2]")).getText();
	    	actual = actual.substring(3);
	    	if(expected.equals(actual))
	    	{
	    		System.out.println("Correct total amount is displayed");
	    	}
	    	else
	    	{
	    		System.out.println("Incorrect total");
	    		Assert.fail();
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}
	
	@When("^number of entries/row in the orders table is more than twenty five$")
	public void number_of_entries_row_in_the_orders_table_is_more_than_twenty_five() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    try
	    {
	    	String msg = driver.findElement(By.xpath("//div[starts-with(text(),'Showing')]")).getText();
	    	String[] temp = msg.split(" ");
	    	for(String e: temp)
	    	{
	    		System.out.println(e);
	    	}
	    	int orders = Integer.parseInt(temp[5]);
	    	if(orders > 25)
	    	{
	    		flag = "yes";
	    	}
	    	else
	    	{
	    		flag = "no";
	    	}
	    }
	    catch(Exception e)
	    {
	    	System.out.println(e);
	    	Assert.fail();
	    }
	}

	@Then("^user finds the pagination$")
	public void user_finds_the_pagination() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   try
	   {
		   if(flag.equals(flag))
		   {
			   boolean isPagination = driver.findElement(By.xpath("//ul[@class = 'pagination']")).isDisplayed();
			   if(isPagination)
			   {
				   System.out.println("User can see pagination");
			   }
			   else
			   {
				   System.out.println("Pagination is not displayed");
				   Assert.fail();
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
