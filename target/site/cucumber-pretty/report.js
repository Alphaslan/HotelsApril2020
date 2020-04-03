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
  "name": "I enter New York and select CityName field on the homepage page",
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
  "duration": 10678701494,
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
  "duration": 964467361,
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
  "name": "I enter New York and select CityName field on the homepage page",
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
      "val": "New York",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 817243045,
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
  "duration": 504377480,
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
  "duration": 354667509,
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
  "duration": 109834350,
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
  "duration": 96337326705,
  "status": "passed"
});
formatter.after({
  "duration": 636135654,
  "status": "passed"
});
formatter.before({
  "duration": 5362937827,
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
  "duration": 313902356,
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
  "name": "I enter New York and select CityName field on the homepage page",
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
      "val": "New York",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 1452839472,
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
  "duration": 432525695,
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
  "duration": 308637316,
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
  "duration": 85111311,
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
  "duration": 76324477862,
  "status": "passed"
});
formatter.after({
  "duration": 339806519,
  "status": "passed"
});
formatter.before({
  "duration": 4306660701,
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
  "duration": 1556156075,
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
  "name": "I enter New York and select CityName field on the homepage page",
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
      "val": "New York",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 28
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 425445726,
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
  "duration": 534500954,
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
  "duration": 280982682,
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
  "duration": 136943580,
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
  "duration": 27902858885,
  "status": "passed"
});
formatter.after({
  "duration": 332339067,
  "status": "passed"
});
formatter.before({
  "duration": 5430935397,
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
  "duration": 1033164679,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "List of all of hotel within 10 miles radius of downtown",
  "description": "",
  "id": "hotels-page-features;list-of-all-of-hotel-within-10-miles-radius-of-downtown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@hotels2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I enter  New York and select CityName field on the homepage page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter 09/07/20 and select CheckIn field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter 09/09/20 and select CheckOut field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter 1 and select Rooms field on the homepage page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select system displays all hotels within 10 or less mile radius of downtown",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select all Hilton hotels from previous list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " New York",
      "offset": 8
    },
    {
      "val": "CityName",
      "offset": 29
    }
  ],
  "location": "HotelsSD.selectValues(String,String)"
});
formatter.result({
  "duration": 419307981,
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
  "duration": 467357183,
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
  "duration": 250643277,
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
  "duration": 83716983,
  "status": "passed"
});
formatter.match({
  "location": "HotelsSD.findHotels()"
});
formatter.result({
  "duration": 70096571144,
  "status": "passed"
});
formatter.match({
  "location": "HotelsSD.hiltonHotels()"
});
formatter.result({
  "duration": 17879380097,
  "status": "passed"
});
formatter.after({
  "duration": 389411560,
  "status": "passed"
});
});