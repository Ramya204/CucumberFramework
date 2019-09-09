$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/feature/Adactin.feature");
formatter.feature({
  "line": 2,
  "name": "User tests the functionality of Adactin hotel bookig url",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "user enters login details and checks the function",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smokeTest"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters username and password and logs in \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters location hotel roomtype roomno \"\u003clocation\u003e\",\"\u003chotel\u003e\",\"\u003croomtype\u003e\" and \"\u003croomno\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "also enters indate outdate adults childrens and submits \"\u003cindate\u003e\",\"\u003coutdate\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters fname lname and address \"\u003cfname\u003e\",\"\u003clname\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "also enters cardno cardtype expmonth expyear cvv and books \"\u003ccardno\u003e\",\"\u003ccardtype\u003e\",\"\u003cexpmonth\u003e\",\"\u003cexpyear\u003e\" and \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user selects all the bookins and cancel it",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotel",
        "roomtype",
        "roomno",
        "indate",
        "outdate",
        "adults",
        "childrens",
        "fname",
        "lname",
        "address",
        "cardno",
        "cardtype",
        "expmonth",
        "expyear",
        "cvv"
      ],
      "line": 19,
      "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;1"
    },
    {
      "cells": [
        "Pubg12345",
        "1234567890",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1",
        "07/06/2019",
        "09/06/2019",
        "2",
        "1",
        "Pepper",
        "potts",
        "Brittany",
        "1234567890098765",
        "AMEX",
        "2",
        "2020",
        "1122"
      ],
      "line": 20,
      "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;2"
    },
    {
      "cells": [
        "Pubg12345",
        "1234567890",
        "Brisban",
        "Hotel Creek",
        "Deluxe",
        "2",
        "10/06/2019",
        "12/06/2019",
        "2",
        "2",
        "Tony",
        "stark",
        "Newyork",
        "1234567790098765",
        "AMEX",
        "2",
        "2020",
        "1122"
      ],
      "line": 21,
      "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5221530952,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User verify the url and title",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User verify the url and title",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureFileDefinition.user_verify_the_url_and_title()"
});
formatter.result({
  "duration": 206278007,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user enters login details and checks the function",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 7,
      "name": "@smokeTest"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters username and password and logs in \"Pubg12345\" and \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters location hotel roomtype roomno \"Sydney\",\"Hotel Creek\",\"Double\" and \"1\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "also enters indate outdate adults childrens and submits \"07/06/2019\",\"09/06/2019\",\"2\" and \"1\"",
  "matchedColumns": [
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters fname lname and address \"Pepper\",\"potts\" and \"Brittany\"",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "also enters cardno cardtype expmonth expyear cvv and books \"1234567890098765\",\"AMEX\",\"2\",\"2020\" and \"1122\"",
  "matchedColumns": [
    16,
    17,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user selects all the bookins and cancel it",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Pubg12345",
      "offset": 47
    },
    {
      "val": "1234567890",
      "offset": 63
    }
  ],
  "location": "FeatureFileDefinition.user_enters_username_and_password_and_logs_in_and(String,String)"
});
formatter.result({
  "duration": 1825457709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 44
    },
    {
      "val": "Hotel Creek",
      "offset": 53
    },
    {
      "val": "Double",
      "offset": 67
    },
    {
      "val": "1",
      "offset": 80
    }
  ],
  "location": "FeatureFileDefinition.user_enters_location_hotel_roomtype_roomno_and(String,String,String,String)"
});
formatter.result({
  "duration": 539468855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/06/2019",
      "offset": 57
    },
    {
      "val": "09/06/2019",
      "offset": 70
    },
    {
      "val": "2",
      "offset": 83
    },
    {
      "val": "1",
      "offset": 91
    }
  ],
  "location": "FeatureFileDefinition.also_enters_indate_outdate_adults_childrens_and_submits_and(String,String,String,String)"
});
formatter.result({
  "duration": 3537960904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pepper",
      "offset": 32
    },
    {
      "val": "potts",
      "offset": 41
    },
    {
      "val": "Brittany",
      "offset": 53
    }
  ],
  "location": "FeatureFileDefinition.enters_fname_lname_and_address_and(String,String,String)"
});
formatter.result({
  "duration": 327514994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890098765",
      "offset": 60
    },
    {
      "val": "AMEX",
      "offset": 79
    },
    {
      "val": "2",
      "offset": 86
    },
    {
      "val": "2020",
      "offset": 90
    },
    {
      "val": "1122",
      "offset": 101
    }
  ],
  "location": "FeatureFileDefinition.also_enters_cardno_cardtype_expmonth_expyear_cvv_and_books_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 686140321,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.prints_booking_id_and_clicks_itenary()"
});
formatter.result({
  "duration": 6186776172,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.user_selects_all_the_bookins_and_cancel_it()"
});
formatter.result({
  "duration": 883986127,
  "status": "passed"
});
formatter.after({
  "duration": 138756401,
  "status": "passed"
});
formatter.before({
  "duration": 4747066369,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User verify the url and title",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User verify the url and title",
  "keyword": "Given "
});
formatter.match({
  "location": "FeatureFileDefinition.user_verify_the_url_and_title()"
});
formatter.result({
  "duration": 17279612,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user enters login details and checks the function",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 7,
      "name": "@smokeTest"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters username and password and logs in \"Pubg12345\" and \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters location hotel roomtype roomno \"Brisban\",\"Hotel Creek\",\"Deluxe\" and \"2\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "also enters indate outdate adults childrens and submits \"10/06/2019\",\"12/06/2019\",\"2\" and \"2\"",
  "matchedColumns": [
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "enters fname lname and address \"Tony\",\"stark\" and \"Newyork\"",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "also enters cardno cardtype expmonth expyear cvv and books \"1234567790098765\",\"AMEX\",\"2\",\"2020\" and \"1122\"",
  "matchedColumns": [
    16,
    17,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user selects all the bookins and cancel it",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Pubg12345",
      "offset": 47
    },
    {
      "val": "1234567890",
      "offset": 63
    }
  ],
  "location": "FeatureFileDefinition.user_enters_username_and_password_and_logs_in_and(String,String)"
});
formatter.result({
  "duration": 1596336433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brisban",
      "offset": 44
    },
    {
      "val": "Hotel Creek",
      "offset": 54
    },
    {
      "val": "Deluxe",
      "offset": 68
    },
    {
      "val": "2",
      "offset": 81
    }
  ],
  "location": "FeatureFileDefinition.user_enters_location_hotel_roomtype_roomno_and(String,String,String,String)"
});
formatter.result({
  "duration": 88074307,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Brisban\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4FF21TM\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat com.resources.BaseClass.dropdownValue(BaseClass.java:259)\r\n\tat com.stepDefinition.FeatureFileDefinition.user_enters_location_hotel_roomtype_roomno_and(FeatureFileDefinition.java:60)\r\n\tat ✽.And user enters location hotel roomtype roomno \"Brisban\",\"Hotel Creek\",\"Deluxe\" and \"2\"(com/feature/Adactin.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/06/2019",
      "offset": 57
    },
    {
      "val": "12/06/2019",
      "offset": 70
    },
    {
      "val": "2",
      "offset": 83
    },
    {
      "val": "2",
      "offset": 91
    }
  ],
  "location": "FeatureFileDefinition.also_enters_indate_outdate_adults_childrens_and_submits_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tony",
      "offset": 32
    },
    {
      "val": "stark",
      "offset": 39
    },
    {
      "val": "Newyork",
      "offset": 51
    }
  ],
  "location": "FeatureFileDefinition.enters_fname_lname_and_address_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567790098765",
      "offset": 60
    },
    {
      "val": "AMEX",
      "offset": 79
    },
    {
      "val": "2",
      "offset": 86
    },
    {
      "val": "2020",
      "offset": 90
    },
    {
      "val": "1122",
      "offset": 101
    }
  ],
  "location": "FeatureFileDefinition.also_enters_cardno_cardtype_expmonth_expyear_cvv_and_books_and(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FeatureFileDefinition.prints_booking_id_and_clicks_itenary()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FeatureFileDefinition.user_selects_all_the_bookins_and_cancel_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 174275230,
  "status": "passed"
});
});