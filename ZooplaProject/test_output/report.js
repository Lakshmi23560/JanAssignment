$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testcase1.feature");
formatter.feature({
  "line": 1,
  "name": "Zoopla Application",
  "description": "",
  "id": "zoopla-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "UseCase1",
  "description": "",
  "id": "zoopla-application;usecase1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the Zoopla application is launched for \"\u003ctestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"\u003chomePageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"\u003cLocation\u003e\" in searchbox and press the search button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate list of properties page \"\u003cpropertiespagetitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "print all the price values in sorted order(descending order) on the console",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select the fifth property on the list of properties",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the property list page with logo,agentname and telephone",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on the agentname link to get into agents page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify the properties listed  belong to the same mentioned \"\u003cagentname\u003e\" on the agents page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "zoopla-application;usecase1;",
  "rows": [
    {
      "cells": [
        "testName",
        "homePageTitle",
        "Location",
        "propertiespagetitle",
        "agentname"
      ],
      "line": 18,
      "id": "zoopla-application;usecase1;;1"
    },
    {
      "cells": [
        "test1",
        "Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents",
        "London",
        "Property for Sale in London - Buy Properties in London - Zoopla",
        "Panther International Properties"
      ],
      "line": 19,
      "id": "zoopla-application;usecase1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26198805900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "UseCase1",
  "description": "",
  "id": "zoopla-application;usecase1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the Zoopla application is launched for \"test1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the home page using \"Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter the \"London\" in searchbox and press the search button",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate list of properties page \"Property for Sale in London - Buy Properties in London - Zoopla\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "print all the price values in sorted order(descending order) on the console",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select the fifth property on the list of properties",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the property list page with logo,agentname and telephone",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on the agentname link to get into agents page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify the properties listed  belong to the same mentioned \"Panther International Properties\" on the agents page.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 40
    }
  ],
  "location": "Stepdefinition.the_Zoopla_application_is_launched_for(String)"
});
formatter.result({
  "duration": 94303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.verify_the_home_page_using(String)"
});
formatter.result({
  "duration": 12055941200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-9L91LNU\u0027, ip: \u002710.0.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\blaks\\AppData\\Local\\Temp\\scoped_dir20796_683652757}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50924}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: fb207cd6cd40683d316887be2b84edb8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:374)\r\n\tat PageObjects.PoHomePage.validateHomePage(PoHomePage.java:38)\r\n\tat StepDefinitions.Stepdefinition.verify_the_home_page_using(Stepdefinition.java:49)\r\n\tat ✽.Then verify the home page using \"Zoopla \u003e Search Property to Buy, Rent, House Prices, Estate Agents\"(Testcase1.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 11
    }
  ],
  "location": "Stepdefinition.enter_the_in_searchbox_and_press_the_search_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Property for Sale in London - Buy Properties in London - Zoopla",
      "offset": 34
    }
  ],
  "location": "Stepdefinition.validate_list_of_properties_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.print_all_the_price_values_in_sorted_order_descending_order_on_the_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.select_the_fifth_property_on_the_list_of_properties()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.verify_the_property_list_page_with_logo_agentname_and_telephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.click_on_the_agentname_link_to_get_into_agents_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Panther International Properties",
      "offset": 60
    }
  ],
  "location": "Stepdefinition.verify_the_properties_listed_belong_to_the_same_mentioned_on_the_agents_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 217664600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-9L91LNU\u0027, ip: \u002710.0.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\blaks\\AppData\\Local\\Temp\\scoped_dir20796_683652757}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50924}, acceptInsecureCerts\u003dfalse, browserVersion\u003d87.0.4280.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: fb207cd6cd40683d316887be2b84edb8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\r\n\tat StepDefinitions.Stepdefinition.teardown(Stepdefinition.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});