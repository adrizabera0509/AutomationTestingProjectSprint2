$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("orders.feature");
formatter.feature({
  "line": 1,
  "name": "Orders feature",
  "description": "",
  "id": "orders-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify Filter Functionality",
  "description": "",
  "id": "orders-feature;verify-filter-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@ordersfilter"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enters orderid \"\u003corderid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters order status \"\u003cstatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters customer name \"\u003ccustomer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters total amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters date added \"\u003cadded\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters date modified \"\u003cmodified\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user sees filtered result \"\u003corderid\u003e\" , \"\u003cstatus\u003e\", \"\u003ccustomer\u003e\", \"\u003camount\u003e\", \"\u003cadded\u003e\", \"\u003cmodified\u003e\",\"\u003cvalidation\u003e\", \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
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
      "line": 23,
      "id": "orders-feature;verify-filter-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 24,
          "value": "#|      50 |         |                |        |            |            | success    | yes    |"
        },
        {
          "line": 25,
          "value": "#|         | Pending |                |        |            |            | success    | yes    |"
        }
      ],
      "cells": [
        "",
        "",
        "manzoor mehadi",
        "",
        "",
        "",
        "success",
        "yes"
      ],
      "line": 26,
      "id": "orders-feature;verify-filter-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11352186100,
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
  "duration": 141976800,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 252633600,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 1948741700,
  "status": "passed"
});
formatter.match({
  "location": "addCustomerDefinition.user_is_on_the_dashboard()"
});
formatter.result({
  "duration": 5699800,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_the_orders_under_sales_menu()"
});
formatter.result({
  "duration": 925482700,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_is_on_the_orders_page()"
});
formatter.result({
  "duration": 9292200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "#|      50 |         |                |        |            |            | success    | yes    |"
    },
    {
      "line": 25,
      "value": "#|         | Pending |                |        |            |            | success    | yes    |"
    }
  ],
  "line": 26,
  "name": "Verify Filter Functionality",
  "description": "",
  "id": "orders-feature;verify-filter-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@ordersfilter"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enters orderid \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters order status \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters customer name \"manzoor mehadi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters total amount \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters date added \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters date modified \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks filter button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user sees filtered result \"\" , \"\", \"manzoor mehadi\", \"\", \"\", \"\",\"success\", \"yes\"",
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
  "duration": 4151600,
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
  "duration": 140700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manzoor mehadi",
      "offset": 27
    }
  ],
  "location": "ordersStepDefinition.user_enters_customer_name(String)"
});
formatter.result({
  "duration": 2302596800,
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
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "ordersStepDefinition.user_enters_date_added(String)"
});
formatter.result({
  "duration": 1120602000,
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
  "duration": 1105404600,
  "status": "passed"
});
formatter.match({
  "location": "ordersStepDefinition.user_clicks_filter_button()"
});
formatter.result({
  "duration": 772660500,
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
      "val": "manzoor mehadi",
      "offset": 36
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "success",
      "offset": 65
    },
    {
      "val": "yes",
      "offset": 76
    }
  ],
  "location": "ordersStepDefinition.user_sees_filtered_result(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 67298200,
  "status": "passed"
});
formatter.after({
  "duration": 3894712100,
  "status": "passed"
});
});