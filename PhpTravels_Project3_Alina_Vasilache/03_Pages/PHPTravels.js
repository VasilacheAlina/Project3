module.exports = (function (phpTravelsPage) {
	
	phpTravelsPage.newPHPTravelsPage = function() {
		
		// verify if Dashboard is present
		
		expect (phpTravelsPage.dashboardTabPresent()).toBeTruthy();
	
		// verify if Updates is present 
		 
		expect(phpTravelsPage.updatesTabPresent()).toBeTruthy();
		
		// verify if Modules is present 
		
		expect(phpTravelsPage.modulesTabPresent()).toBeTruthy();
		
		// verify if General is present
		expect(phpTravelsPage.generalTabPresent()).toBeTruthy();
		
		// click on General 
		phpTravelsPage.clickOnGeneralTab();
		browser.sleep(3000);
		
		// verify if settings is present 
		expect(phpTravelsPage.settingsTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if currencies is present
		expect(phpTravelsPage.currenciesTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if pauyment gateways is present
		expect(phpTravelsPage.paymentGatewaysTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if social connections is present
		expect(phpTravelsPage.socialConectionTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if widgets is present
		expect(phpTravelsPage.widgetsTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify homepage sliders is present
		expect(phpTravelsPage.homePageSlidersTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if email templates is present
		expect(phpTravelsPage.emailTemplatesTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if sms api settings
		expect(phpTravelsPage.smsApiTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if backup is present 
		expect(phpTravelsPage.backupTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// verify if BAN IP is present 
		expect(phpTravelsPage.banIPTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		
		
		// verify if accounts is present 
		expect(phpTravelsPage.accountsTabPresent()).toBeTruthy();
		browser.sleep(3000);
		
		
		// click on accounts 
		phpTravelsPage.clickOnAccounts();
		browser.sleep(3000);
		
		
		// verify if admins is present 
		expect(phpTravelsPage.adminsTabPresent()).toBeTruthy();
		
		
		
		// verify if suppliers is present
		expect(phpTravelsPage.suppliersTabPresent()).toBeTruthy();
		
		
		
		// verify if customers is present 
		expect(phpTravelsPage.customersTabPresent()).toBeTruthy();
		
		
		
		// verify if guestcustomers is present 
		expect(phpTravelsPage.guestCustomersTabPresent()).toBeTruthy();
		
		
		
		
		
		// verify if CMS is present 
		expect(phpTravelsPage.cmsTabPresent()).toBeTruthy();
		
		// click on CMS 
		phpTravelsPage.clickOnCMS();
		browser.sleep(3000);
		
		// verify if Pages is present 
		expect(phpTravelsPage.pagesTabPresent()).toBeTruthy();
		
		// verify if menu is present 
		expect(phpTravelsPage.menuTabPresent()).toBeTruthy();
		
		
	
		
		// click on hotels
		phpTravelsPage.clickOnHotels();
		browser.sleep(3000);
		
		// verify if hotels is present
		expect(phpTravelsPage.hotelsIsPresent()).toBeTruthy();
		
		// verify if Rooms is present
		expect(phpTravelsPage.roomsTabIsPresent()).toBeTruthy();
		
		// verify if extras is present
		expect(phpTravelsPage.extrasTabIsPresent()).toBeTruthy();
		
		// verify if reviews is present 
		expect(phpTravelsPage.reviewsTabIsPresent()).toBeTruthy();
		
		// verify if settings is present
		expect(phpTravelsPage.settingsTabIsPresent()).toBeTruthy();
		
		
		
		
		// click on flights 
		phpTravelsPage.clickOnFlights();
		browser.sleep(3000);
		
		// verify if routes tab is present 
		expect(phpTravelsPage.routesTabIsPresent()).toBeTruthy();
		
		// verify if airports tab is present 
		expect(phpTravelsPage.airportsTabIsPresent()).toBeTruthy();
		
		// verify if setting tab is present 
		expect(phpTravelsPage.settingsPresent()).toBeTruthy();
		
		// verify if airlines tab  is present 
		 expect(phpTravelsPage.airlinesTabIsPresent()).toBeTruthy();
		 
		//  verify if countries tab is present 
		expect(phpTravelsPage.countriesTabIsPresent()).toBeTruthy();
		// verify if featured flights tab is present
		expect(phpTravelsPage.featuredFlightsTabIsPresent()).toBeTruthy();
		
		
		
		
		// click on Boats
		phpTravelsPage.clickOnBoats();
		browser.sleep(3000);
		
		// verify if Boats is present 
		expect(phpTravelsPage.boatsTabIsPresent()).toBeTruthy();
		// verify if add new tab is present
		expect(phpTravelsPage.addNewTabIsPresent()).toBeTruthy();
		
		// verify if extras tab is present 
		expect(phpTravelsPage.extrasTabIsPresent()).toBeTruthy();
		
		// verify is reviews is present 
		expect(phpTravelsPage.reviewsIsPresent()).toBeTruthy();
		
		// verify is setting is present 
		expect(phpTravelsPage.settingsIsPresent()).toBeTruthy();
		
		
		// click on rentals 
		phpTravelsPage.clickOnRentals();
		browser.sleep(3000);
		
		// verify if rentals is present 
		expect(phpTravelsPage.rentalsTabIsPresent()).toBeTruthy();
		
		// verify if extras tab is present
		expect(phpTravelsPage.extrasIsPresent()).toBeTruthy();
		
		// verify if  reviews is present 
		expect(phpTravelsPage.reviewsPresent()).toBeTruthy();
		
		// verify if  settings is present 
		expect(phpTravelsPage.settingsPresent()).toBeTruthy();
	
		
		
		
		
		// click on tours 
		phpTravelsPage.clickOnTours();
		browser.sleep(3000);
		
		// verify if tours is present 
		expect(phpTravelsPage.toursTabIsPresent()).toBeTruthy();
		
		// verify if extras is present 
		expect(phpTravelsPage.extrasPresent()).toBeTruthy();
		
		// verify is reviews is present 
		expect(phpTravelsPage.reviews1Present()).toBeTruthy();
		
		// verify is setting is present 
		expect(phpTravelsPage.settings1Present()).toBeTruthy();
		
		
		
		
		// click on cartrawler
		phpTravelsPage.clickOnCartrawler();
		browser.sleep(3000);
		
		// verify if cartrawler is present 
		expect(phpTravelsPage.cartrawlerTabIsPresent()).toBeTruthy();
		
		
		
		// click on VISA 
		phpTravelsPage.clickOnVisa();
		browser.sleep(3000);
		
		// verify if settings is present 
		expect(phpTravelsPage.settingsIsPresent()).toBeTruthy();
		
		// verify if bookins is present 
		expect(phpTravelsPage.bookingsTabIsPresent()).toBeTruthy();
		
		
		// click on blog 
		phpTravelsPage.clickOnBlog();
		browser.sleep(3000);
		
		// verify if Posts is present
		expect(phpTravelsPage.postsTabIsPresent()).toBeTruthy();
		
		// verify if blog categories is present 
		expect(phpTravelsPage.categoriesTabIsPresent()).toBeTruthy();
		
		// verify if blog settings is present 
		expect(phpTravelsPage.blogSettingsPresent()).toBeTruthy();
		browser.sleep(3000);
		
		// click on location
		phpTravelsPage.clickOnLocation();
		browser.sleep(3000);
		
		// verify if locations is present 
		expect(phpTravelsPage.locationTabIsPresent()).toBeTruthy();
		browser.sleep(3000);
		
	
		// click on offers
		phpTravelsPage.clickOnOffers();
		browser.sleep(3000);
		
		// verify if manage offers is present 
		expect(phpTravelsPage.manageOffersTabIsPresent()).toBeTruthy();
		
		// verify if  offers settings is present 
		expect(phpTravelsPage.offersSettingsTabIsPresent()).toBeTruthy();
		
		
		
		// verify if cupons is present 
		expect(phpTravelsPage.cuponsTabIsPresent()).toBeTruthy();
		
		
		
		// verify if newsletter is present 
		expect(phpTravelsPage.newsletter()).toBeTruthy();
		
		
		// verify if bookings is present 
		
		expect(phpTravelsPage.bookingsTabIsPresent()).toBeTruthy();
		
		// click on payouts 
		phpTravelsPage.clickOnPayouts();
		browser.sleep(3000);
		
		// verify if hotels is present 
		expect(phpTravelsPage.hotelsIsPresent()).toBeTruthy();
		// verify if tours is present 
		expect(phpTravelsPage.toursPresent()).toBeTruthy();
		
		
	
		
		
		
		
		
		
	};
		
		return phpTravelsPage;
		
})(require('../02_Functions/basePageObj.js'));