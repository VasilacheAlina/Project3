describe('spec_hotelsPage', function () {
	
	var login = require('../03_Pages/loginPHPTravels.js');
	var hotelsPage = require('../03_Pages/hotelsPage.js');
	var logout = require('../03_Pages/logoutPHPTravels.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('hotelsPage ', function () {
		
		//do login
		login.loginPage (data.URL, data.email, data.password);
		
		// HotelsPage
		hotelsPage.newHotelsPage (data.hotel, data.description,data.status,data.stars,data.hoteltype,data.featured,data.arrivaldate,data.departuredate,data.location,data.submitLocator, data.parameter);
	 
	     //do logout 
		
		logout.logoutPage ();

	});
	
		}); // close data

}); //close main functions