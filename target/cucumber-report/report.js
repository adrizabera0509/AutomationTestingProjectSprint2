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
          "value": "#| Platinum Member |                                   |                                   | abelparkgmail.com                                                         |    9098766521 |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        },
        {
          "line": 30,
          "value": "#| Platinum Member |                                   |                                   | abel@park@gmail.com                                                       |    9098766521 |                |                       | abc@457               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
        }
      ],
      "cells": [
        "Platinum Member",
        "Abel@\u0026%",
        "Park@\u0026%",
        "abel123@gmail.com",
        "987654abc$",
        "678a\u0026$",
        "abc@123",
        "abc@123",
        "Enabled",
        "Disabled",
        "No",
        "Yes",
        "Warning",
        "1"
      ],
      "line": 31,
      "id": "add-customer-feature;verify-add-customer-page-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10876029701,
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
  "duration": 181050000,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 257214601,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1745442701,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 5082499,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_Customers_option_under_Customer_menu()"
});
formatter.result({
  "duration": 1874604000,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_Customers_page()"
});
formatter.result({
  "duration": 13917500,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_add_new_button()"
});
formatter.result({
  "duration": 723775000,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_Add_Customer_page()"
});
formatter.result({
  "duration": 1067949801,
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
      "value": "#| Platinum Member |                                   |                                   | abelparkgmail.com                                                         |    9098766521 |                |                       | abc@123               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    },
    {
      "line": 30,
      "value": "#| Platinum Member |                                   |                                   | abel@park@gmail.com                                                       |    9098766521 |                |                       | abc@457               | Enabled    | Disabled | No       | Yes  | Warning    |    0 |"
    }
  ],
  "line": 31,
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
  "name": "User enters firstname \"Abel@\u0026%\"  and lastname \"Park@\u0026%\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters email \"abel123@gmail.com\", telephone \"987654abc$\" and fax \"678a\u0026$\" \"1\"",
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
  "name": "User enters password \"abc@123\" and confirms \"abc@123\"",
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
  "duration": 171287600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abel@\u0026%",
      "offset": 23
    },
    {
      "val": "Park@\u0026%",
      "offset": 47
    }
  ],
  "location": "addCustomerDefinition.user_enters_firstname_and_lastname(String,String)"
});
formatter.result({
  "duration": 2290509401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abel123@gmail.com",
      "offset": 19
    },
    {
      "val": "987654abc$",
      "offset": 50
    },
    {
      "val": "678a\u0026$",
      "offset": 71
    },
    {
      "val": "1",
      "offset": 80
    }
  ],
  "location": "addCustomerDefinition.user_enters_email_telephone_and_fax(String,String,String,String)"
});
formatter.result({
  "duration": 3443779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@123",
      "offset": 22
    },
    {
      "val": "abc@123",
      "offset": 45
    }
  ],
  "location": "addCustomerDefinition.user_enters_password_and_confirms(String,String)"
});
formatter.result({
  "duration": 2258438500,
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
  "duration": 4528974001,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 1474317000,
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
  "duration": 66412999,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefinition.validationClass.validateFieldsAddCustomer(validationClass.java:62)\r\n\tat StepDefinition.addCustomerDefinition.user_sees_validation_message(addCustomerDefinition.java:344)\r\n\tat ✽.And User sees validation message \"Warning\"(addCustomer.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4158331800,
  "status": "passed"
});
formatter.uri("orders.feature");
formatter.feature({
  "line": 1,
  "name": "Orders feature",
  "description": "",
  "id": "orders-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify sorted data in the table",
  "description": "",
  "id": "orders-feature;verify-sorted-data-in-the-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@orderstable"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks one of the header of the table \"\u003corderid\u003e\", \"\u003ccustomer\u003e\", \"\u003cstatus\u003e\", \"\u003ctotal\u003e\", \"\u003cadded\u003e\", \"\u003cmodified\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user sees sorted data in the table \"\u003corderid\u003e\", \"\u003ccustomer\u003e\", \"\u003cstatus\u003e\", \"\u003ctotal\u003e\", \"\u003cadded\u003e\", \"\u003cmodified\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-sorted-data-in-the-table;",
  "rows": [
    {
      "cells": [
        "orderid",
        "customer",
        "status",
        "total",
        "added",
        "modified"
      ],
      "line": 17,
      "id": "orders-feature;verify-sorted-data-in-the-table;;1"
    },
    {
      "cells": [
        "asc",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 18,
      "id": "orders-feature;verify-sorted-data-in-the-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9720502601,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 5588200,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 226899599,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1755232799,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 6970601,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 963938700,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 4947701,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify sorted data in the table",
  "description": "",
  "id": "orders-feature;verify-sorted-data-in-the-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@orderstable"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks one of the header of the table \"asc\", \"\", \"\", \"\", \"\", \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user sees sorted data in the table \"asc\", \"\", \"\", \"\", \"\", \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asc",
      "offset": 44
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "",
      "offset": 59
    },
    {
      "val": "",
      "offset": 63
    },
    {
      "val": "",
      "offset": 67
    }
  ],
  "location": "ordersStepDefinition.user_clicks_one_of_the_header_of_the_table(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 677332500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asc",
      "offset": 36
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "ordersStepDefinition.user_sees_sorted_data_in_the_table(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 18261899,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefinition.validationClass.validateSortedTable(validationClass.java:493)\r\n\tat StepDefinition.ordersStepDefinition.user_sees_sorted_data_in_the_table(ordersStepDefinition.java:256)\r\n\tat ✽.Then user sees sorted data in the table \"asc\", \"\", \"\", \"\", \"\", \"\"(orders.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4210909601,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 19,
      "value": "#| desc    |          |        |       |       |          |"
    },
    {
      "line": 20,
      "value": "#|         | asc      |        |       |       |          |"
    },
    {
      "line": 21,
      "value": "#|         | desc     |        |       |       |          |"
    },
    {
      "line": 22,
      "value": "#|         |          | asc    |       |       |          |"
    },
    {
      "line": 23,
      "value": "#|         |          | desc   |       |       |          |"
    },
    {
      "line": 24,
      "value": "#|         |          |        | asc   |       |          |"
    },
    {
      "line": 25,
      "value": "#|         |          |        | desc  |       |          |"
    },
    {
      "line": 26,
      "value": "#|         |          |        |       | asc   |          |"
    },
    {
      "line": 27,
      "value": "#|         |          |        |       | desc  |          |"
    },
    {
      "line": 28,
      "value": "#|         |          |        |       |       | asc      |"
    },
    {
      "line": 29,
      "value": "#|         |          |        |       |       | desc     |"
    }
  ],
  "line": 32,
  "name": "Verify Filter Functionality",
  "description": "",
  "id": "orders-feature;verify-filter-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@ordersfilter"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user enters orderid \"\u003corderid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters order status \"\u003cstatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters customer name \"\u003ccustomer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters total amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters date added \"\u003cadded\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters date modified \"\u003cmodified\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks filter button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user sees filtered result \"\u003corderid\u003e\" , \"\u003cstatus\u003e\", \"\u003ccustomer\u003e\", \"\u003camount\u003e\", \"\u003cadded\u003e\", \"\u003cmodified\u003e\",\"\u003cvalidation\u003e\", \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-filter-functionality;",
  "rows": [
    {
      "cells": [
        "orderid",
        "status",
        "customer",
        "amount",
        "added",
        "modified",
        "validation",
        "result"
      ],
      "line": 43,
      "id": "orders-feature;verify-filter-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 44,
          "value": "#|      50 |         |                |        |            |            | success    | yes    |"
        },
        {
          "line": 45,
          "value": "#|         | Pending |                |        |            |            | success    | yes    |"
        },
        {
          "line": 46,
          "value": "#|         |         | manzoor mehadi |        |            |            | success    | yes    |"
        },
        {
          "line": 47,
          "value": "#|         |         |                |    100 |            |            | success    | yes    |"
        },
        {
          "line": 48,
          "value": "#|         |         |                |        | 2019-06-24 |            | success    | yes    |"
        },
        {
          "line": 49,
          "value": "#|         |         |                |        | 2019/09/17 | 2019/09/17 | success    | yes    |"
        },
        {
          "line": 50,
          "value": "#|         |         |                |        |   20190917 |   20190917 | success    | yes    |"
        },
        {
          "line": 51,
          "value": "#|         |         |                |        | 19-09-17   | 19-09-17   | success    | yes    |"
        },
        {
          "line": 52,
          "value": "#|         |         |                |        | 19/09/17   | 19/09/17   | success    | yes    |"
        },
        {
          "line": 53,
          "value": "#|         |         |                |        |     190917 |     190917 | success    | yes    |"
        }
      ],
      "cells": [
        "",
        "",
        "",
        "",
        "24/06/2019",
        "",
        "success",
        "yes"
      ],
      "line": 54,
      "id": "orders-feature;verify-filter-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9557178500,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 5700500,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 224959499,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2128627200,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 4464200,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 1266993300,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 9374499,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 44,
      "value": "#|      50 |         |                |        |            |            | success    | yes    |"
    },
    {
      "line": 45,
      "value": "#|         | Pending |                |        |            |            | success    | yes    |"
    },
    {
      "line": 46,
      "value": "#|         |         | manzoor mehadi |        |            |            | success    | yes    |"
    },
    {
      "line": 47,
      "value": "#|         |         |                |    100 |            |            | success    | yes    |"
    },
    {
      "line": 48,
      "value": "#|         |         |                |        | 2019-06-24 |            | success    | yes    |"
    },
    {
      "line": 49,
      "value": "#|         |         |                |        | 2019/09/17 | 2019/09/17 | success    | yes    |"
    },
    {
      "line": 50,
      "value": "#|         |         |                |        |   20190917 |   20190917 | success    | yes    |"
    },
    {
      "line": 51,
      "value": "#|         |         |                |        | 19-09-17   | 19-09-17   | success    | yes    |"
    },
    {
      "line": 52,
      "value": "#|         |         |                |        | 19/09/17   | 19/09/17   | success    | yes    |"
    },
    {
      "line": 53,
      "value": "#|         |         |                |        |     190917 |     190917 | success    | yes    |"
    }
  ],
  "line": 54,
  "name": "Verify Filter Functionality",
  "description": "",
  "id": "orders-feature;verify-filter-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@ordersfilter"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user enters orderid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters order status \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters customer name \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters total amount \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters date added \"24/06/2019\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enters date modified \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks filter button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user sees filtered result \"\" , \"\", \"\", \"\", \"24/06/2019\", \"\",\"success\", \"yes\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "ordersStepDefinition.user_enters_orderid(String)"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ordersStepDefinition.user_enters_order_status(String)"
});
formatter.result({
  "duration": 60400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "ordersStepDefinition.user_enters_customer_name(String)"
});
formatter.result({
  "duration": 54801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ordersStepDefinition.user_enters_total_amount(String)"
});
formatter.result({
  "duration": 86600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24/06/2019",
      "offset": 24
    }
  ],
  "location": "ordersStepDefinition.user_enters_date_added(String)"
});
formatter.result({
  "duration": 1158787500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "ordersStepDefinition.user_enters_date_modified(String)"
});
formatter.result({
  "duration": 1129968401,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_filter_button()"
});
formatter.result({
  "duration": 838767700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    },
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "",
      "offset": 36
    },
    {
      "val": "",
      "offset": 40
    },
    {
      "val": "24/06/2019",
      "offset": 44
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "success",
      "offset": 61
    },
    {
      "val": "yes",
      "offset": 72
    }
  ],
  "location": "ordersStepDefinition.user_sees_filtered_result(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 20386499,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefinition.validationClass.validFieldsOrderFilter(validationClass.java:238)\r\n\tat StepDefinition.ordersStepDefinition.user_sees_filtered_result(ordersStepDefinition.java:184)\r\n\tat ✽.Then user sees filtered result \"\" , \"\", \"\", \"\", \"24/06/2019\", \"\",\"success\", \"yes\"(orders.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4237420001,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 55,
      "value": "#|    9999 |        |                |        |            |          | success    | no     |"
    },
    {
      "line": 56,
      "value": "#| abc     |        |                |        |            |          | success    | no     |"
    },
    {
      "line": 57,
      "value": "#|         |        | Abil112 Parl@@ |        |            |          | success    | no     |"
    },
    {
      "line": 58,
      "value": "#|         |        |                | $100   |            |          | warning    |        |"
    }
  ],
  "line": 61,
  "name": "Verify the checkbox in the table",
  "description": "",
  "id": "orders-feature;verify-the-checkbox-in-the-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@oderscheckbox"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "user checks the checkbox on the table header",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user finds checkboxes in the each row in checked",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user checks the checkbox of a row \"\u003crows\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user finds the checkbox of that particular row is checked \"\u003crows\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-the-checkbox-in-the-table;",
  "rows": [
    {
      "cells": [
        "rows"
      ],
      "line": 68,
      "id": "orders-feature;verify-the-checkbox-in-the-table;;1"
    },
    {
      "cells": [
        "4"
      ],
      "line": 69,
      "id": "orders-feature;verify-the-checkbox-in-the-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9604448900,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 6391900,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 267449300,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1805889099,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 10046500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 992944601,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 5193900,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Verify the checkbox in the table",
  "description": "",
  "id": "orders-feature;verify-the-checkbox-in-the-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@oderscheckbox"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "user checks the checkbox on the table header",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user finds checkboxes in the each row in checked",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user checks the checkbox of a row \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "user finds the checkbox of that particular row is checked \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ordersStepDefinition.user_checks_the_checkbox_on_the_table_header()"
});
formatter.result({
  "duration": 1099761600,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_finds_checkboxes_in_the_each_row_in_checked()"
});
formatter.result({
  "duration": 333989300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 35
    }
  ],
  "location": "ordersStepDefinition.user_checks_the_checkbox_of_a_row(String)"
});
formatter.result({
  "duration": 6696964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 59
    }
  ],
  "location": "ordersStepDefinition.user_finds_the_checkbox_of_that_particular_row_is_checked(String)"
});
formatter.result({
  "duration": 4156180200,
  "status": "passed"
});
formatter.after({
  "duration": 4280624900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Verify add order and delete buttons are working",
  "description": "",
  "id": "orders-feature;verify-add-order-and-delete-buttons-are-working",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@ordersbutton"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "user clicks add order button",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user is on the add order page",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "user clicks print delete button",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "user sees alert box",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-add-order-and-delete-buttons-are-working;",
  "rows": [
    {
      "cells": [
        "rows"
      ],
      "line": 79,
      "id": "orders-feature;verify-add-order-and-delete-buttons-are-working;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 80,
      "id": "orders-feature;verify-add-order-and-delete-buttons-are-working;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10088180900,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 5294101,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 312205600,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 3255603100,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 7761500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 2443147500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 12191100,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Verify add order and delete buttons are working",
  "description": "",
  "id": "orders-feature;verify-add-order-and-delete-buttons-are-working;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@ordersbutton"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "user clicks add order button",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user is on the add order page",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "user clicks print delete button",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "user sees alert box",
  "keyword": "Then "
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_add_order_button()"
});
formatter.result({
  "duration": 1960012300,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_add_order_page()"
});
formatter.result({
  "duration": 2379656901,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_print_delete_button()"
});
formatter.result({
  "duration": 2147460700,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_sees_alert_box()"
});
formatter.result({
  "duration": 14718101,
  "status": "passed"
});
formatter.after({
  "duration": 4752670099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "Verify the Edit Order page functionality",
  "description": "",
  "id": "orders-feature;verify-the-edit-order-page-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@editorder"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user clicks the edit button of an order \"\u003cindex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "user is on the edit order page",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "user selects store \"\u003cstore\u003e\" and currency \"\u003ccurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user enters customer \"\u003ccustomer\u003e\" and customer group \"\u003cgroup\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user enters firstname \"\u003cfirstname\u003e\", lastname \"\u003clastname\u003e\", email \"\u003cemail\u003e\" , telephone \"\u003cphone\u003e\" and fax number \"\u003cfax\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "user clicks the continue button",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "user is on the next products tab \"\u003cvalidation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "user clicks the cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-the-edit-order-page-functionality;",
  "rows": [
    {
      "cells": [
        "index",
        "store",
        "currency",
        "customer",
        "group",
        "firstname",
        "lastname",
        "email",
        "phone",
        "fax",
        "validation"
      ],
      "line": 95,
      "id": "orders-feature;verify-the-edit-order-page-functionality;;1"
    },
    {
      "cells": [
        "17",
        "Default",
        "USD",
        "Nand",
        "privileged customer",
        "Nandita",
        "Kumari",
        "mailtonandita123@gmail.com",
        "9167826050",
        "67809012",
        "success"
      ],
      "line": 96,
      "id": "orders-feature;verify-the-edit-order-page-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11636037500,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 238571700,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 482672201,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 3772593900,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 14852500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 1265738099,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 10341400,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Verify the Edit Order page functionality",
  "description": "",
  "id": "orders-feature;verify-the-edit-order-page-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@editorder"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user clicks the edit button of an order \"17\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "user is on the edit order page",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "user selects store \"Default\" and currency \"USD\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user enters customer \"Nand\" and customer group \"privileged customer\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "user enters firstname \"Nandita\", lastname \"Kumari\", email \"mailtonandita123@gmail.com\" , telephone \"9167826050\" and fax number \"67809012\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "user clicks the continue button",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "user is on the next products tab \"success\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "user clicks the cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 41
    }
  ],
  "location": "ordersStepDefinition.user_clicks_the_edit_button_of_an_order(String)"
});
formatter.result({
  "duration": 1902941701,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_edit_order_page()"
});
formatter.result({
  "duration": 84741900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 20
    },
    {
      "val": "USD",
      "offset": 43
    }
  ],
  "location": "ordersStepDefinition.user_selects_store_and_currency(String,String)"
});
formatter.result({
  "duration": 2230939100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nand",
      "offset": 22
    },
    {
      "val": "privileged customer",
      "offset": 48
    }
  ],
  "location": "ordersStepDefinition.user_enters_customer_and_customer_group(String,String)"
});
formatter.result({
  "duration": 2529452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandita",
      "offset": 23
    },
    {
      "val": "Kumari",
      "offset": 43
    },
    {
      "val": "mailtonandita123@gmail.com",
      "offset": 59
    },
    {
      "val": "9167826050",
      "offset": 100
    },
    {
      "val": "67809012",
      "offset": 128
    }
  ],
  "location": "ordersStepDefinition.user_enters_firstname_lastname_email_telephone_and_fax_number(String,String,String,String,String)"
});
formatter.result({
  "duration": 6046939500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_continue_button()"
});
formatter.result({
  "duration": 1089122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 34
    }
  ],
  "location": "ordersStepDefinition.user_is_on_the_next_products_tab(String)"
});
formatter.result({
  "duration": 76955500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefinition.ordersStepDefinition.user_is_on_the_next_products_tab(ordersStepDefinition.java:624)\r\n\tat ✽.Then user is on the next products tab \"success\"(orders.feature:90)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4279861099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 99,
  "name": "Verify the View Order page functionality",
  "description": "",
  "id": "orders-feature;verify-the-view-order-page-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 98,
      "name": "@vieworder"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "user clicks the view button of an order \"\u003cindex\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "user is on the view order page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "user sees payment method \"\u003cpayment\u003e\" under Order details",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user sees customer name \"\u003cname\u003e\", email \"\u003cemail\u003e\", telephone \"\u003cphone\u003e\" under Customer details",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "user sees payment address and shipping address under Order",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "user sees total amount \"\u003ctotal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "orders-feature;verify-the-view-order-page-functionality;",
  "rows": [
    {
      "cells": [
        "index",
        "payment",
        "name",
        "email",
        "phone",
        "total"
      ],
      "line": 108,
      "id": "orders-feature;verify-the-view-order-page-functionality;;1"
    },
    {
      "cells": [
        "17",
        "Cash On Delivery",
        "Nandita Kumari",
        "mailtonandita09@gmail.com",
        "7970870867",
        "515"
      ],
      "line": 109,
      "id": "orders-feature;verify-the-view-order-page-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9858369700,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 5401000,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 262116100,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1848480500,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 4148900,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 1247202900,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 10727900,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Verify the View Order page functionality",
  "description": "",
  "id": "orders-feature;verify-the-view-order-page-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 98,
      "name": "@vieworder"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "user clicks the view button of an order \"17\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "user is on the view order page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "user sees payment method \"Cash On Delivery\" under Order details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user sees customer name \"Nandita Kumari\", email \"mailtonandita09@gmail.com\", telephone \"7970870867\" under Customer details",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "user sees payment address and shipping address under Order",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "user sees total amount \"515\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 41
    }
  ],
  "location": "ordersStepDefinition.user_clicks_the_view_button_of_an_order(String)"
});
formatter.result({
  "duration": 3065232499,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_view_order_page()"
});
formatter.result({
  "duration": 48201599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash On Delivery",
      "offset": 26
    }
  ],
  "location": "ordersStepDefinition.user_sees_payment_method_under_Order_details(String)"
});
formatter.result({
  "duration": 39573701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nandita Kumari",
      "offset": 25
    },
    {
      "val": "mailtonandita09@gmail.com",
      "offset": 49
    },
    {
      "val": "7970870867",
      "offset": 88
    }
  ],
  "location": "ordersStepDefinition.user_sees_customer_name_email_telephone_under_Customer_details(String,String,String)"
});
formatter.result({
  "duration": 138894600,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_sees_payment_address_and_shipping_address_under_Order()"
});
formatter.result({
  "duration": 85401500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "515",
      "offset": 24
    }
  ],
  "location": "ordersStepDefinition.user_sees_total_amount(String)"
});
formatter.result({
  "duration": 50806699,
  "status": "passed"
});
formatter.after({
  "duration": 4318394900,
  "status": "passed"
});
formatter.before({
  "duration": 9623723000,
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
  "name": "User clicks the orders under sales menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is on the orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 8706900,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 267435100,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1941343400,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 5474500,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 1221977700,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 4234200,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Verify the pagination functionality",
  "description": "",
  "id": "orders-feature;verify-the-pagination-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@pagination"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "number of entries/row in the orders table is more than twenty five",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "user finds the pagination",
  "keyword": "Then "
});
formatter.match({
  "location": "ordersStepDefinition.number_of_entries_row_in_the_orders_table_is_more_than_twenty_five()"
});
formatter.result({
  "duration": 59384200,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_finds_the_pagination()"
});
formatter.result({
  "duration": 107481300,
  "status": "passed"
});
formatter.after({
  "duration": 4264698200,
  "status": "passed"
});
});