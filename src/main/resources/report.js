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
  "line": 5,
  "name": "user enters login details and checks the function",
  "description": "",
  "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters username and password and logs in \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters location hotel roomtype roomno \"\u003clocation\u003e\",\"\u003chotel\u003e\",\"\u003croomtype\u003e\" and \"\u003croomno\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "also enters indate outdate adults childrens and submits \"\u003cindate\u003e\",\"\u003coutdate\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters fname lname and address \"\u003cfname\u003e\",\"\u003clname\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "also enters cardno cardtype expmonth expyear cvv and books \"\u003ccardno\u003e\",\"\u003ccardtype\u003e\",\"\u003cexpmonth\u003e\",\"\u003cexpyear\u003e\" and \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user selects all the bookins and cancel it",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
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
      "line": 15,
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
      "line": 16,
      "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;2"
    },
    {
      "cells": [
        "Pubg12345",
        "1234567890",
        "Brisbane",
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
      "line": 17,
      "id": "user-tests-the-functionality-of-adactin-hotel-bookig-url;user-enters-login-details-and-checks-the-function;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4877347653,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters username and password and logs in \"Pubg12345\" and \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
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
  "line": 8,
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
  "line": 9,
  "name": "enters fname lname and address \"Pepper\",\"potts\" and \"Brittany\"",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "line": 11,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
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
  "duration": 1076390260,
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
  "duration": 490727513,
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
  "duration": 1565528047,
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
  "duration": 264513371,
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
  "duration": 611660554,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.prints_booking_id_and_clicks_itenary()"
});
formatter.result({
  "duration": 5780954247,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.user_selects_all_the_bookins_and_cancel_it()"
});
formatter.result({
  "duration": 829292382,
  "status": "passed"
});
formatter.after({
  "duration": 173964900,
  "status": "passed"
});
formatter.before({
  "duration": 4029138940,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters username and password and logs in \"Pubg12345\" and \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters location hotel roomtype roomno \"Brisbane\",\"Hotel Creek\",\"Deluxe\" and \"2\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
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
  "line": 9,
  "name": "enters fname lname and address \"Tony\",\"stark\" and \"Newyork\"",
  "matchedColumns": [
    10,
    11,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "line": 11,
  "name": "prints booking id and clicks itenary",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
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
  "duration": 975310637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brisbane",
      "offset": 44
    },
    {
      "val": "Hotel Creek",
      "offset": 55
    },
    {
      "val": "Deluxe",
      "offset": 69
    },
    {
      "val": "2",
      "offset": 82
    }
  ],
  "location": "FeatureFileDefinition.user_enters_location_hotel_roomtype_roomno_and(String,String,String,String)"
});
formatter.result({
  "duration": 469909357,
  "status": "passed"
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
  "duration": 1525891140,
  "status": "passed"
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
  "duration": 218686642,
  "status": "passed"
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
  "duration": 664679376,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.prints_booking_id_and_clicks_itenary()"
});
formatter.result({
  "duration": 6006527600,
  "status": "passed"
});
formatter.match({
  "location": "FeatureFileDefinition.user_selects_all_the_bookins_and_cancel_it()"
});
formatter.result({
  "duration": 828626703,
  "status": "passed"
});
formatter.after({
  "duration": 177621983,
  "status": "passed"
});
});