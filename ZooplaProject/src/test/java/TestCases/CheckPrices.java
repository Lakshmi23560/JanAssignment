package TestCases;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import PageObjects.PoHomePage;
import Utilities.TestBase;

public class CheckPrices extends TestBase {

	Logger log = Logger.getLogger(getClass().getSimpleName());
	PoHomePage homepage;

	@BeforeClass
	public void setUpEnvironment() throws Exception {

		homepage = new PoHomePage(driver);
	}

	@DataProvider(name = "getTestData")
	public Object[][] loginData() {
		Object[][] data = { { "London Road, Addington, West Malling ME19" } };
		return data;
	}

	@Test(dataProvider = "getTestData")
	public void housePricesTC(String Place) throws Exception {
		driver.get(oCons.getAppURL());
		oBrowsUtil.Click(homepage.saveMyPreferences, "saveMyPreferences");
		oBrowsUtil.Click(homepage.housePrices, "house prices");
		oBrowsUtil.enterText(homepage.searchPrices, Place, "SearchBox");
		homepage.searchPrices.sendKeys(Keys.ENTER);
		System.out.println("Place with prices has been shown in page");
		log.info("Place with prices has been shown in page");
	}
}
