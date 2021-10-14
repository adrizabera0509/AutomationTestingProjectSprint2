$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Add customer feature",
  "description": "",
  "id": "add-customer-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify Add customer page functionality",
  "description": "",
  "id": "add-customer-feature;verify-add-customer-page-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@addcustomer"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User selects an option for customer \"\u003ccustomer\u003e\" group dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters firstname \"\u003cfirstname\u003e\"  and lastname \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters email \"\u003cemail\u003e\", telephone \"\u003cTelephone\u003e\" and fax \"\u003cfax\u003e\" \"\u003cflag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"\u003cpassword\u003e\" and confirms \"\u003cconfirm\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User selects an option for newsletter \"\u003cnewsletter\u003e\", status \"\u003cstatus\u003e\", approved \"\u003capproved\u003e\" and safe \"\u003csafe\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User sees validation message \"\u003cvalidation\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "add-customer-feature;verify-add-customer-page-functionality;",
  "rows": [
    {
      "cells": [
        "customer",
        "firstname",
        "lastname",
        "email",
        "Telephone",
        "fax",
        "password",
        "confirm",
        "newsletter",
        "status",
        "approved",
        "safe",
        "validation",
        "flag"
      ],
      "line": 24,
      "id": "add-customer-feature;verify-add-customer-page-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 25,
          "value": "#| Platinum Member | Abel                              | Park                              | abel123@gmail.com                                                         |    9876543210 |       67809102 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Success    |    1 |"
        },
        {
          "line": 26,
          "value": "#|                 | Abel                              | Park                              | abel23@gmail.com                                                          |    9876543210 |                | abc@123               | abc@123               |            |          |          |      | Success    |    1 |"
        },
        {
          "line": 27,
          "value": "#| Platinum Member |                                   |                                   |                                                                           |               |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        },
        {
          "line": 28,
          "value": "#| Platinum Member | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghjklmnyuiopasdfghjklkmnbvcxzqwenrp@fff.com |    9876543210 |       67809102 | asdfghjklmnbWE@123232 | asdfghjklmnbWE@123231 | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        },
        {
          "line": 29,
          "value": "#| Platinum Member |                                   |                                   | abelparkgmail.com                                                         |    9098766521 |                |                | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        },
        {
          "line": 30,
          "value": "#| Platinum Member |                                   |                                   | abel@park@gmail.com                                                       |    9098766521 |                | abc@456               | abc@457               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        },
        {
          "line": 31,
          "value": "#| Platinum Member | Abel@\u0026%                           | Park@\u0026%                           | abel123@gmail.com                                                         | 987654abc$    | 678a\u0026$         | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |"
        },
        {
          "line": 32,
          "value": "#| Platinum Member | Abel                              | Park                              | abel345@gmail.com                                                         | 9876543210000 | 67809102000000 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |"
        },
        {
          "line": 33,
          "value": "#| Platinum Member |                                   |                                   |                                                                           |               |                | a@1                   | a@2                   | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        }
      ],
      "cells": [
        "Platinum Member",
        "",
        "",
        "",
        "",
        "",
        "",
        "abc@456",
        "Enabled",
        "Disabled",
        "No",
        "Yes",
        "Warning",
        "0"
      ],
      "line": 34,
      "id": "add-customer-feature;verify-add-customer-page-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10782676800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks the login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is on the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks the Customers option under Customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the Customers page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks add new button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User is on the Add Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 152868800,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 253129200,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1798082700,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 7257800,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_Customers_option_under_Customer_menu()"
});
formatter.result({
  "duration": 1663920400,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_Customers_page()"
});
formatter.result({
  "duration": 4647100,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_add_new_button()"
});
formatter.result({
  "duration": 1097598900,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_Add_Customer_page()"
});
formatter.result({
  "duration": 1060617900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#| Platinum Member | Abel                              | Park                              | abel123@gmail.com                                                         |    9876543210 |       67809102 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Success    |    1 |"
    },
    {
      "line": 26,
      "value": "#|                 | Abel                              | Park                              | abel23@gmail.com                                                          |    9876543210 |                | abc@123               | abc@123               |            |          |          |      | Success    |    1 |"
    },
    {
      "line": 27,
      "value": "#| Platinum Member |                                   |                                   |                                                                           |               |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    },
    {
      "line": 28,
      "value": "#| Platinum Member | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghl | asdfghjklmnbvcxzqwertyuiopasdfghjklmnyuiopasdfghjklkmnbvcxzqwenrp@fff.com |    9876543210 |       67809102 | asdfghjklmnbWE@123232 | asdfghjklmnbWE@123231 | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    },
    {
      "line": 29,
      "value": "#| Platinum Member |                                   |                                   | abelparkgmail.com                                                         |    9098766521 |                |                | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    },
    {
      "line": 30,
      "value": "#| Platinum Member |                                   |                                   | abel@park@gmail.com                                                       |    9098766521 |                | abc@456               | abc@457               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    },
    {
      "line": 31,
      "value": "#| Platinum Member | Abel@\u0026%                           | Park@\u0026%                           | abel123@gmail.com                                                         | 987654abc$    | 678a\u0026$         | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |"
    },
    {
      "line": 32,
      "value": "#| Platinum Member | Abel                              | Park                              | abel345@gmail.com                                                         | 9876543210000 | 67809102000000 | abc@123               | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    1 |"
    },
    {
      "line": 33,
      "value": "#| Platinum Member |                                   |                                   |                                                                           |               |                | a@1                   | a@2                   | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    }
  ],
  "line": 34,
  "name": "Verify Add customer page functionality",
  "description": "",
  "id": "add-customer-feature;verify-add-customer-page-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@addcustomer"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User selects an option for customer \"Platinum Member\" group dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters firstname \"\"  and lastname \"\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters email \"\", telephone \"\" and fax \"\" \"0\"",
  "matchedColumns": [
    3,
    4,
    5,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password \"\" and confirms \"abc@456\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User selects an option for newsletter \"Enabled\", status \"Disabled\", approved \"No\" and safe \"Yes\"",
  "matchedColumns": [
    8,
    9,
    10,
    11
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User sees validation message \"Warning\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Platinum Member",
      "offset": 37
    }
  ],
  "location": "addCustomerDefinition.user_selects_an_option_for_customer_group_dropdown(String)"
});
formatter.result({
  "duration": 115878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "addCustomerDefinition.user_enters_firstname_and_lastname(String,String)"
});
formatter.result({
  "duration": 2269953100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 33
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 47
    }
  ],
  "location": "addCustomerDefinition.user_enters_email_telephone_and_fax(String,String,String,String)"
});
formatter.result({
  "duration": 3372148500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "abc@456",
      "offset": 38
    }
  ],
  "location": "addCustomerDefinition.user_enters_password_and_confirms(String,String)"
});
formatter.result({
  "duration": 2285630800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    },
    {
      "val": "Disabled",
      "offset": 57
    },
    {
      "val": "No",
      "offset": 78
    },
    {
      "val": "Yes",
      "offset": 92
    }
  ],
  "location": "addCustomerDefinition.user_selects_an_option_for_newsletter_status_approved_and_safe(String,String,String,String)"
});
formatter.result({
  "duration": 4729005900,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1072038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning",
      "offset": 30
    }
  ],
  "location": "addCustomerDefinition.user_sees_validation_message(String)"
});
formatter.result({
  "duration": 345468500,
  "status": "passed"
});
formatter.after({
  "duration": 3878847900,
  "status": "passed"
});
});