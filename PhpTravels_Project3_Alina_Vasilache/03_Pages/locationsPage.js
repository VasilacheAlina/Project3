module.exports = (function (locationsPage) {
	
	locationsPage.newLocationsPage= function(country,location1,status,longitude,latitude,city,locationFilter,message1) {
	
		// click on locations 
		
		locationsPage.clickOnLocations();
		browser.sleep(3000);
		
		// click on locations tab 
		
		locationsPage.clickOnLocationsTab();
		browser.sleep(3000);
		
		
		// click on locations add tab 
		locationsPage.clickOnLocationsAddButton();
		browser.sleep(3000);
		
		// click country 
		locationsPage.clickOnCountry();
		
		// insert country 
	    locationsPage.insertCountry(country);
	    browser.sleep(3000);
	    
	    // click on country again
	    locationsPage.clickOnCountryAgain();
	    browser.sleep(2000);
		
	    // click on location
	    locationsPage.clickLocation();
	    browser.sleep(2000);
	    
	    // insert location
	    locationsPage.insertLocation1(location1);
	    browser.sleep(2000);
	    
	    // click on location again
		locationsPage.clickLocationAgain();
		 browser.sleep(2000);
		
		// select location Status
		 locationsPage.selectLocationStatus(status)
		
		 browser.sleep(3000);
		
		
	// insert longitude
		 locationsPage.insertLongitude(longitude);
		 browser.sleep(3000);
		 
	// insert latitude
		 locationsPage.insertLatitude(latitude);
		 browser.sleep(3000);
		 
		 
	// click on location submit button
		 locationsPage.clickOnLocationSubmitButton();
		 browser.sleep(7000);
		 	 
   // click on search 
		 locationsPage.clickOnLocationSearch();
		 browser.sleep(3000);
		 
   // search by location 
		 locationsPage.searchByLocation(city);	
		 browser.sleep(3000);
		 
  // select filter 
		 
		 locationsPage.selectLocationFilter(locationFilter);
		 browser.sleep(3000);
		 
   // click go 
		 locationsPage.click();
		 browser.sleep(3000);
		 
   // verify if Seviila is present 
		  
	expect(locationsPage.sevillaTextIsPresent()).toBe(message1);
	 browser.sleep(3000);
	
   // select location
	locationsPage.selectLocation();
	 browser.sleep(3000);
	
   // delete 
	locationsPage.clickOnLocationsDeleteButton();
	 browser.sleep(3000);
	
	// switch to alert 
	locationsPage.switchToLocationAlert();
	browser.sleep(3000);
 
		 
};
	
	return locationsPage;
	
})(require('../02_Functions/basePageObj.js'));