module.exports = (function (flightsPage) {
	
	flightsPage.newFlightsPage= function(adultTicketPrice,childTicketPrice,infantTicketPrice,cityAirport,airlineName,status,hours,flightType,direction,cityAirport1,BaggageInfo,checkInTime,checkOutTime,arrivalCheckIn,arrivalCheckOut,filter,message) {
	
		// click on flights 
		
		flightsPage.clickOnFlights();
		browser.sleep(3000);
		
		// click on routes 
		flightsPage.clickOnRoutes();
		browser.sleep(3000);
		
		// click on Add Button
		flightsPage.clickFlightsOnAddButton();
		browser.sleep(3000);
		
		// insert adult price 
		flightsPage.insertAdultTicketPrice(adultTicketPrice);
		browser.sleep(2000);
		
		// insert child price 
		flightsPage.insertTicketChildPrice(childTicketPrice);
		browser.sleep(2000);
		
		// insert infant price 
		flightsPage.insertInfantTicketPrice(infantTicketPrice);
		browser.sleep(2000);
		
		// click on departure insert city
		flightsPage.clickOnDepartureInsertCity();
		browser.sleep(4000);
		// insert city-airport
		flightsPage.insertDepartureCityAirport(cityAirport);
		browser.sleep(5000);
		// click again
		flightsPage.clickAgainOnDepartureInsertCity();
		browser.sleep(3000);
	
		
		
		// click on Airline Name
		flightsPage.clickOnDepartureAirlineName();
		browser.sleep(3000);
		
		// insert airline name
		flightsPage.insertDepartureAirlineName(airlineName);
		browser.sleep(4000);
		
		// click on Airline Name again
		flightsPage.clickOnDepartureAirlineNameAgain();
		browser.sleep(3000);
		
		// click on checkin time 
		flightsPage.clickOnCheckInTime();
		
		// insert time
		flightsPage.insertcheckInTime(checkInTime);
		
		// click on checkout time 
		flightsPage.clickOnCheckOutTime();
		
		// insert checkOutTime
		flightsPage.insertCheckOutTime(checkOutTime);
		
		
		// click on Arrival insert city
		flightsPage.clickOnArrivalInsertCity();
		browser.sleep(3000);
		
		// insert arrival city-airport
		flightsPage.insertArrivalCityAirport(cityAirport1);
		browser.sleep(4000);
		
		// click on arrival city-airport again
		flightsPage.clickOnArrivalCityAirportAgain();
		browser.sleep(3000);
		
		// click on Arrival Airline name 
		flightsPage.clickOnArrivaAirlinelName();
		browser.sleep(3000);
		// insert Arrival airline name
		flightsPage.insertArrivalAirlineName(airlineName);
		browser.sleep(4000);
		
		// click on arrival airline name again
		flightsPage.clickOnArrivalAirlineNameAgain();
		browser.sleep(3000);
		
		// click on arrival check in time 
		flightsPage.clickOnArrivalCheckInTime();
		
		// insert arrival check in time
		flightsPage.insertArrivalCheckIntime(arrivalCheckIn);
		browser.sleep(3000);
		
		// click on arrival check out 
		flightsPage.clickOnArrivalCheckOutTime();
		
		// insert arrival check out 
		flightsPage.insertArrivalCheckOutTime(arrivalCheckOut);
		browser.sleep(3000);
		
		// choose status 
		flightsPage.chooseFlightsStatus(status)
		browser.sleep(2000);
		
		// choose total hours 
		flightsPage.chooseTotalHours(hours);
		browser.sleep(4000);
		
		
		// click on flight type 
		flightsPage.clickOnFlightType();
		
		//chose flight type
		flightsPage.chooseFlightsType(flightType);
		browser.sleep(2000);
		
		// click on flight type again 
		flightsPage.clickOnFlightTypeAgain();
		browser.sleep(2000);
		
		// scroll to submit button
		flightsPage.scrollElemFinderIntoView(flightsPage.submitLocator)
		browser.sleep(1000);
		
		//click on direction 
		flightsPage.clickOnDirection();
		browser.sleep(2000);
		
		// choose direction
		flightsPage.chooseDirection(direction);
		browser.sleep(2000);
		
		// click on direction again
		flightsPage.clickOnDirectionAgain();
		browser.sleep(4000);
		
	
		
		// switch to Iframe 
		flightsPage.switchToIframe1();
		browser.sleep(2000);
		
		// insert baggage description
		flightsPage.insertBaggageInfo(BaggageInfo);
		browser.sleep(2000);
		
		// switch to default 
		flightsPage.switchFlightsToDefault();
		browser.sleep(2000);
		
	// click on flights submit button
		flightsPage.clickOnFlightsSubmitButton();
		browser.sleep(5000);
	
		
		
	// click on search 
	  flightsPage.clickOnFlightsSearchButton();
	   browser.sleep(2000);
	   
	// insert  flights
	  flightsPage.insertToSearch(cityAirport1);
	  browser.sleep(2000);
	  
	// select filter 
		flightsPage.selectFilter(filter);
		  browser.sleep(2000);
		
	// click go 
		flightsPage.clickOnFlightsGoButton();
		  browser.sleep(2000);
		
	
	// 	verify if Bucharest is present 
		  expect(flightsPage.bucharestTextIsPresent()).toBe(message);	
		  browser.sleep(3000);

	// select flight 
	flightsPage.clickToSelectFlight();
	  browser.sleep(3000);
	  
	  // deleteFlight
	  flightsPage.deleteFlight();
	  browser.sleep(3000);
	  
	// switch to alert 
		flightsPage.switchToFlightAlert();
		browser.sleep(3000);
	
	};
	
	return flightsPage;
	
})(require('../02_Functions/basePageObj.js'));