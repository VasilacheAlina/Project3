module.exports = (function (hotelsPage) {
	
	hotelsPage.newHotelsPage = function(hotel,description,status,stars,hoteltype,featured,arrivaldate,departuredate,location,submitLocator,parameter) {
		
		
	// click on hotels 
		hotelsPage.clickOnHotels();
		browser.sleep(3000);
		
	// click on hotels 
		hotelsPage.clickOnHotelsTab();
		browser.sleep(3000);
		
	// click on Add button 
		hotelsPage.clickOnAddButton();
		browser.sleep(10000);
		
		
	// click on Hotel name 
		hotelsPage.clickOnHotelName();
		browser.sleep(3000);
		
	// insert hotel name
		hotelsPage.insertHotelsName(hotel);
		browser.sleep(3000);
		

		// switch to iframe 
	  hotelsPage.switchToIframe();
	  browser.sleep(3000);
	  
	// click on Hotel description
	hotelsPage.clickOnHotelDescription();
		
		
	// insert Hotel description 
		hotelsPage.insertHotelDescription(description)
	browser.sleep(3000);

	// switch to default 	
		hotelsPage.switchToDefault();
		browser.sleep(3000);
		
	// select status 
		hotelsPage.selectStatusFromTheList(status);
		browser.sleep(3000);
		
	// select stars 
		hotelsPage.selectStarsFromTheList(stars);
		browser.sleep(3000);
		
	// select hotel type
		hotelsPage.selectHotelTypeFromTheList(hoteltype);
		browser.sleep(3000);
		
	// select featured 
		hotelsPage.selectFeatured(featured);
		
	// click on featured
		hotelsPage.clickOnFeatured();
	
	// select  arrival date 
	
	hotelsPage.selectDateForArrival(arrivaldate);
	
	// click on arrival date  
	hotelsPage.clickOnArrival();
	
	// select departure date 
	hotelsPage.selectDateForDeparture(departuredate);
	
	// click on departure date 
	hotelsPage.clickOnDeparture();
	
	// scroll to submit locator 
		hotelsPage.scrollElemFinderIntoView(hotelsPage.submitLocator)
		browser.sleep(1000);
		
	// click on location
	hotelsPage.clickOnLocation0();
	browser.sleep(2000);
	
	// enter location
	hotelsPage.enterLocation0(location);
	browser.sleep(3000);
	
	browser.actions().sendKeys(protractor.Key.PAGE_DOWN)

	// click on location again
	hotelsPage.clickOnLocationl();
	browser.sleep(3000);
	
  
	
      // click on submit button
	hotelsPage.clickOnSubmitButton();
	browser.sleep(9000);
	
  
	
	// scroll to search locator 
	hotelsPage.scrollElemFinderIntoView(hotelsPage.searchLocator)
	browser.sleep(2000);
	
	// click on search
	hotelsPage.clickOnSearch();
	browser.sleep(3000);
	
	// search for Limehome Dortmund Südwall
	hotelsPage.searchForHotels(hotel);
	browser.sleep(3000);
	
	// select parameter
	hotelsPage.selectParameter(parameter);
	browser.sleep(3000);
	
	// click on Go
	hotelsPage.clickOnGo();
	browser.sleep(3000);
	
	// selectLimehomeHotel
	hotelsPage.selectLimehomeHotel();
	browser.sleep(3000);
	// delete hotel
	hotelsPage.deleteHotel();
	browser.sleep(5000);
	
	// switch to alert 
	hotelsPage.switchToAlert();
	browser.sleep(3000);
	};	
		return hotelsPage;
		
})(require('../02_Functions/basePageObj.js'));