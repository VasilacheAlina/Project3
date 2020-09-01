describe('spec_locationsPage', function () {
	var login = require('../03_Pages/loginPHPTravels.js');
	var locationsPage = require('../03_Pages/locationsPage.js');
	var logout = require('../03_Pages/logoutPHPTravels.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('locationsPage ', function () {
		
		//do login
		login.loginPage (data.URL, data.email, data.password);
		
		// locations page
		locationsPage.newLocationsPage (data.country,data.location1,data.status,data.longitude,data.latitude,data.city,data.locationFilter,data.message1);

        //do logout 
		
		logout.logoutPage ();

	});
	
		}); // close data

}); //close main functions