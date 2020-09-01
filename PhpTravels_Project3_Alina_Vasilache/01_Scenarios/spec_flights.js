describe('spec_flights', function () {
	var login = require('../03_Pages/loginPHPTravels.js');
	var flightsPage = require('../03_Pages/flights.js');
	var logout = require('../03_Pages/logoutPHPTravels.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('flightsPage ', function () {
		
		//do login
		login.loginPage (data.URL, data.email, data.password);
		
		
		flightsPage.newFlightsPage (data.adultTicketPrice,data.childTicketPrice,data.infantTicketPrice, data.cityAirport,data.airlineName,data.status,data.hours,data.flightType, data.direction,data.cityAirport1,data.BaggageInfo,data.checkInTime,data.checkOutTime,data.arrivalCheckIn,data.arrivalCheckOut,data.filter,data.message);
	
       //do logout 
		
		logout.logoutPage ();


	});
	
		}); // close data

}); //close main functions