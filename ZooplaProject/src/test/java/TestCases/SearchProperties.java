package TestCases;

import org.apache.log4j.Logger;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.LogStatus;

import PageObjects.PoAgentsPage;
import PageObjects.PoHomePage;
import PageObjects.PoPropertiesListingPage;
import PageObjects.PoPropertyPage;
import Utilities.TestBase;

public class SearchProperties extends TestBase {

	Logger log = Logger.getLogger(getClass().getSimpleName());

	PoHomePage homepage;
	PoPropertiesListingPage PropertiesListingPage;
	PoPropertyPage propertypage;
	PoAgentsPage agentspage;

	@BeforeClass
	public void setUpEnvironment() throws Exception {

		homepage = new PoHomePage(driver);
		PropertiesListingPage = new PoPropertiesListingPage(driver);
		propertypage = new PoPropertyPage(driver);
		agentspage = new PoAgentsPage(driver);
	}

	@DataProvider(name = "getTestData")
	public Object[][] loginData() {
		Object[][] data = { { "London", "Panther International Properties" } };
		return data;
	}

	@Test(dataProvider = "getTestData")
	public void searchPropertiesTC(String Location, String agentname) throws Exception {
		driver.get(oCons.getAppURL());
		homepage.enterTextSearchBox(Location);
		log.info("Text entered in textbox and pressed enter");
		PropertiesListingPage.validatePropertiesPage();
		PropertiesListingPage.selectdropdownHighestprice();
		PropertiesListingPage.selectFifthListing();
		String propertypagetitle = driver.getTitle();
		System.out.println(propertypagetitle);
		String propertypageAgent = propertypage.getAgentName();
		System.out.println("propertypage agent name : " + propertypageAgent);
		propertypage.clickOnAgentName();
		String agentspagename = agentspage.validateAgentName();
		if (agentspagename.contains(agentname)) {
			logger.log(LogStatus.PASS, "property's page agent name and agent's page name are same");
		} else {
			logger.log(LogStatus.FAIL, "property's page agent name and agent's page name are not same"
					+ logger.addScreenCapture(takeScreenshot()));
		}
	}
}
