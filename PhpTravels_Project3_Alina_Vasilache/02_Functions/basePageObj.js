module.exports = (function () {
	
	var that = {};
	
	//SCROLL FUNCTION
	that.scrollElemFinderIntoView = function(elemFinder) {
		var promise = browser.executeScript(function(elem) {
			elem.scrollIntoView(false);
		}, elemFinder);
		return promise;
	};
		
	
	
	/******************************************************
	 * 
	 *             Login page     
	 * 
	 * 
	 ************************************************************/
	
	// click on Email field
	
	that.clickOnEmailField=function(){
		return element(by.xpath('/html/body/div[2]/form[1]/div[1]/label[1]/input')).click();
	};
	
	// insert Email
	that.insertEmail=function(email){
		return element(by.xpath('/html/body/div[2]/form[1]/div[1]/label[1]/input')).sendKeys(email);
	};
	
	// click on Password
	 that.clickOnPasswordField=function(){
		 return element(by.xpath('/html/body/div[2]/form[1]/div[1]/label[2]/input')).click();
	 };
	
	
	// insert Password
	that.insertPassword=function(password){
		return element(by.xpath('/html/body/div[2]/form[1]/div[1]/label[2]/input')).sendKeys(password);
	};
	 
	// click on login button
	
	that.clickOnLoginButton=function(){
		return element(by.xpath('/html/body/div[2]/form[1]/button')).click();
	};
	
	

	/******************************************************
	 * 
	 *             PHP Travels  page     
	 * 
	 * 
	 ************************************************************/
	
	
	
	// verify if Dashboard is present
	
	that.dashboardTabPresent = function (){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[1]/a')).isPresent();
	};
	
	
	// verify if Updates is present 
	that.updatesTabPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[2]/a/span[1]')).isPresent();
	};
	
	// verify if Modules is present 
	that.modulesTabPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[3]/a')).isPresent();
	};
	
	// verify if General is present 
	
	that.generalTabPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[4]/a')).isPresent();
	};
	
	// click on General 
	that.clickOnGeneralTab=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[4]/a')).click();
	};
	
	// verify if settings is present 
	that.settingsTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[1]/a')).isPresent();
	};
	
	// verify if currencies is present
	that.currenciesTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[2]/a')).isPresent();
	};
	
	// verify if pauyment gateways is present
	that.paymentGatewaysTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[3]/a')).isPresent();
	};
	
	// verify if social connections is present
	that.socialConectionTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[4]/a')).isPresent();
	};
	
	// verify if widgets is present
	
	that.widgetsTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[5]/a')).isPresent();
	};
	
	// verify homepage sliders is present
	that.homePageSlidersTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[6]/a')).isPresent();
	};
	
	// verify if email templates is present
	that.emailTemplatesTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[7]/a')).isPresent();
	};
	
	
	// verify if sms api settings
	that.smsApiTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[8]/a')).isPresent();
	};	
	
	// verify if backup is present 
	that.backupTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[9]/a')).isPresent();
	};
	
	// verify if BAN IP is present 
	that.banIPTabPresent=function(){
		return element(by.xpath('//*[@id="menu-ui"]/li[9]/a')).isPresent();
	};
	
	
	
	// verify if accounts is present 
	that.accountsTabPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[5]/a')).isPresent();
	};
	
	// click on accounts 
	that.clickOnAccounts=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[5]/a')).click();
	};
	
	// verify if admins is present 
	that.adminsTabPresent=function(){
		return element(by.xpath('//*[@id="ACCOUNTS"]/li[1]/a')).isPresent()
	};
	
	// verify if suppliers is present 
	that.suppliersTabPresent=function(){
		return element(by.xpath('//*[@id="ACCOUNTS"]/li[2]/a')).isPresent();
	};
	
	// verify if customers is present 
	that.customersTabPresent=function(){
		return element(by.xpath('//*[@id="ACCOUNTS"]/li[3]/a')).isPresent();
	};
	
	// verify if guestcustomers is present 
	that.guestCustomersTabPresent=function(){
		return element(by.xpath('//*[@id="ACCOUNTS"]/li[4]/a')).isPresent();
	};
	
	
	
	// verify if CMS is present 
	that.cmsTabPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[6]/a/span')).isPresent();
	};
	
	// click on CMS 
	that.clickOnCMS=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[6]/a/span')).click();
	};
	
	// verify if Pages is present 
	
	that.pagesTabPresent=function(){
		return element(by.xpath('//*[@id="CMS"]/li[1]/a')).isPresent();
	}
	// verify if menu is present 
	that.menuTabPresent=function(){
		return element(by.xpath('//*[@id="CMS"]/li[2]/a')).isPresent();
	};
	
	
	
	// click on hotels
	that.clickOnHotels=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[7]/a')).click();
	};
	
	// verify if hotels is present
	that.hotelsIsPresent=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[1]/a')).isPresent();
	};
	
	// verify if Rooms is present 
	that.roomsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[2]/a')).isPresent();
	};
	
	// verify if extras is present
	that.extrasTabIsPresent=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[3]/a')).isPresent();
	};
	
	// verify if reviews is present 
	that.reviewsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[4]/a')).isPresent();
	};
	
	// verify if settings is present
	that.settingsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[5]/a')).isPresent();
	};
	
	
	// click on flights 
	that.clickOnFlights=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[8]/a')).click();
	};
	
	// verify if routes tab is present 
	that.routesTabIsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[1]/a')).isPresent();
	};
	
	// verify if airports tab is present 
	that.airportsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[2]/a')).isPresent();
	};
	
	// verify if setting tab is present 
	that.settingsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[3]/a')).isPresent();
	};
	
	// verify if airlines tab  is present 
	that.airlinesTabIsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[4]/a')).isPresent();
	};
	
	//  verify if countries tab is present 
	
	that.countriesTabIsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[5]/a')).isPresent();
	};
	
	// verify if featured flights tab is presen t
	that.featuredFlightsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Flights"]/li[6]/a')).isPresent();
	};
	
	
	
		// click on boats 
	that.clickOnBoats=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[8]/a')).click();
	}; 
	
	// verify if boats tab is present 
	that.boatsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Boats"]/li[1]/a')).isPresent();
	};
	
	// verify if add new tab is present 
	that.addNewTabIsPresent=function(){
		return element(by.xpath('//*[@id="Boats"]/li[2]/a')).isPresent();
	};
	
	// verify if extras tab is present 
	that.extrasTabIsPresent=function(){
		return element(by.xpath('//*[@id="Boats"]/li[3]/a')).isPresent();
	};
	
	// verify if reviews tab is present 
	
	that.reviewsIsPresent=function(){
		return element(by.xpath('//*[@id="Boats"]/li[4]/a')).isPresent();
	};
	
	// verify if setting tab is present 
	that.settingsIsPresent=function(){
		return element(by.xpath('//*[@id="Boats"]/li[5]/a')).isPresent();
	};
	
	// click on rentals
	that.clickOnRentals=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[10]/a')).click();
	};
	
	// verify if rentals is present 
	that.rentalsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Rentals"]/li[1]/a')).isPresent();
	};
	
	// verify if extras tab is present
	that.extrasIsPresent=function(){
		return element(by.xpath('//*[@id="Rentals"]/li[2]/a')).isPresent();
	};
	
	// verify if  reviews is present 
	that.reviewsPresent=function(){
		return element(by.xpath('//*[@id="Rentals"]/li[3]/a')).isPresent();
	};
	// verify if  settings is present 
	that.settingsPresent=function(){
		return element(by.xpath('//*[@id="Rentals"]/li[4]/a')).isPresent();
	};
	
	
	// click on tours 
	that.clickOnTours=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[11]/a')).click();
	};
	
	// verify if tours is present 
	that.toursTabIsPresent=function(){
		return element(by.xpath('//*[@id="Tours"]/li[1]/a')).isPresent();
	};
	// verify if extras is present 
	that.extrasPresent=function(){
		return element(by.xpath('//*[@id="Tours"]/li[2]/a')).isPresent();
	};
	
	// verify is reviews is present 
	that.reviews1Present=function(){
		return element(by.xpath('//*[@id="Tours"]/li[3]/a')).isPresent();
	};
	
	// verify is setting is present 
	that.settings1Present=function(){
		return element(by.xpath('//*[@id="Tours"]/li[4]/a')).isPresent();
	};
	
	
	// click on cartrawler
	that.clickOnCartrawler=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[12]/a')).click();
	};
	
	// verify if cartrawler is present 
	that.cartrawlerTabIsPresent=function(){
		return element(by.xpath('//*[@id="Cartrawler"]/li/a')).isPresent();
	};
	
	
	// click on VISA 
	that.clickOnVisa=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[13]/a')).click();
	};
	
	// verify if settings is present 
	that.settingsIsPresent=function(){
		return element(by.xpath('//*[@id="Ivisa"]/li[1]/a')).isPresent();
	}
	// verify if bookins is present 
	
	that.bookingsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Ivisa"]/li[2]/a')).isPresent();
	};
	
	
	
	// click on blog 
	that.clickOnBlog=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[14]/a')).click();
	};
	
	// verify if Posts is present
	that.postsTabIsPresent=function(){
		return element(by.xpath('//*[@id="Blog"]/li[1]/a')).isPresent();
	};
	// verify if blog categories is present 
	that.categoriesTabIsPresent=function(){
		return element(by.xpath('//*[@id="Blog"]/li[2]/a')).isPresent();
	};
	
	// verify if blog settings is present 
	that.blogSettingsPresent=function(){
		return element(by.xpath('//*[@id="Blog"]/li[3]/a')).isPresent();
	};
	
	
	
	
	// click on location
	
	that.clickOnLocation=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[15]/a')).click();
	};
	
	// verify if locations is present 
	that.locationTabIsPresent=function(){
		return element(by.xpath('//*[@id="Locations"]/li/a')).isPresent();
	};
	

	// click on offers
	that.clickOnOffers=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[16]/a')).click();
	};
	
	// verify if manage offers is present 
	that.manageOffersTabIsPresent=function(){
		return element(by.xpath('//*[@id="SPECIAL_OFFERS"]/li[1]/a')).isPresent();
	};
	
	// verify if  offers settings is present 
	that.offersSettingsTabIsPresent=function(){
		return element(by.xpath('//*[@id="SPECIAL_OFFERS"]/li[2]/a')).isPresent();
	};
	
	
	// verify if cupons is present 
	that.cuponsTabIsPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[17]/a')).isPresent();
	};
	
	// verify if newsletter is present 
	that.newsletter=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[18]/a')).isPresent();
	};
	
	// verify if bookings is present 
	that.bookingsTabIsPresent=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[19]/a')).isPresent();
	};
	
	// click on payouts 
	
	that.clickOnPayouts=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[20]/a')).click();
	};
	
	// verify if hotels is present 
	that.hotelsIsPresent=function(){
		return element(by.xpath('//*[@id="PAYOUTS"]/li[1]/a')).isPresent();
	};
	// verify if tours is present 
	that.toursPresent=function(){
		return element(by.xpath('//*[@id="PAYOUTS"]/li[2]/a')).isPresent();
	};
	
	
	/******************************************************
	 * 
	 *            Hotels  page     
	 * 
	 * 
	 ************************************************************/
	
	// click on Hotels 
	that.clickOnHotels=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[7]/a')).click();
	};
	
	// click on Hotels tab
	that.clickOnHotelsTab=function(){
		return element(by.xpath('//*[@id="Hotels"]/li[1]/a')).click();
	};
	
	// click on Add button
	that.clickOnAddButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/form/button')).click();
	};
	
	// hotel name 
	that.clickOnHotelName=function(){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/div/input')).click();
	};
	
	// insert hotel name 
	that.insertHotelsName=function(hotel){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/div/input')).sendKeys(hotel);
	};
	
	// switch to iframe
	that.switchToIframe=function(){
		return browser.switchTo().frame(element(by.css("#cke_1_contents > iframe")).getWebElement());
	};
	
	// click on hotel description 
	that.clickOnHotelDescription=function(){
		return element(by.css("body[contenteditable~=true][class^='cke']")).click();
	};
	
	// insert hotel description
	that.insertHotelDescription=function(description){
		return element(by.css("body[contenteditable~=true][class^='cke']")).sendKeys(description)
	};
	
	 // switch to default
	
	that.switchToDefault=function(){
		return browser.switchTo().defaultContent();
	};
	
	// select status 
	that.selectStatusFromTheList=function(status){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[1]/div/select')).sendKeys(status);
	};
	
	// select stars 
	that.selectStarsFromTheList=function(stars){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[2]/div/select')).sendKeys(stars);
	};
	
	// select hotel type
	that.selectHotelTypeFromTheList=function(hoteltype){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[3]/div/select')).sendKeys(hoteltype);
	};
	
	//  select featured 
	that.selectFeatured=function(featured){
	return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[1]/select')).sendKeys(featured)
	};
	
	// click on featured 
	that.clickOnFeatured=function(){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[1]/select')).click();
	}
	// select arrival date 
	that.selectDateForArrival=function(arrivaldate){
	return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[2]/div/div[1]/div/input')).sendKeys(arrivaldate);
	};
	
	// click on arrival date
	that.clickOnArrival=function(){
	return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[2]/div/div[1]/div/input')).click();
	}
	// select departure date 
	that.selectDateForDeparture=function(departuredate){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[2]/div/div[2]/div/input')).sendKeys(departuredate);
	};
	
	// click on departure date 
	that.clickOnDeparture=function(){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div[2]/div/div[2]/div/input')).click();
	};
	
	
	// click on location
	that.clickOnLocation0=function(){
		return element(by.xpath('//*[@id="s2id_searching"]')).click();
	};
	
	// enter location
	that.enterLocation0=function(location){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location);
	};
	
	
	// click on location again 
	that.clickOnLocationl=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li')).click();
	};
	
	that.submitLocator=element(by.xpath('//*[@id="add"]'));
	
	
	
	// click on submit button
	that.clickOnSubmitButton=function(){
	return that.submitLocator.click();
	};
	
	that.searchLocator=element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/a'));
	
	// click on search
	that.clickOnSearch=function(){
		return that.searchLocator.click();
	};
	
	// search for Limehome Dortmund Südwall
	that.searchForHotels=function(hotel){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input')).sendKeys(hotel);
	};
	
	// select parameter
	that.selectParameter=function(parameter){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/select[4]')).sendKeys(parameter);
	};
	
	// click go
	that.clickOnGo=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/span/a')).click();
	};
	
	// select Limehome hotel
	that.selectLimehomeHotel=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input')).click();
	}
	
	// delete hotel
	that.deleteHotel=function(){
		return element(by.xpath('//*[@id="deleteAll"]/strong')).click();
	};
	
	// switch to alert 
	that.switchToAlert=function(){
		return browser.switchTo().alert().accept();
	};
	
	/******************************************************
	 * 
	 *          Flights  page     
	 * 
	 * 
	 ************************************************************/
   // click on flights 
	
	that.clickOnFlights=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[8]/a')).click();
	};
	
	// click on Routes 
	
	that.clickOnRoutes=function(){
		return element(by.xpath('//*[@id="Flights"]/li[1]/a')).click();
	};
	
	// click on Add Button
	that.clickFlightsOnAddButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/form/button')).click();
	};
	
	// insert adult ticket price 
	that.insertAdultTicketPrice=function(adultTicketPrice){
		return element(by.xpath('//*[@id="return_div"]/div[2]/div/div/table/tbody/tr[2]/td[2]/input')).sendKeys(adultTicketPrice);
	};
	
	
	// insert child ticket price 
	that.insertTicketChildPrice=function(childTicketPrice){
		return element(by.xpath('//*[@id="return_div"]/div[2]/div/div/table/tbody/tr[2]/td[3]/input')).sendKeys(childTicketPrice);
	};
	// insert infant ticket price 
	that.insertInfantTicketPrice=function(infantTicketPrice){
		return element(by.xpath('//*[@id="return_div"]/div[2]/div/div/table/tbody/tr[2]/td[4]/input')).sendKeys(infantTicketPrice);
	};
	
  // click on insert city 
	
	that.clickOnDepartureInsertCity=function(){
		return element(by.xpath('//*[@id="s2id_locationlist_0"]/a')).click();
	};
	
	
	// insert city-airport
	that.insertDepartureCityAirport=function(cityAirport){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(cityAirport);
	};
	
	// click again
	that.clickAgainOnDepartureInsertCity=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[2]/div/span')).click();
	};
	
	// click on airline name 
	that.clickOnDepartureAirlineName=function(){
		return element(by.xpath('//*[@id="s2id_aeroplanes_0"]/a/span[1]')).click();
	}
	// insert airline name 
	that.insertDepartureAirlineName=function(airlineName){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(airlineName);
	};
	
	// click on airline name again
	that.clickOnDepartureAirlineNameAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[7]/div/span')).click();
	};
	
	// click on departure check in 
	that.clickOnCheckInTime=function(){
		return element(by.xpath('//*[@value="Departure"]/parent::*/following-sibling::*/*[@placeholder="Check In"]')).click();
	};
	
	// insert departure check in 
	that.insertcheckInTime=function(checkInTime){
		return element(by.xpath('//*[@value="Departure"]/parent::*/following-sibling::*/*[@placeholder="Check In"]')).sendKeys(checkInTime);
	};
	
	// click on check out time
	that.clickOnCheckOutTime=function(){
		return element(by.xpath('//*[@value="Departure"]/parent::*/following-sibling::*/*[@placeholder="Check Out"]')).click();
	};
	
	// insert check out time
	that.insertCheckOutTime=function(checkOutTime){
		return element(by.xpath('//*[@value="Departure"]/parent::*/following-sibling::*/*[@placeholder="Check Out"]')).sendKeys(checkOutTime);
	};
	
	// click on arrival insert city-airport
	that.clickOnArrivalInsertCity=function(){
		return element(by.xpath('//*[@id="s2id_locationlist_1"]/a/span[1]')).click();
	};
	
	// insert arrival city-airport
	that.insertArrivalCityAirport=function(cityAirport1){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(cityAirport1);
	};
	
	// click on arrival city-airport again
	that.clickOnArrivalCityAirportAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[1]')).click();
	};
	
	// click on arrival airline name
	that.clickOnArrivaAirlinelName=function(){
		return element(by.xpath('//*[@id="s2id_aeroplanes_1"]/a/span[1]')).click()
	};
	
	// insert arrival airline name
	that.insertArrivalAirlineName=function(airlineName){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(airlineName);
	};
	
	// click on arrival airline name again
	that.clickOnArrivalAirlineNameAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[7]/div')).click();
	};
	
      
	// click on arrival check in time 
	that.clickOnArrivalCheckInTime=function(){
		return element(by.xpath('//*[@value="Arrival"]/parent::*/following-sibling::*/*[@placeholder="Check In"]')).click();
	};
	
	// insert arrival check in time 
	that.insertArrivalCheckIntime=function(arrivalCheckIn){
		return element(by.xpath('//*[@value="Arrival"]/parent::*/following-sibling::*/*[@placeholder="Check In"]')).sendKeys(arrivalCheckIn);
	};
	
	// click on arrival check out 
	that.clickOnArrivalCheckOutTime=function(){
		return element(by.xpath('//*[@value="Arrival"]/parent::*/following-sibling::*/*[@placeholder="Check In"]')).click();
	};
	
	// insert arrival check out 
	that.insertArrivalCheckOutTime=function(arrivalCheckOut){
		return element(by.xpath('//*[@value="Arrival"]/parent::*/following-sibling::*/*[@placeholder="Check Out"]')).sendKeys(arrivalCheckOut);
	};
	
	// choose status 
	that.chooseFlightsStatus=function(status){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[1]/div/select')).sendKeys(status);
	};
	
	// choose total hours 
	that.chooseTotalHours=function(hours){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[2]/div/div/input')).sendKeys(hours);
	};
	
	// click on flightType
	that.clickOnFlightType=function(){
		return element(by.xpath('//*[@id="s2id_autogen5"]/a')).click();
	};
	// choose flight type 
	that.chooseFlightsType=function(flightType){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(flightType);
	};
	
	// click on flight type again 
	that.clickOnFlightTypeAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li/div/span')).click();
	};
	
	//click on direction 
	that.clickOnDirection=function(){
		return element(by.xpath('//*[@id="s2id_flight_type"]/a')).click();
	}
	// choose direction 
       that.chooseDirection=function(direction){
	return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(direction);
	};
	// click on direction again 
        that.clickOnDirectionAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[1]/div')).click();
	};
	
	
     // switch To Iframe
		that.switchToIframe1=function(){
			return browser.switchTo().frame(element(by.css("#cke_1_contents > iframe")).getWebElement());
		};
	
	
	// insert baggage info
		that.insertBaggageInfo=function(BaggageInfo){
			return element(by.css("body[contenteditable~=true][class^='cke']")).sendKeys(BaggageInfo);
		};
		// switch to default 
		that.switchFlightsToDefault=function(){
			return browser.switchTo().defaultContent();
		};
		
		
	// click on flights submit Button
		that.clickOnFlightsSubmitButton=function(){
			return element(by.xpath('//*[@id="add"]')).click();
		};
	
	// click on search 
	that.clickOnFlightsSearchButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/a')).click();
	};
	
	// insert search
	that.insertToSearch=function(cityAirport1){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input[1]')).sendKeys(cityAirport1);
	};
	
	// select filert 
	that.selectFilter=function(filter){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/select[3]')).sendKeys(filter);
	};
	
	// click on go button 
	that.clickOnFlightsGoButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/span/a')).click();
	};
	
	// verify if bucharest is present 
	
	that.bucharestTextIsPresent=function(message){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr[1]/td[3]')).getText(message);
	};
	
	// select flight
	that.clickToSelectFlight=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input')).click();
	};
	
	// delete flight
	that.deleteFlight=function(){
		return element(by.xpath('//*[@id="deleteAll"]')).click();
	};
	
	// switch to flight alert 
	that.switchToFlightAlert=function(){
		return browser.switchTo().alert().accept();	
	};
	
	
	/******************************************************
	 * 
	 *         Tours  page     
	 * 
	 * 
	 ************************************************************/
	
	// click on tours 
	
	that.clickOnTours=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[11]/a')).click();
	};
	
	// click on tours tab
	
	that.clickTours=function(){
		return element(by.xpath('//*[@id="Tours"]/li[1]/a')).click();
	};
	
	
	// click on add button
	that.clickOnToursAddButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/form/button')).click();
	};
	
	
	// click on tour name 
	that.clickOnTourName=function(){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/div/input')).click();
	};
	
	// insert tour name 
	
	that.insertTourName=function(tourName){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/div/input')).sendKeys(tourName);
	};
	
	// switch to iframe
	that.switchToIframe2=function(){
		return browser.switchTo().frame(element(by.css("#cke_1_contents > iframe")).getWebElement());
	};
	

	// insert tour description 
		
		that.insertTourDescription=function(descriptionTour){
		return element(by.css("body[contenteditable~=true][class^='cke']")).sendKeys(descriptionTour);
	};
	
	// switch to default 
	that.switchToursToDefault=function(){
		return browser.switchTo().defaultContent();
	};
	// select status 
	that.selectToursStatus=function(status){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[1]/div/select')).sendKeys(status);
	};
	
	// select tour star
	that.selectTourStar=function(stars){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[2]/div/select')).sendKeys(stars);
	};
	
	
	// insert tour hours
	that.insertToursHours=function(tourHours){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[3]/div/input')).sendKeys(tourHours);
	};
	
	// insert tour days
	that.insertTourDays=function(tourDays){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[4]/div/input')).sendKeys(tourDays);
	};
	
	// insert tour nights
	that.insertTourNights=function(tourNights){
		return element(by.xpath('//*[@id="content"]/form/div[2]/div/div[2]/div[5]/div/input')).sendKeys(tourNights);
	};
	
	// click on tour type 
	that.clickOnTourType=function(){
		return element(by.xpath('//*[@id="s2id_autogen11"]/a/span[1]')).click();
	};
	// select tour type
	that.selectTourType=function(tourType){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(tourType);
	};
	
	// click on Tour Type Again
	that.clickOnTourTypeAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[1]/div')).click();
	};
	// insert quantity
	that.insertQuantity=function(quantity){
		return element(by.xpath('//*[@id="GENERAL"]/div[4]/div/table/tbody/tr[2]/td[2]/input')).sendKeys(quantity);
	};
	
	// insert Price 
	that.insertPrice=function(price){
		return element(by.xpath('//*[@id="GENERAL"]/div[4]/div/table/tbody/tr[3]/td[2]/input')).sendKeys(price);
	};
	
	// click on location2
	that.clickOnLocation2=function(){
		return element(by.xpath('//*[@id="s2id_locationlist1"]/a/span[1]')).click();
	};
	
	// insert location2
	that.insertLocation2=function(location2){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location2);
	};
	
	
	// click on location2  again 
	that.clickOnLocation2Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul')).click();
	};
	
	
	// click on  location3
	that.clickOnlocation3=function(){
		return element(by.xpath('//*[@id="s2id_locationlist2"]/a/span[1]')).click();
	};
	
	//insert location 3
	that.insertLocation3=function(location3){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location3);
	};
	
	// click on location 3 again
	that.clickOnLocation3Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li')).click();
	};
	
	// click on location 4
	that.clickOnLocation4=function(){
		return element(by.xpath('//*[@id="s2id_locationlist3"]/a')).click();
	};
	
	// insert location 4
	that.insertLocation4=function(location4){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location4);
	};
	
	// click on location 4 again
	that.clickOnLocation4Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li')).click();
	};
	
	
	// click on location 5 
	that.clickOnLocation5=function(){
		return element(by.xpath('//*[@id="s2id_locationlist4"]/a')).click();
	};
	
	// insert location 5 
	that.insertLocation5=function(location5){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location5);
	};
	
	// click on location 5 again
	that.clickOnLocation5Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[1]')).click();
	};
	
	
	
	// click on location 6 
	that.clickOnLocation6=function(){
		return element(by.xpath('//*[@id="s2id_locationlist5"]/a')).click();
	};
	
	
	//  insert location 6 
	that.insertLocation6=function(location6){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location6);
	};
	
	// click on location 6 again 
	that.clickOnLocation6Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li')).click();
	};
	
	
	// click on location 7 
	
	that.clickOnLocation7=function(){
		return element(by.xpath('//*[@id="s2id_locationlist6"]/a')).click();
	};
	
	// insert location 7 
	
	that.insertLocation7=function(location7){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(location7);
	};
	
	// click on location 7 again 
	that.clickOnLocation7Again=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li[1]')).click();
	};
	
	// click on submit button
	that.clickOnToursSubmitButton=function(){
		return element(by.xpath('//*[@id="add"]')).click();
	};

	// click on tours again
	that.clickOnToursAgain=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[11]/a')).click();
	};
	
	// click on tours tab again 
	that.clickOnToursTabAgain=function(){
		return element(by.xpath('//*[@id="Tours"]/li[1]/a')).click();
	};
	
	
	// click on search 
	that.clickOnToursSearch=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/a')).click();
	};
	
	// search by tour name 
	that.searchByTourName=function(tourName){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input')).sendKeys(tourName);
	};
	
	// select filter
	that.selectToursFilter=function(toursFilter){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/select[2]')).sendKeys(toursFilter);
	};
	
	
	// click on go 
	that.clickOnGoButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/span/a')).click();
	};
	
	
	
	// verify if 30 days around america exist 
	
	that.americaTextIsPresent=function(tourName){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr[1]/td[5]/a')).getText(tourName);
	};
	
	
	// select tour 
	that.selectTour=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr[1]/td[1]/input')).click();
	};
	
	// click on delete button
	that.clickOnToursDeleteButton=function(){
		return element(by.xpath('//*[@id="deleteAll"]')).click();
	};
	
	// switch to alert
	that.switchToToursAlert=function(){
		return browser.switchTo().alert().accept();	
	};
	
	
	/******************************************************
	 * 
	 *       Locations   page     
	 * 
	 * 
	 ************************************************************/
	
	// click on locations 
	that.clickOnLocations=function(){
		return element(by.xpath('//*[@id="social-sidebar-menu"]/li[15]/a')).click();
	};
	
	// click on locations tab 
	that.clickOnLocationsTab=function(){
		return element(by.xpath('//*[@id="Locations"]/li/a')).click();
	};
	
	// click on locations add tab 
	that.clickOnLocationsAddButton=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/a')).click();
	};
	
	// click on country 
	that.clickOnCountry=function(){
		return element(by.xpath('//*[@id="s2id_autogen1"]/a/span[1]')).click();
	};
	
	// insert country 
	that.insertCountry=function(country){
		return element(by.xpath('//*[@id="select2-drop"]/div/input')).sendKeys(country);
	};
	
	// click on country again
	that.clickOnCountryAgain=function(){
		return element(by.xpath('//*[@id="select2-drop"]/ul/li/div')).click()
	};

	
	// click on location 
	
	that.clickLocation=function(){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/label')).click();
	};
	
	// insert location
	that.insertLocation1=function(location1){
		return element(by.xpath('//*[@id="location"]')).sendKeys(location1);
	};
	
	// click location again
	that.clickLocationAgain=function(){
		return element(by.xpath('//*[@id="GENERAL"]/div[2]/label')).click();
	};
	
	// select status 
	that.selectLocationStatus=function(status){
		return element(by.xpath('//*[@id="GENERAL"]/div[3]/div/select')).sendKeys(status);
	};
	
	// insert longitude
	that.insertLongitude=function(longitude){
		return element(by.xpath('//*[@id="long"]')).sendKeys(longitude);
	};
	
	// insert latitude 
	that.insertLatitude=function(latitude){
		return element(by.xpath('//*[@id="lat"]')).sendKeys(latitude);
	};
	
	// click on location submit button
	that.clickOnLocationSubmitButton=function(){
		return element(by.xpath('//*[@id="content"]/form/div/div[2]/button')).click();
	};
	
	// click on location search 
	that.clickOnLocationSearch=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/a')).click();
	};
	
	// search by location
	that.searchByLocation=function(city){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input')).sendKeys(city);
	};
	
	// select filter
	that.selectLocationFilter=function(locationFilter){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/select[2]')).sendKeys(locationFilter);
	};
	// click go
	that.click=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/span/a')).click();
	};
	
	// verify is sevilla is present 
	that.sevillaTextIsPresent=function(message1){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[3]')).getText(message1);
	};
	
	
	// select location
	that.selectLocation=function(){
		return element(by.xpath('//*[@id="content"]/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input')).click();
	};
	
	// click on delete button
	that.clickOnLocationsDeleteButton=function(){
		return element(by.xpath('//*[@id="deleteAll"]')).click();
	};
	
	// switch to alert
	that.switchToLocationAlert=function(){
		return browser.switchTo().alert().accept();	
	};
	
	
	/******************************************************
	 * 
	 *      Logout  
	 * 
	 ************************************************************/
	
	// click on logout button
	that.clickOnLogoutButton=function(){
		return element(by.xpath('//*[@id="logout"]')).click();
	};
	
	return that;
	
})();

	