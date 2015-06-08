// select the right Ad ID according to platform
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ){ // for android
admobid = {
    banner: "ca-app-pub-4077183742810168/1438759131" // or DFP format “/6253334/dfp_example_ad”
  };
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)){ // for ios
admobid = {
    banner: "ca-app-pub-4077183742810168/1438759131" // or DFP format “/6253334/dfp_example_ad”
  };
}
else { // for windows phone
admobid = {
    banner: "ca-app-pub-4077183742810168/1438759131" // or DFP format “/6253334/dfp_example_ad”
  };
}

function createSelectedBanner()
{
	AdMob.createBanner( { adId:admobid.banner,

		bgColor: ‘#XXYYZZ’, overlap:false,

		adSize: ‘SMART_BANNER’,

		position:8 

	} );
}