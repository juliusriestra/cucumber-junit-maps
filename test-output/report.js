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
  "duration": 14205616500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.enter_the_requested_product()"
});
formatter.result({
  "duration": 151133700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.press_enter()"
});
formatter.result({
  "duration": 6280238600,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_select_the_specifications(DataTable)"
});
formatter.result({
  "duration": 9691087199,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 108588200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 4080801800,
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
  "duration": 11804520400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.enter_the_requested_product()"
});
formatter.result({
  "duration": 115749900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_the_button_search()"
});
formatter.result({
  "duration": 3883681701,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_select_the_specifications(DataTable)"
});
formatter.result({
  "duration": 5128576900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 242616700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 4091324201,
  "status": "passed"
});
});