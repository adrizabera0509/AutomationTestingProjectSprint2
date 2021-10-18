Feature: Orders feature

  Background: Login functionality
    Given User is on the login page
    When User enters username and password
    When User clicks the login button
    Then User is on the dashboard
    When User clicks the orders under sales menu
    Then User is on the orders page

  @orderstable
  Scenario Outline: Verify sorted data in the table
    When user clicks one of the header of the table "<orderid>", "<customer>", "<status>", "<total>", "<added>", "<modified>"
    Then user sees sorted data in the table "<orderid>", "<customer>", "<status>", "<total>", "<added>", "<modified>"

    Examples: 
      | orderid | customer | status | total | added | modified |
      | asc     |          |        |       |       |          |
      #| desc    |          |        |       |       |          |
      #|         | asc      |        |       |       |          |
      #|         | desc     |        |       |       |          |
      #|         |          | asc    |       |       |          |
      #|         |          | desc   |       |       |          |
      #|         |          |        | asc   |       |          |
      #|         |          |        | desc  |       |          |
      #|         |          |        |       | asc   |          |
      #|         |          |        |       | desc  |          |
      #|         |          |        |       |       | asc      |
      #|         |          |        |       |       | desc     |

  @ordersfilter
  Scenario Outline: Verify Filter Functionality
    When user enters orderid "<orderid>"
    When user enters order status "<status>"
    When user enters customer name "<customer>"
    When user enters total amount "<amount>"
    When user enters date added "<added>"
    When user enters date modified "<modified>"
    When user clicks filter button
    Then user sees filtered result "<orderid>" , "<status>", "<customer>", "<amount>", "<added>", "<modified>","<validation>", "<result>"

    Examples: 
      | orderid | status | customer       | amount | added      | modified | validation | result |
      #|      50 |         |                |        |            |            | success    | yes    |
      #|         | Pending |                |        |            |            | success    | yes    |
      #|         |         | manzoor mehadi |        |            |            | success    | yes    |
      #|         |         |                |    100 |            |            | success    | yes    |
      #|         |         |                |        | 2019-06-24 |            | success    | yes    |
      #|         |         |                |        | 2019/09/17 | 2019/09/17 | success    | yes    |
      #|         |         |                |        |   20190917 |   20190917 | success    | yes    |
      #|         |         |                |        | 19-09-17   | 19-09-17   | success    | yes    |
      #|         |         |                |        | 19/09/17   | 19/09/17   | success    | yes    |
      #|         |         |                |        |     190917 |     190917 | success    | yes    |
      |         |        |                |        | 24/06/2019 |          | success    | yes    |
      #|    9999 |        |                |        |            |          | success    | no     |
      #| abc     |        |                |        |            |          | success    | no     |
      #|         |        | Abil112 Parl@@ |        |            |          | success    | no     |
      #|         |        |                | $100   |            |          | warning    |        |

  @oderscheckbox
  Scenario Outline: Verify the checkbox in the table
    When user checks the checkbox on the table header
    Then user finds checkboxes in the each row in checked
    When user checks the checkbox of a row "<rows>"
    Then user finds the checkbox of that particular row is checked "<rows>"

    Examples: 
      | rows |
      |    4 |

  @ordersbutton
  Scenario Outline: Verify add order and delete buttons are working
    When user clicks add order button
    Then user is on the add order page
    When user clicks print delete button
    Then user sees alert box

    Examples: 
      | rows |
      |    1 |

  @editorder
  Scenario Outline: Verify the Edit Order page functionality
    When user clicks the edit button of an order "<index>"
    Then user is on the edit order page
    When user selects store "<store>" and currency "<currency>"
    When user enters customer "<customer>" and customer group "<group>"
    When user enters firstname "<firstname>", lastname "<lastname>", email "<email>" , telephone "<phone>" and fax number "<fax>"
    When user clicks the continue button
    Then user is on the next products tab "<validation>"
    When user clicks the cancel button
    Then User is on the orders page

    Examples: 
      | index | store   | currency | customer | group               | firstname | lastname | email                      | phone      | fax      | validation |
      |    17 | Default | USD      | Nand     | privileged customer | Nandita   | Kumari   | mailtonandita123@gmail.com | 9167826050 | 67809012 | success    |

  @vieworder
  Scenario Outline: Verify the View Order page functionality
    When user clicks the view button of an order "<index>"
    Then user is on the view order page
    And user sees payment method "<payment>" under Order details
    And user sees customer name "<name>", email "<email>", telephone "<phone>" under Customer details
    And user sees payment address and shipping address under Order
    And user sees total amount "<total>"

    Examples: 
      | index | payment          | name           | email                     | phone      | total |
      |    17 | Cash On Delivery | Nandita Kumari | mailtonandita09@gmail.com | 7970870867 |   515 |

  @pagination
  Scenario: Verify the pagination functionality
    When number of entries/row in the orders table is more than twenty five
    Then user finds the pagination
