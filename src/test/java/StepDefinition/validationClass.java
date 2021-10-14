package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Hooks.hooksClass;

public class validationClass {
	public static WebDriver driver = hooksClass.driver;
	
	public static void validateFieldsAddCustomer()
	{
		try
		{
			String expected = new String();
	    	String actual = new String();
	    	String[] temp = new String[2];
			
	    	expected = "Warning: Please check the form carefully for errors!";
			actual = driver.findElement(By.xpath("//div[contains(text(),'Warning: Please check the form carefully for errors!')]")).getText();
    		temp = actual.split("\n");
    		actual = temp[0];
	    	
    		System.out.println(actual);
	    	System.out.println(expected.equals(actual));
	    	if(expected.equals(actual))
	    	{
	    		boolean result = driver.findElement(By.xpath("//input[@placeholder = 'First Name']/following-sibling::div")).isDisplayed();
	    		if(result)
	    		{
	    			Assert.assertTrue(result);
	    			System.out.println("Warning message is displayed for first name");
	    		}
	    		result = driver.findElement(By.xpath("//input[@placeholder = 'Last Name']/following-sibling::div")).isDisplayed();
	    		if(result)
	    		{
	    			Assert.assertTrue(result);
	    			System.out.println("Warning message is displayed for last name");
	    		}
	    		result = driver.findElement(By.xpath("//input[@id = 'input-email']/following-sibling::div")).isDisplayed();
	    		if(result)
	    		{
	    			System.out.println("Warning message is displayed for email");
	    		}
	    		result = driver.findElement(By.xpath("//input[@id = 'input-password']/following-sibling::div")).isDisplayed();
	    		if(result)
	    		{
	    			System.out.println("Warning message is displayed for password");
	    		}
	    		result = driver.findElement(By.xpath("//input[@id = 'input-confirm']/following-sibling::div")).isDisplayed();
	    		if(result)
	    		{
	    			System.out.println("Warning message is displayed for confirm password");
	    		}
	    	}
		}
		catch(Exception e)
		{
			System.out.println("Test case failed");
			System.out.println(e);
			Assert.fail();
		}
	}
	public static void validFieldsOrderFilter(String id, String status, String customer, String amount, String added, String modified, String validation, String result)
	{
		try
	    {
	    	String expected = new String();
    		String actual = new String();
	    	switch(validation)
	    	{
	    		case "success":
	    		{
	    			if(result.equals("yes"))
    				{
	    				if(id.length() != 0)
		    			{
	    					expected = id;
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[2]")).getText();
		    				Assert.assertTrue(expected.equals(actual));
		    			}
	    				if(status.length() != 0)
		    			{
		    				expected = status;
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[4]")).getText();
		    				System.out.println(actual + "," + expected);
		    				Assert.assertTrue(expected.equals(actual));
		    			}
	    				if(customer.length() != 0)
		    			{
		    				expected = customer;
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[3]")).getText();
		    				Assert.assertTrue(expected.equals(actual));
		    			}
		    			if(amount.length() != 0)
		    			{
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[5]")).getText();
		    				expected = "Rs." + amount;
			    			Assert.assertTrue(expected.equals(actual));
		    			}
		    			if(added.length() != 0)
		    			{
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[6]")).getText();
		    				String[] temp = new String[3];
		    				String day = new String();
		    				String month = new String();
		    				String year = "";
		    				if(added.contains("-"))
		    				{
		    					temp = added.split("-");
		    					if(added.length() == 8)
		    					{
		    						year = year + "20" + temp[0];
		    					}
		    					else
		    					{
		    						year = year + temp[0];
		    					}
		    					day = temp[2];
			    				month = temp[1];
			    				
		    				}
		    				else if(added.contains("/"))
		    				{ 
		    					System.out.println(added);
		    					temp = added.split("/");
		    					if(added.length() == 8)
		    					{
		    						year = year + "20" + temp[0];
		    					}
		    					else
		    					{
		    						year = year + temp[0];
		    					}
		    					day = temp[2];
			    				month = temp[1];
			    				
		    				}
		    				else if(added.length() == 8)
		    				{
		    					year = added.substring(0, 4);
		    					month = added.substring(4,6);
		    					day = added.substring(6);
		    				}
		    				else if(added.length() == 6)
		    				{
		    					System.out.println(added);
		    					year = year + "20" + added.substring(0, 2);
		    					month = added.substring(2,4);
		    					day = added.substring(4);
		    				}
		    				expected = day + "/" + month + "/" + year;
		    				System.out.println(actual + "," + expected);
		    				Assert.assertTrue(expected.equals(actual));
		    			}
		    			
		    			if(modified.length() != 0)
		    			{
		    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[7]")).getText();
		    				
		    				String[] temp = new String[3];
		    				String day = new String();
		    				String month = new String();
		    				String year = "";
		    				if(modified.contains("-"))
		    				{
		    					temp = modified.split("-");
		    					if(modified.length() == 8)
		    					{
		    						year = year + "20" + temp[0];
		    					}
		    					else
		    					{
		    						year = year + temp[0];
		    					}
		    					day = temp[2];
			    				month = temp[1];
		    				}
		    				else if(modified.contains("/"))
		    				{ 
		    					temp = modified.split("/");
		    					if(modified.length() == 8)
		    					{
		    						year = year + "20" + temp[0];
		    					}
		    					else
		    					{
		    						year = year + temp[0];
		    					}
		    					day = temp[2];
			    				month = temp[1];
		    				}
		    				else if(modified.length() == 8)
		    				{
		    					year = modified.substring(0, 4);
		    					month = modified.substring(4,6);
		    					day = modified.substring(6);
		    				}
		    				else if(modified.length() == 6)
		    				{
		    					System.out.println(modified);
		    					year = year + "20" + modified.substring(0, 2);
		    					month = modified.substring(2,4);
		    					day = modified.substring(4);
		    				}
		    				expected = day + "/" + month + "/" + year;
		    				System.out.println(actual + "," + expected);
		    				Assert.assertTrue(expected.equals(actual));
		    				
		    			}
    				}
    				else
    				{
    					expected = "No results!";
	    				actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td")).getText();
	    				Assert.assertTrue(expected.equals(actual));
    				}
	    			System.out.println("Correct filtered result!");
	    			break;
	    		}
	    		case "warning":
		    	{
		    		if(amount.length() != 0)
		    		{
		    			actual = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[5]")).getText();
		    			expected = "No results!";
		    			Assert.assertTrue(expected.equals(actual));
		    		}
		    	}
	    	}
	    	
	    }
	    catch(Exception e)
    	{
    		System.out.println(e);
    		Assert.fail();
    	}
	}
	
