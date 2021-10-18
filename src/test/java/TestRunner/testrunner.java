package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Feature", 
glue = {"StepDefinition","Hooks"},
tags= {"@orderstable,@ordersfilter,@oderscheckbox, @ordersbutton, @editorder,  @vieworder, @pagination, @addcustomer"},
monochrome = true, 
plugin = {"pretty", "html: target/cucumber-report"})
public class testrunner {

}
