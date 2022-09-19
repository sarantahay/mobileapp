// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'OUAI',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/shop/',
    	url: 'shop.html',
    	name: 'shop',
  		},
		{
		path: '/shop2/',
    	url: 'shop2.html',
    	name: 'shop2',
  		},
		{
		path: '/finehairprod/',
    	url: 'finehairprod.html',
    	name: 'finehairprod',
  		},
		{
		path: '/prod2/',
    	url: 'prod2.html',
    	name: 'prod2',
  		},
		{
		path: '/prod3/',
    	url: 'prod3.html',
    	name: 'prod3',
  		},
		{
		path: '/prod4/',
    	url: 'prod4.html',
    	name: 'prod4',
  		},
		{
		path: '/prod5/',
    	url: 'prod5.html',
    	name: 'prod5',
  		},
		{
		path: '/prod6/',
    	url: 'prod6.html',
    	name: 'prod6',
  		},
		{
		path: '/prod7/',
    	url: 'prod7.html',
    	name: 'prod7',
  		},
		{
		path: '/prod8/',
    	url: 'prod8.html',
    	name: 'prod8',
  		},
		{
		path: '/prod9/',
    	url: 'prod9.html',
    	name: 'prod9',
  		},
		{
		path: '/prod10/',
    	url: 'prod10.html',
    	name: 'prod10',
  		},
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		{
		path: '/sign-up/',
    	url: 'sign-up.html',
    	name: 'sign-up',
  		}
	],
	dialog: {
		title: 'OUAI',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('Welcome to OUAI mobile shop');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





