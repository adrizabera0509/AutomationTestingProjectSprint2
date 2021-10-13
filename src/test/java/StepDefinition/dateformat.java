package StepDefinition;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class dateformat {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String mydate = "2019-09-17";
//		LocalDateTime myDateObj = LocalDateTime;
//		DateTimeFormatter obj = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//		String newdate = mydate.format(obj);
//		System.out.println(newdate);
		
		  
	    
	     
	    LocalDate myDateObj = LocalDate.of(19, 9, 17);
	    String myFormatObj = myDateObj.format(DateTimeFormatter.ISO_DATE); 
	    System.out.println("After formatting: " + myFormatObj);  
		
	}

}
