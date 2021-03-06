Feature: Add customer feature

  Background: Login functionality
    Given User is on the login page
    When User enters username and password
    When User clicks the login button
    Then User is on the dashboard
    When User clicks the Customers option under Customer menu
    Then User is on the Customers page
    When User clicks add new button
    Then User is on the Add Customer page

  @addcustomer
  Scenario Outline: Verify Add customer page functionality
    When User selects an option for customer "<customer>" group dropdown
    When User enters firstname "<firstname>"  and lastname "<lastname>"
    When User enters email "<email>", telephone "<Telephone>" and fax "<fax>" "<flag>"
    When User enters password "<password>" and confirms "<confirm>"
    When User selects an option for newsletter "<newsletter>", status "<status>", approved "<approved>" and safe "<safe>"
    Then User clicks on save button
    And User sees validation message "<validation>"

    Examples: 
      | customer        | firstname                         | lastname                          | email                                                                     | Telephone     | fax            | password              | confirm               | newsletter | status   | approved | safe | validation | flag |
      #| Platinum Member | Abel                              | Park                              | abel123@gmail.com                                                         |    9876543210 |       67809102 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Success    |    1 |
      #|                 | Abel                              | Park                              | abel23@gmail.com                                                          |    9876543210 |                | abc@123               | abc@123               |            |          |          |      | Success    |    1 |
      #| Platinum Member |                                   |                                   |                                                                           |               |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
      #| Platinum Member | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghjklmnyuiopasdfghjklkmnbvcxzqwenrp@fff.com |    9876543210 |       67809102 | asdfghjklmnbWE@123232 | asdfghjklmnbWE@123231 | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
      #| Platinum Member |                                   |                                   | abelparkgmail.com                                                         |    9098766521 |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
      #| Platinum Member |                                   |                                   | abel@park@gmail.com                                                       |    9098766521 |                |                       | abc@457               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
      | Platinum Member | Abel@&%                           | Park@&%                           | abel123@gmail.com                                                         | 987654abc$    | 678a&$         | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |
      #| Platinum Member | Abel                              | Park                              | abel345@gmail.com                                                         | 9876543210000 | 67809102000000 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |
      #| Platinum Member |                                   |                                   |                                                                           |               |                | a@1                   | a@2                   | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
      #| Platinum Member |                                   |                                   |                                                                           |               |                |                       | abc@456               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |
