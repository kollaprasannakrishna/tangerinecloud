/*

[Main Script]

Project: lilyHost - Responsive Hosting HTML5 Template
Version: 1.0
Author : themelooks.com

*/

(function ($) {
    "use strict";
    
    $(document).ready(function () {
		/* ------------------------------------------------------------------------- *
		 * CUSTOM BACKGROUND IMAGE
		 * ------------------------------------------------------------------------- */
		var bgSrc = $('[data-bg-src]');
		
        bgSrc.each(function () {
            var $this = $(this),
                imgValue = $this.data('bg-src');
            $this.css('background-image', 'url(' + imgValue + ')');
        });
        
        /* ------------------------------------------------------------------------- *
         * FIXED MENU
         * ------------------------------------------------------------------------- */
        var wn = $(window)
        ,	promo = $('#promo')
        ,	menu = $('#menu')
        ,	primaryMenu = $('#primaryMenu')
        ,	secondaryMenu = $('#secondaryMenu')
        ,	secondaryMenuToggle = function () {
			if ( wn.width() > 991 ) {
				var totalHeight = promo.outerHeight() + primaryMenu.outerHeight();
				if (wn.scrollTop() > totalHeight ) {
					secondaryMenu.addClass('sticky');
					menu.addClass('secondarySticky');
				} else {
					secondaryMenu.removeClass('sticky');
					menu.removeClass('secondarySticky');
				}
			} else {
				if (wn.scrollTop() > primaryMenu.outerHeight() ) {
					secondaryMenu.addClass('sticky');
					menu.addClass('secondarySticky');
				} else {
					secondaryMenu.removeClass('sticky');
					menu.removeClass('secondarySticky');
				}
			}
        };
        
        secondaryMenuToggle();
        
        wn.on('scroll', function () {
            secondaryMenuToggle();
        });
        
        /* -------------------------------------------------------------------------*
         * FORM VALIDATION
         * -------------------------------------------------------------------------*/
		var subscribeForm = $('#subscribeForm');
		
        if ( subscribeForm.length ) {
            subscribeForm.validate({
                rules: {
                    EMAIL: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
		
		var loginForm = $('#loginForm');
		
        if ( loginForm.length ) {
            loginForm.validate({
                rules: {
                    loginEmail: {
                        required: true,
                        email: true
                    },
                    loginPassword: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
		var signupForm = $('#signupForm');
		
        if ( signupForm.length ) {
            signupForm.validate({
                rules: {
                    signupFirstName: "required",
                    signupLastName: "required",
                    signupEmail: {
                        required: true,
                        email: true
                    },
                    signupPassword: "required",
                    signupPasswordR: {
                        equalTo: "#signupPassword"
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
		var contactForm = $('#contactForm')
		,	contactFormStatus = $('.contact-form-status');
		
        if ( contactForm.length ) {
            contactForm.validate({
                rules: {
                    contactName: "required",
                    contactEmail: {
                        required: true,
                        email: true
                    },
                    contactSubject: "required",
                    contactMessage: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                },
				submitHandler: function(e) {
					var formData = contactForm.serialize(); // serialize the form data
					
					/* Submit the form using AJAX */
					$.ajax({
						type: 'POST',
						url: contactForm.attr('action'),
						data: formData
					})
					.done(function(response) {
						contactFormStatus.show().html(response).delay(1000).fadeOut("slow");
					});
				}
            });
        }
        
		var postCommentForm = $('#postCommentForm');
		
        if ( postCommentForm.length ) {
            postCommentForm.validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    comments: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
        /* -------------------------------------------------------------------------*
         * OWL CAROUSEL
         * -------------------------------------------------------------------------*/
		var bannerSlider = $('.banner-slider');
		
        if (bannerSlider.length) {
            bannerSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                addClassActive : true,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

		var testimonialSlider = $('.testimonial-slider')
		,	testimonialCustomPagination = function () {
			$.each(this.owl.userItems, function (i) {
				var recommenderThumb = jQuery(this).data('recommender-thumb');
				var paginationLinks = jQuery('.testimonial-slider .owl-page span');

				$(paginationLinks[i]).html('<img src="'+ recommenderThumb +'" alt="" class="img-responsive" />');
			});
		};
		
		if ( testimonialSlider.length ) {
            if (testimonialSlider.children('.testimonial-item').length > 3) {
                testimonialSlider.addClass('overload');
            }
			testimonialSlider.owlCarousel({
				slideSpeed: 700,
				paginationSpeed: 700,
				singleItem: true,
				autoPlay: true,
                addClassActive: true,
                afterInit: testimonialCustomPagination,
                afterUpdate: testimonialCustomPagination
			});
		}
        
		var brandsSlider = $('.brands-slider');
		
        if ( brandsSlider.length ) {
            brandsSlider.owlCarousel({
				slideSpeed: 700,
				paginationSpeed: 700,
				items: 5,
				autoPlay: true,
                pagination: false
			});
        }
		
		var	headerSlider = $('.header-slider');
		
        if ( headerSlider.length ) {
            headerSlider.owlCarousel({
				slideSpeed: 700,
				paginationSpeed: 700,
				singleItem: true,
				autoPlay: true
			});
        }

		/* ------------------------------------------------------------------------- *
		 * VPS SLIDER
		 * ------------------------------------------------------------------------- */
        var vpsSlider = $('#vpsSlider')
        ,	vpsItemCPUel = $('.vps-item-cpu')
        ,	vpsItemRAMel = $('.vps-item-ram')
        ,	vpsItemSPACEel = $('.vps-item-space')
        ,	vpsItemBANDWIDTHel = $('.vps-item-bandwidth')
        ,	vpsItemPriceEl = $('.vps-total-price span')
        ,	vpsItemSetupEl = $('.vps-item-setup')
        ,	vpsItemIpEl = $('.vps-item-ip');
		
        if ( vpsSlider.length ) {
            vpsSlider.slider({
                animate: "fast",
                range: "min",
                min: 0,
                max: 4,
                value: 1,
                step: 1,
                slide: function( event, ui ) {
                    var vpsNameTag, vpsItemCPU, vpsItemRAM, vpsItemSPACE, vpsItemBANDWIDTH, vpsItemPrice, vpsItemSetup, vpsItemIp;

                    switch (ui.value) {
                        case 0:
                            vpsNameTag = 'VPS 1';
                            vpsItemCPU = '1 CORE';
                            vpsItemRAM = '1 GB';
                            vpsItemSPACE = '100 GB';
                            vpsItemBANDWIDTH = '1000 GB';
                            vpsItemPrice = '$9.99';
                            vpsItemSetup = 'FREE';
                            vpsItemIp = 'UP TO 1';
                            break;
                        case 1:
                            vpsNameTag = 'VPS 2';
                            vpsItemCPU = '2 CORES';
                            vpsItemRAM = '2 GB';
                            vpsItemSPACE = '200 GB';
                            vpsItemBANDWIDTH = '2000 GB';
                            vpsItemPrice = '$29.99';
                            vpsItemSetup = 'FREE';
                            vpsItemIp = 'UP TO 2';
                            break;
                        case 2:
                            vpsNameTag = 'VPS 3';
                            vpsItemCPU = '3 CORES';
                            vpsItemRAM = '3 GB';
                            vpsItemSPACE = '300 GB';
                            vpsItemBANDWIDTH = '3000 GB';
                            vpsItemPrice = '$59.99';
                            vpsItemSetup = 'FREE';
                            vpsItemIp = 'UP TO 3';
                            break;
                        case 3:
                            vpsNameTag = 'VPS 4';
                            vpsItemCPU = '4 CORES';
                            vpsItemRAM = '4 GB';
                            vpsItemSPACE = '400 GB';
                            vpsItemBANDWIDTH = '4000 GB';
                            vpsItemPrice = '$89.99';
                            vpsItemSetup = 'FREE';
                            vpsItemIp = 'UP TO 4';
                            break;
                        case 4:
                            vpsNameTag = 'VPS 5';
                            vpsItemCPU = '5 CORES';
                            vpsItemRAM = '5 GB';
                            vpsItemSPACE = '500 GB';
                            vpsItemBANDWIDTH = '5000 GB';
                            vpsItemPrice = '$99.99';
                            vpsItemSetup = 'FREE';
                            vpsItemIp = 'UP TO 5';
                            break;
                    }
                    vpsItemCPUel.text(vpsItemCPU);
                    vpsItemRAMel.text(vpsItemRAM);
                    vpsItemSPACEel.text(vpsItemSPACE);
                    vpsItemBANDWIDTHel.text(vpsItemBANDWIDTH);
                    vpsItemPriceEl.text(vpsItemPrice);
                    vpsItemSetupEl.text(vpsItemSetup);
                    vpsItemIpEl.text(vpsItemIp);

                    $('#vpsSlider .ui-slider-handle').text(vpsNameTag);
                }
            });

            $('#vpsSlider .ui-slider-handle').text('VPS 2');
        }
		
		/* -------------------------------------------------------------------------*
		 * COUNTER
		 * -------------------------------------------------------------------------*/
        var counterNum = $('.counter-number');
		
		if ( $(counterNum).length ) {
			$(counterNum).counterUp({
				delay: 10,
				time: 1000
			});
		}
        
		/* -------------------------------------------------------------------------*
		 * MAP
		 * -------------------------------------------------------------------------*/
		var map, marker, myLatLng;
		
		function initMap() {
			myLatLng = {lat: 23.790546, lng: 90.375583};
			
			map = new google.maps.Map(document.getElementById('map'), {
				center: myLatLng,
				zoom: 16,
				scrollwheel: false,
				disableDefaultUI: true,
				zoomControl: true
			});
			
			marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				animation: google.maps.Animation.DROP,
				draggable: true
			});
            
            if ( wn.width() < 767 ) {
                map.setOptions({draggable: false});
            }
		}
        
		if ( $("#map").length ) {
            initMap();
		}
		
		function initMap2() {
            var locations = [
                ['Hanota Sagar', 23.737385, 78.757671, 4],
                ['গুলশান, ঢাকা', 23.789747, 90.3929248, 5],
                ['Gannan, Gansu, China', 34.9862056, 102.8388954, 3],
                ['মুম্বই, মহারাষ্ট্র, India', 19.0825223, 72.7411178, 2],
                ['Mahaoya, Sri Lanka', 7.8784551, 81.2146297, 4]
            ];
			
			map = new google.maps.Map(document.getElementById('map2'), {
				center: new google.maps.LatLng(20.9124975, 73.7479053),
				zoom: 5,
				scrollwheel: false,
				disableDefaultUI: true,
				zoomControl: true
			});

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                });
            }
            
            if ( wn.width() < 767 ) {
                map.setOptions({draggable: false});
            }
		}
        
		if ( $("#map2").length ) {
            initMap2();
        }
        
		/* -------------------------------------------------------------------------*
		 * PRICING TABLE LABEL
		 * -------------------------------------------------------------------------*/
		if ( wn.width() < 992 ) {
			$('#pricingTable2 table td, #compare table td').each(function () {
				$(this).prepend('<span class="labelText">'+ $(this).data('label') + '</span>');
			});
		}
		
		/* ------------------------------------------------------------------------- *
		 * TWITTER FEED
		 * ------------------------------------------------------------------------- */
        var tweetsContainer = $('#tweets');
		
        if ( tweetsContainer.length ) {
            var config = {
                "id": tweetsContainer.data('twitter-id'),
                "domId": 'tweets',
                "maxTweets": tweetsContainer.data('posts'),
                showTime: false,
                showUser: false,
                "showInteraction": false
            };
            
            twitterFetcher.fetch(config);
        }
    });
})(jQuery);