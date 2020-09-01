var Jasmine2HtmlReporter = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor-jasmine2-html-reporter');
var jasmineNewReporters= require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/jasmine-reporters');
var HTMLReport = require('C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/protractor-html-reporter-2');
var timeStamp= new Date().getTime();

	exports.config={
			// the address of a running selenium server
			//SeleniumAddress: 'http://localhost:444/wd/hub'
			chromeDriver:'C:/Users/User1064/eclipse-workspace/ProtractorLibrary/node_modules/webdriver-manager/selenium/chromedriver_83.0.4103.39.exe',
			directConect:true,
		
			// capabilities to be passed to the webdriver instance 
			capabilities:{
				'browserName':'chrome',
			},
			
			// Framework to use:jasmine 
			framework:'jasmine',
			
	onPrepare: function(){
			browser.waitForAngularEnabled(false);
			browser.driver.manage().window().maximize();
			
		jasmine.getEnv().addReporter(
				new Jasmine2HtmlReporter({
					savePath: 'C:/Users/User1064/eclipse-workspace/PhpTravels_Project3_Alina_Vasilache/target/screenshots',
							showSummary: true,
							showQuickLinks:true,
							showConfiguration:true,
							takeScreenshots:'images',
							takeScreenshotsOnlyOnFailures:true,
							fixedScreenshotName:true,
							ignoreSkippedSpecs:true,
							cleanDestination:true,
							consolidate:true,
							consolidateAll:true,
							preserveDirectory:true,
							fileName:'Protractor-Execution-Report-' + timeStamp
				})
				);
		jasmine.getEnv().addReporter(new jasmineNewReporters.JUnitXmlReporter({
			     consolidateAll: true,
			     savePath:'C:/Users/User1064/eclipse-workspace/PhpTravels_Project3_Alina_Vasilache/testresults',
			     filePrefix:'xmloutput'
		}));	
	},
	//Option to be passed to Jasmine
		jasmineNodeOpts:{
			showColors:true,
			isVerbose:true,
			realTimeFailure:true,
			includeStackTrace:true,
			defaultTimeoutInterval: 500000,
		},
		// specs:['../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_loginPHPTravels.js'],
		suites:{
			suite:[
			
				'../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_PHPTravels.js',
				'../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_hotelsPage.js',
				'../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_flights.js',
				'../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_ToursPage.js',
				'../PhpTravels_Project3_Alina_Vasilache/01_Scenarios/spec_locationsPage.js',
			

				//'../',
			]
		},
		
		onComplete: function(){
			var browserName, browserVersion;
			var capsPromise= browser.getCapabilities();
			capsPromise.then(function(caps){
				browser.Name=caps.get('browserName');
				browserVersion=caps.get('version');
				platform=caps.get('platform');
				
				testConfig={
						reportTitle:'Protractor Test Execution Report',
						outputPath:'C:Users/User1064/eclipse-workspace/PhpTravels_Project3_Alina_Vasilache/testresults',
						outputFilename:'ProtractorTestReport',
						testBrowser:browserName,
						browserVersion:browserVersion,
						modifiedSuiteName:false,
						screenshotsOnlyOnFailure:true,
						testPlatform: platform,
						
				};
				new HTMLReport().from('C:/Users/User1064/eclipse-workspace/PhpTravels_Project3_Alina_Vasilache/testresults/xmloutput.xml',testConfig);
			});
			browser.driver.close().then(function(){
				browser.driver.quit();
			});
			
		},
	};