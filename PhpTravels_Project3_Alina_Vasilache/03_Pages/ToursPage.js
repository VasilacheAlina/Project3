module.exports = (function (toursPage) {
	
	toursPage.newToursPage= function(tourName,descriptionTour,status,stars,tourHours,tourDays,tourNights,tourType,quantity,price,location2,location3,location4,location5,location6,location7,toursFilter) {
	
		// click on tours
		
		toursPage.clickOnTours();
		browser.sleep(3000);
		
		// click on Tours
		
		toursPage.clickTours();
		browser.sleep(3000);
		
		// click on Add Button
		toursPage.clickOnToursAddButton();
		browser.sleep(3000);
		
		// click on Tour Name 
		toursPage.clickOnTourName();
		
		// insert tour name 
		
		toursPage.insertTourName(tourName);
		
		// switch to iframe
		
		toursPage.switchToIframe2();
		browser.sleep(3000);
		
		
		// insert tour description
		
		toursPage.insertTourDescription(descriptionTour);
		browser.sleep(3000);
		
		// switch to default 
		toursPage.switchToursToDefault();
		browser.sleep(3000);
		
		
		// select status
		toursPage.selectToursStatus(status);
		browser.sleep(3000);
		
		// select stars
		toursPage.selectTourStar(stars);
		browser.sleep(3000);
		
		// insert tours hours
		toursPage.insertToursHours(tourHours);
		browser.sleep(3000);
		
		// insert tours days
		toursPage.insertTourDays(tourDays);
		browser.sleep(3000);
		
		// insert tour nights
		toursPage.insertTourNights(tourNights);
		browser.sleep(3000);
		
		// scroll to submit button
		toursPage.scrollElemFinderIntoView(toursPage.submitLocator)
		browser.sleep(1000);	
		
		// click on tour type
		toursPage.clickOnTourType();
		
		// select tour type 
		toursPage.selectTourType(tourType);
		browser.sleep(3000);
		
		// click on tour type again
		toursPage.clickOnTourTypeAgain();
		browser.sleep(3000);
		
		// insert quantity
		toursPage.insertQuantity(quantity);
		browser.sleep(3000);
		
		// insert price 
		toursPage.insertPrice(price);
		browser.sleep(3000);
		
		// click on location 2 
		
		toursPage.clickOnLocation2();
		
		// insert location 2
		toursPage.insertLocation2(location2);
		browser.sleep(3000);
		
		// click again on location 2 
		toursPage.clickOnLocation2Again();
		
		// click on location  3
		toursPage.clickOnlocation3();
		
		// insert location 3
		toursPage.insertLocation3(location3);
		browser.sleep(3000);
		
		// click again on location 3
		toursPage.clickOnLocation3Again()
		
		
		
		// click on location 4 
		toursPage.clickOnLocation4();
		 
		// insert location 4 
		toursPage.insertLocation4(location4);
		browser.sleep(3000);
		
		// click again on location 4 
		toursPage.clickOnLocation4Again();
		
		
		
		// click on location 5 
		toursPage.clickOnLocation5();
		
		// insert location 5 
		toursPage.insertLocation5(location5);
		browser.sleep(3000);
		
		// click again on location 5
		toursPage.clickOnLocation5Again();
		
		
		
		// click on location 6 
		toursPage.clickOnLocation6();
		
		// insert location 6 
		toursPage.insertLocation6(location6);
		browser.sleep(3000);
		
		// click again on location 6 
		toursPage.clickOnLocation6Again();
		
		
		
		// click on  location 7 
		toursPage.clickOnLocation7();
		browser.sleep(3000);
		
		// insert location 7 
		toursPage.insertLocation7(location7);
		browser.sleep(3000);
		
		// click again on location 7 
		toursPage.clickOnLocation7Again();
		browser.sleep(3000);
		
		// scroll to submit button
		toursPage.scrollElemFinderIntoView(toursPage.submitLocator)
		browser.sleep(1000);	
		
		// click  submit 
		toursPage.clickOnToursSubmitButton();
		browser.sleep(3000);
		
		// click on tours again 
		toursPage.clickOnToursAgain();
		browser.sleep(3000);
		
		// click on tours tab again 
		toursPage.clickOnToursTabAgain();
		browser.sleep(3000)
		
		// click on search 
		toursPage.clickOnToursSearch();
		browser.sleep(3000)
		
		// search by tour name 
		toursPage.searchByTourName(tourName);
		browser.sleep(3000);
		
		// select filter 
		toursPage.selectToursFilter(toursFilter);
		browser.sleep(3000);
		
		// click go 
		toursPage.clickOnGoButton();
		browser.sleep(3000);
		
		
		
		// verify if 30 day around America exists 
		
		expect(toursPage.americaTextIsPresent()).toBe(tourName);
		browser.sleep(4000);
		
		//  select tour 
		toursPage.selectTour();
		browser.sleep(3000);
		
		//  click delete 
		toursPage.clickOnToursDeleteButton();
		browser.sleep(3000);
		
		// switch to alert 
		
		toursPage.switchToToursAlert();
		browser.sleep(3000);
		
		
		
	};
	
	
	return toursPage;
	
})(require('../02_Functions/basePageObj.js'));