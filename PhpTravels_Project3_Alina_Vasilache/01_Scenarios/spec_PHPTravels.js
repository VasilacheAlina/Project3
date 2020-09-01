describe('spec_PHPTravels', function () {
	var login = require('../03_Pages/loginPHPTravels.js');
	var phpTravelsPage = require('../03_Pages/PHPTravels.js');
	var logout = require('../03_Pages/logoutPHPTravels.js');
	var testdata = require('../04_InputData/InputData.json');
		testdata.forEach (function (data) {
			
	it('phpTravelsPage ', function () {
		
		//do login
		login.loginPage (data.URL, data.email, data.password);
		
		// php travels page
		phpTravelsPage.newPHPTravelsPage ();
		
         //do logout 
		
		logout.logoutPage ();

	});
	
		}); // close data

}); //close main functions