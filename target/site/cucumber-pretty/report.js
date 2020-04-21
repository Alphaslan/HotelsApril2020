$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotels.feature");
formatter.feature({
  "line": 3,
  "name": "Hotels page features",
  "description": "Description here",
  "id": "hotels-page-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@hotels1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter Cincinnati and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter 08/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter 08/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify system displays only \u003cstars\u003e hotels on search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 18,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;1"
    },
    {
      "cells": [
        "3 star"
      ],
      "line": 19,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;2"
    },
    {
      "cells": [
        "4 star"
      ],
      "line": 20,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;3"
    },
    {
      "cells": [
        "5 star"
      ],
      "line": 21,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13907647107,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 1568122286,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 9,
      "name": "@hotels1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter Cincinnati and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter 08/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter 08/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify system displays only 3 star hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 1231306945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 630960733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 325865194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 122236422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 star",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectStar(String)"
});
formatter.result({
  "duration": 20757865755,
  "status": "passed"
});
formatter.after({
  "duration": 318287753,
  "status": "passed"
});
formatter.before({
  "duration": 6674435171,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 1233166604,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 9,
      "name": "@hotels1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter Cincinnati and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter 08/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter 08/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify system displays only 4 star hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 458348943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 460786611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 318795113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 125511706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 star",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectStar(String)"
});
formatter.result({
  "duration": 10883952315,
  "status": "passed"
});
formatter.after({
  "duration": 315253857,
  "status": "passed"
});
formatter.before({
  "duration": 5895955245,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 963373755,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 9,
      "name": "@hotels1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter Cincinnati and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter 08/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter 08/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify system displays only 5 star hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 635766917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 972396118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 387153260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 95524395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 star",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectStar(String)"
});
formatter.result({
  "duration": 58675364594,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\n\tat java.util.ArrayList.get(ArrayList.java:433)\n\tat runnerTest.webPages.Hotels.fiveStarHotelList(Hotels.java:213)\n\tat stepdefinition.HotelsSD.selectStar(HotelsSD.java:58)\n\tat ✽.Then I verify system displays only 5 star hotels on search result(Hotels.feature:15)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2688206205,
  "status": "passed"
});
formatter.before({
  "duration": 8022544740,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 29759589,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "List of all of hotel within 10 miles radius of downtown",
  "description": "",
  "id": "hotels-page-features;list-of-all-of-hotel-within-10-miles-radius-of-downtown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@hotels2"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I enter Cincinnati and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter 09/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter 09/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select system displays all hotels within 10 or less mile radius of downtown",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select all Hilton hotels from previous list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 2424827263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 1334241646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 348328246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 140557008,
  "status": "passed"
});
formatter.match({
  "location": "HotelsSD.findHotels()"
});
formatter.result({
  "duration": 77294130240,
  "status": "passed"
});
formatter.match({
  "location": "HotelsSD.hiltonHotels()"
});
formatter.result({
  "duration": 4058743406,
  "status": "passed"
});
formatter.after({
  "duration": 428699658,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Verify user can only view the result by selected property class U",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@hotels3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter Cincinnati and select CityName field on the homepage page U",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter 11/07/20 and select CheckIn field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter 11/09/20 and select CheckOut field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter 1 and select Rooms field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify system displays only \u003cstars\u003e hotels on search result U",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 41,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;1"
    },
    {
      "cells": [
        "3 star"
      ],
      "line": 42,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;2"
    },
    {
      "cells": [
        "4 star"
      ],
      "line": 43,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;3"
    },
    {
      "cells": [
        "5 star"
      ],
      "line": 44,
      "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6323306246,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 34016053,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify user can only view the result by selected property class U",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 32,
      "name": "@hotels3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter Cincinnati and select CityName field on the homepage page U",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter 11/07/20 and select CheckIn field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter 11/09/20 and select CheckOut field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter 1 and select Rooms field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify system displays only 3 star hotels on search result U",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 2142895700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 1374780804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 313245016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 145213229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 star",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectStar(String)"
});
formatter.result({
  "duration": 30160487291,
  "status": "passed"
});
formatter.after({
  "duration": 335943416,
  "status": "passed"
});
formatter.before({
  "duration": 4692496144,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 111551532,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify user can only view the result by selected property class U",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 32,
      "name": "@hotels3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter Cincinnati and select CityName field on the homepage page U",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter 11/07/20 and select CheckIn field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter 11/09/20 and select CheckOut field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter 1 and select Rooms field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify system displays only 4 star hotels on search result U",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 309697089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 2902237424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 352406026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 142418142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 star",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectStar(String)"
});
formatter.result({
  "duration": 13176640591,
  "status": "passed"
});
formatter.after({
  "duration": 292458491,
  "status": "passed"
});
formatter.before({
  "duration": 4507046146,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on default location search locations screen",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsSD.verifyHomePageUrlAntTitle()"
});
formatter.result({
  "duration": 13525777,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify user can only view the result by selected property class U",
  "description": "",
  "id": "hotels-page-features;verify-user-can-only-view-the-result-by-selected-property-class-u;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 32,
      "name": "@hotels3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I enter Cincinnati and select CityName field on the homepage page U",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter 11/07/20 and select CheckIn field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter 11/09/20 and select CheckOut field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter 1 and select Rooms field on the homepage page U",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify system displays only 5 star hotels on search result U",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cincinnati",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 2210438028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/07/20",
      "offset": 8
    },
    {
      "val": "CheckIn",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 975774502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/09/20",
      "offset": 8
    },
    {
      "val": "CheckOut",
      "offset": 28
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 398589818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Rooms",
      "offset": 21
    }
  ],
  "location": "UpgradedSD.selectValues(String,String)"
});
formatter.result({
  "duration": 117202572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 star",
      "offset": 30
    }
  ],
  "location": "UpgradedSD.selectStar(String)"
});
formatter.result({
  "duration": 61935373761,
  "status": "passed"
});
formatter.after({
  "duration": 449873015,
  "status": "passed"
});
});