describe('spec_ToursPage', function () {
	var login = require('../03_Pages/loginPHPTravels.js');
	var toursPage = require('../03_Pages/ToursPage.js');
	var logout = require('../03_Pages/logoutPHPTravels.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('toursPage ', function () {
		
		//do login
		login.loginPage (data.URL, data.email, data.password);
		
		// tours page 
		toursPage.newToursPage (data.tourName,data.descriptionTour,data.status,data.stars,data.tourHours,data.tourDays,data.tourNights,data.tourType,data.quantity,data.price,data.location2,data.location3,data.location4,data.location5,data.location6,data.location7,data.toursFilter);
	
        //do logout 
		
		logout.logoutPage ();


	});
	
		}); // close data

}); //close main functions