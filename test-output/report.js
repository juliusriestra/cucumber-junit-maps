$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "search product sporting",
  "description": "",
  "id": "search-product-sporting",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search product online by pressing enter",
  "description": "",
  "id": "search-product-sporting;search-product-online-by-pressing-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i am on the store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter the requested product",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "i select the specifications",
  "rows": [
    {
      "cells": [
        "brand",
        "size"
      ],
      "line": 9
    },
    {
      "cells": [
        "PUMA",
        "10"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i see the list of the requested product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_store_home_page()"
});
formatter.result({
  "duration": 8979568600,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.enter_the_requested_product()"
});
formatter.result({
  "duration": 213160500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.press_enter()"
});
formatter.result({
  "duration": 4890303700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_select_the_specifications(DataTable)"
});
formatter.result({
  "duration": 11722713200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 106022000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 98338400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search product online by pressing button",
  "description": "",
  "id": "search-product-sporting;search-product-online-by-pressing-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "i am on the store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "enter the requested product",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click the button search",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "i select the specifications",
  "rows": [
    {
      "cells": [
        "brand",
        "size"
      ],
      "line": 19
    },
    {
      "cells": [
        "adidas",
        "9"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "i see the list of the requested product",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "i close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_store_home_page()"
});
formatter.result({
  "duration": 7666663000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.enter_the_requested_product()"
});
formatter.result({
  "duration": 155067100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_the_button_search()"
});
formatter.result({
  "duration": 4514848800,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_select_the_specifications(DataTable)"
});
formatter.result({
  "duration": 4064321200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 224987900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 202028200,
  "status": "passed"
});
});