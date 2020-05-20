/**********************************************************************************
* 
*Created by: Alina Vasilache
*
*Description: Facebook sign-up
*
*
*
**********************************************************************************/


describe('spec_signUpFacebook', function() {
	
	
	var signUpPage = require('../03_Pages/SignUpFacebook.js');
	var testdata = require('../04_InputData/InputDataFb.json');
		testdata.forEach( function (data) {
	
	it('Open the page', function() {
		
		signUpPage.newSignUpPage(data.URL);
				
	});
	
	});
	
});