	public static void validateSortedTable(String orderid, String customer, String status, String total, String added, String modified)
	{
		try
	    {
	    	if(orderid.length()!= 0)
	    	{
	    		if(orderid.equals("asc"))
		    	{
		    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[2]")).getText();
		    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[2]")).getText();
		    		
		    		int num1 = Integer.parseInt(value1);
		    		int num2 = Integer.parseInt(value2);
		    		if(num1 < num2)
		    		{
		    			System.out.println("Successfully sorted in Ascending order by orderid");
		    		}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
	    		else
		    	{
		    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[2]")).getText();
		    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[2]")).getText();
		    		
		    		int num1 = Integer.parseInt(value1);
		    		int num2 = Integer.parseInt(value2);
		    		if(num1 > num2)
		    		{
		    			System.out.println("Successfully sorted in Descending order by orderid");
		    		}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
	    	}
	    	if(customer.length()!= 0)
	    	{
	    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[3]")).getText().toLowerCase();
	    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[3]")).getText().toLowerCase();
	    		if(customer.equals("asc"))
		    	{
	    			if(value1.compareTo(value2) == 0)
	    			{
	    				int i = 3;
	    				while(value1.compareTo(value2) == 0)
		    			{
		    				value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + i + "]/td[3]")).getText().toLowerCase();
		    				
		    				i+=1;
		    			}
	    			}
		    		if(value1.compareTo(value2) < 0)
		    		{
		    			System.out.println("Successfully sorted in Ascending order by name");
		    		}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
		    	else
		    	{
		    		if((value1.compareTo(value2) > 0) || (value1.compareTo(value2) == 0))
		    		{
		    			System.out.println("Successfully sorted in Descending order by name");
		    		}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
	    	}
	    	if(status.length()!= 0)
	    	{
	    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[4]")).getText().toLowerCase();
	    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[4]")).getText().toLowerCase();
	    		if(status.equals("asc"))
		    	{
		    		if(value1.compareTo(value2) == 0)
		    		{
		    			int i = 3;
		    			while(value1.compareTo(value2) == 0)
		    			{
		    				value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + i + "]/td[4]")).getText().toLowerCase();
		    				i+=1;
		    			}		    			
		    		}
		    		if(value1.compareTo(value2) < 0)
	    			{
	    				System.out.println("Successfully sorted in Ascending order by status");
	    			}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
	    		else
		    	{
		    		if((value1.compareTo(value2) > 0) || (value1.compareTo(value2) == 0))
		    		{
		    			System.out.println("Successfully sorted in Descending order by status");
		    		}
		    		else
		    		{
		    			System.out.println("Not in sorted order");
		    			Assert.fail();
		    		}
		    	}
	    	}
	    	if(total.length() != 0)
	    	{
	    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[5]")).getText();
	    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[5]")).getText();
	    		
	    		String num1 = value1.substring(3);
	    		String num2 = value2.substring(3);
	    		System.out.println(num1);
	    		System.out.println(num2);
	    		
	    		if(total.equals("asc"))
	    		{
	    			
	    			if(num1.equals(num2))
		    		{
		    			int i = 3;
		    			while(num1.equals(num2))
		    			{
		    				value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + i + "]/td[5]")).getText();
		    				num2 = value2.substring(3);
		    				System.out.println(num2);
		    				i+=1;
		    			}
		    		}
		    		if(num1.compareTo(num2) < 0)
		    		{
		    			System.out.println("Successfully sorted in Ascending order by total");
		    		}
		    		else
		    		{
		    			System.out.println("Not able to sort");
		    			Assert.fail();
		    		}
	    		}
	    		else
	    		{
	    			if(num1.contains(","))
	    			{
	    				String[] temp = num1.split(",");
	    				num1 = temp[0] + temp[1];
	    			}
	    			if(num2.contains(","))
	    			{
	    				String[] temp = num2.split(",");
	    				num2 = temp[0] + temp[1];
	    			}
	    			System.out.println(num1 + " " + num2);
	    			int n1 = Integer.parseInt(num1);
	    			int n2 = Integer.parseInt(num2);
	    			if((n1 > n2) || (n1 == n2))
	    			{
	    				System.out.println("Successfully sorted in Descending order by total");
	    			}
	    			else
	    			{
	    				System.out.println("Not able to sort");
		    			Assert.fail();
	    			}
	    		}
	    	}
	    	if(added.length()!= 0)
	    	{
	    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[6]")).getText();
	    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[6]")).getText();
	    		if(added.equals("asc"))
	    		{
	    			if(value1.equals(value2))
	    			{
	    				int i = 3;
	    				while(value1.equals(value2))
	    				{
	    					value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + i + "]/td[6]")).getText();
	    					System.out.println(value2);
	    					i+=1;
	    				}
	    			}
	    			if(value1.compareTo(value2) < 0)
	    			{
	    				System.out.println("Successfully sorted in Ascending order by added date");
	    			}
	    			else
	    			{
	    				System.out.println("Not able to sort");
	    				Assert.fail();
	    			}
	    		}
	    		else
	    		{
	    			if((value1.compareTo(value2) > 0) || (value1.compareTo(value2) == 0))
	    			{
	    				System.out.println("Successfully sorted in Descending order by added date");
	    			}
	    		}
	    	}
	    	if(modified.length()!= 0)
	    	{
	    		String value1 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[1]/td[7]")).getText();
	    		String value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[2]/td[7]")).getText();
	    		if(modified.equals("asc"))
	    		{
	    			if(value1.equals(value2))
	    			{
	    				int i = 3;
	    				while(value1.equals(value2))
	    				{
	    					value2 = driver.findElement(By.xpath("//form[@id = 'form-order']/div/table/tbody/tr[" + i + "]/td[7]")).getText();
	    					System.out.println(value2);
	    					i+=1;
	    				}
	    			}
	    			if(value1.compareTo(value2) < 0)
	    			{
	    				System.out.println("Successfully sorted in Ascending order by modified date");
	    			}
	    			else
	    			{
	    				System.out.println("Not able to sort");
	    				Assert.fail();
	    			}
	    		}
	    		else
	    		{
	    			if((value1.compareTo(value2) > 0) || (value1.compareTo(value2) == 0))
	    			{
	    				System.out.println("Successfully sorted in Descending order by modified date");
	    			}
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
