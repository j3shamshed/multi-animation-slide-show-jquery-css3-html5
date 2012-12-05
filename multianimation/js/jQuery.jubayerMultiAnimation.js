(function($) {

	jQuery.fn.jubayerMultiAnimation = function(options) {

		var opt = {

			speed : 5000,
			auto : true,
			easing : 'easeInOutExpo'
		};

		var o = jQuery.extend(opt, options);
		var windowWidth = jQuery('.ju_container').width();
		return this
				.each(function() {

					var e = $(this);

					var Slider = function() {
                        
						this.liNo = e.find('.ju_ul_class li');
						this.buttonArea = e.find('.button_area');
						this.liNo.width(windowWidth);
						this.buttonArea.width(windowWidth);
						this.liLength = this.liNo.length;
						this.singleLiWidth = e.find('.ju_ul_class >li')
								.outerWidth(true);
						this.totalWidth = this.singleLiWidth * this.liLength;
						this.ulFind = e.find('.ju_ul_class');
						this.ulFind.width(this.totalWidth);
						this.next_btn = e.find('.next');
						this.prev_btn = e.find('.prev');
						this.lastPosition = (this.totalWidth - this.singleLiWidth);
						this.paginationWidth = e.find('.ju_active').css('width')*this.liNo;
						
						
						this.next = function() {

							var currentLeftPosition = $('.ju_ul_class').css(
									'margin-left');
							var currentLeftPositionNumber = currentLeftPosition
									.replace('px', '');
							if (currentLeftPositionNumber <= 0
									&& currentLeftPositionNumber > -(this.lastPosition)) {
								$('.ju_ul_class').animate(
										{

											'margin-left' : "-="
													+ this.singleLiWidth + "px",
											'opacity' : 1		
										}, {
											easing : o.easing,
											step : function() {
												slider.addCSS3AnimationNext(currentLeftPositionNumber);
											}
										});
							} else if (currentLeftPositionNumber == -(this.lastPosition)) {
								$('.ju_ul_class').animate({

									'margin-left' : "0px",
									'opacity' : 1
								}, {
									easing : o.easing,
									step : function() {
										slider.addCSS3AnimationNext(currentLeftPositionNumber);
									}
								});
							}
							
						};

						this.prev = function() {
							slider.clearClass();
							var currentLeftPosition = $('.ju_ul_class').css(
									'margin-left');
							var currentLeftPositionNumber = currentLeftPosition
									.replace('px', '');
							if (currentLeftPositionNumber == 0) {
								$('.ju_ul_class')
										.animate(
												{

													'margin-left' : "-="
															+ (this.totalWidth - this.singleLiWidth)
															+ "px",
															'opacity' : 1
												}, {
													easing : o.easing,
													step : function() {
														slider.addCSS3AnimationPrev(currentLeftPositionNumber);
													}
												});
							} else {
								var slidePrevPosition = parseFloat(currentLeftPositionNumber)
										+ this.singleLiWidth;

								$('.ju_ul_class').animate({

									'margin-left' : slidePrevPosition + "px",
									'opacity' : 1
								}, {
									easing : o.easing,
									step : function() {
										slider.addCSS3AnimationPrev(currentLeftPositionNumber);
									}
								});
							}

						};
						
						this.addCSS3AnimationNext = function(position) {
							var index = parseInt(position/this.singleLiWidth) *(-1);
							//alert(index);
							index++;
							if(-(this.lastPosition)==position){
								index=0;
							}
							slider.addCSS3Animation(index);
							this.changePaginationNext(index);
						};
						
						this.addCSS3AnimationPrev = function(position) {
							
							var index = parseInt(position/this.singleLiWidth) *(-1);
							
							if(index==0){
								index = parseInt(this.lastPosition/this.singleLiWidth) *(1);
							}else if(index>0){
								index--;
							}else if(index<0){
								index = (index--)*(-1);
							}
							
							
							slider.addCSS3Animation(index);
							slider.changePaginationPrev(index);
						};

						this.addCSS3Animation = function(index) {
							
						    
							this.r = this.liNo.eq(index);
							this.childrenSpanLength = this.r.children('span').length;
							this.childrenImgLength = this.r.children('img').length;
							
							if(index==0){
								for ( var j = 0; j < this.childrenSpanLength; j++) {
									if(j==0){this.r.children('span').eq(j).addClass(
										'animate0 fadeInLeftBig');}
									else if(j==1){this.r.children('span').eq(j).addClass(
									'animate2 rotateInUpLeft');}
									else if(j==2){this.r.children('span').eq(j).addClass(
										'animate4 fadeInLeftBig');}
									else if(j>2){this.r.children('span').eq(j).addClass(
									'animate5 fadeInRightBig');}
										
								}
								for ( var j = 0; j < this.childrenImgLength; j++) {
									if(j==0){this.r.children('img').eq(j).addClass(
										'animate5 rotateInUpRight');}
									else if(j==1){this.r.children('img').eq(j).addClass(
									'animate6 rotateInUpLeft');}
									else if(j==2){this.r.children('img').eq(j).addClass(
										'animate7 rotateInDownLeft');}
									else if(j>2){this.r.children('img').eq(j).addClass(
									'animate0 rotateInUpRight');}
										
								}
							}
							else if(index==1){
								
								for ( var j = 0; j < this.childrenSpanLength; j++) {
									if(j==0){this.r.children('span').eq(j).addClass(
										'animate0 rotateInDownRight');}
									else if(j==1){this.r.children('span').eq(j).addClass(
									'animate2 rotateInUpLeft');}
									else if(j==2){this.r.children('span').eq(j).addClass(
										'animate4 fadeInLeftBig');}
									else if(j>2){this.r.children('span').eq(j).addClass(
									'animate5 fadeInRightBig');}
								}
								for ( var j = 0; j < this.childrenImgLength; j++) {
									if(j==0){this.r.children('img').eq(j).addClass(
										'animate5 rotateInDownLeft');}
									else if(j==1){this.r.children('img').eq(j).addClass(
									'animate6 rotateInUpLeft');}
									else if(j==2){this.r.children('img').eq(j).addClass(
										'animate7 rotateInDownRight');}
									else if(j>2){this.r.children('img').eq(j).addClass(
									'animate0 rotateInUpLeft');}
										
								}
							}
							else if(index==2){
								
								for ( var j = 0; j < this.childrenSpanLength; j++) {
									if(j==0){this.r.children('span').eq(j).addClass(
										'animate0 fadeInLeftBig');}
									else if(j==1){this.r.children('span').eq(j).addClass(
									'animate2 rotateInUpLeft');}
									else if(j==2){this.r.children('span').eq(j).addClass(
										'animate4 fadeInLeftBig');}
									else if(j>2){this.r.children('span').eq(j).addClass(
									'animate5 fadeInRightBig');}
								}
								for ( var j = 0; j < this.childrenImgLength; j++) {
									if(j==0){this.r.children('img').eq(j).addClass(
										'animate5 fadeInRighttBig');}
									else if(j==1){this.r.children('img').eq(j).addClass(
									'animate6 rotateInUpLeft');}
									else if(j==2){this.r.children('img').eq(j).addClass(
										'animate7 fadeInLeftBig');}
									else if(j>2){this.r.children('img').eq(j).addClass(
									'animate0 rotateInUpRight');}
										
								}
							}
							else if(index==3){
								for ( var j = 0; j < this.childrenSpanLength; j++) {
									if(j==0){this.r.children('span').eq(j).addClass(
										'animate5 rotateInDownLeft');}
									else if(j==1){this.r.children('span').eq(j).addClass(
									'animate2 rotateInUpLeft');}
									else if(j==2){this.r.children('span').eq(j).addClass(
										'animate4 fadeInLeftBig');}
									else if(j>2){this.r.children('span').eq(j).addClass(
									'animate5 fadeInRightBig');}
								}
								for ( var j = 0; j < this.childrenImgLength; j++) {
									if(j==0){this.r.children('img').eq(j).addClass(
										'animate5 fadeInUp');}
									else if(j==1){this.r.children('img').eq(j).addClass(
									'animate6 rotateInUpLeft');}
									else if(j==2){this.r.children('img').eq(j).addClass(
										'animate7 fadeInLeftBig');}
									else if(j>2){this.r.children('img').eq(j).addClass(
									'animate5 rotateInUpLeft');}
										
								}
							}else if (index>3) {
								for ( var j = 0; j < this.childrenSpanLength; j++) {
									if(j==0){this.r.children('span').eq(j).addClass(
										'animate0 fadeInLeftBig');}
									else if(j==1){this.r.children('span').eq(j).addClass(
									'animate2 rotateInUpLeft');}
									else if(j==2){this.r.children('span').eq(j).addClass(
										'animate4 fadeInLeftBig');}
									else if(j>2){this.r.children('span').eq(j).addClass(
									'animate5 fadeInRightBig');}
								}
								for ( var j = 0; j < this.childrenImgLength; j++) {
									if(j==0){this.r.children('img').eq(j).addClass(
										'animate5 fadeInLeftBig');}
									else if(j==1){this.r.children('img').eq(j).addClass(
									'animate6 rotateInUpLeft');}
									else if(j==2){this.r.children('img').eq(j).addClass(
										'animate7 fadeInLeftBig');}
									else if(j>2){this.r.children('img').eq(j).addClass(
									'animate5 rotateInUpRight');}
										
								}
							}

						};
						
						this.changePaginationNext = function(index){ 
							$('.ju_pagination li').eq((index-1)).addClass('ju_passive').removeClass('ju_active');
							$('.ju_pagination li').eq(index).addClass('ju_active animate0 rotateInUpRight').removeClass('ju_passive');
							
						};
						
						this.changePaginationPrev = function(index){ 
							if(index==(this.liLength-1)){
								$('.ju_pagination li').eq(0).addClass('ju_passive').removeClass('ju_active');
								$('.ju_pagination li').eq(index).addClass('ju_active animate0 rotateInUpLeft').removeClass('ju_passive');
							}
							$('.ju_pagination li').eq((index+1)).addClass('ju_passive').removeClass('ju_active');
							$('.ju_pagination li').eq(index).addClass('ju_active animate0 rotateInUpRight').removeClass('ju_passive');
						};
						
						this.clearClass = function(){
							this.liNo.children('span').removeClass();
							this.liNo.children('img').removeClass();
							$('.ju_pagination li').removeClass('animate0 rotateInUpRight rotateInUpLeft');
						};
						
						this.init = function(){
							$('.ju_pagination').css('width',this.paginationWidth);
							this.iniR = this.liNo.eq(0);
							this.childrenSpanLength = this.iniR.children('span').length;
							this.childrenImgLength = this.iniR.children('img').length;
							for ( var j = 0; j < this.childrenSpanLength; j++) {
								if(j==0){this.iniR.children('span').eq(j).addClass(
									'animate0 fadeInLeftBig');}
								else if(j==1){this.iniR.children('span').eq(j).addClass(
								'animate2 rotateInUpLeft');}
								else if(j==2){this.iniR.children('span').eq(j).addClass(
									'animate4 fadeInLeftBig');}
								else if(j>2){this.iniR.children('span').eq(j).addClass(
								'animate5 fadeInRightBig');}
									
							}
							for ( var j = 0; j < this.childrenImgLength; j++) {
								if(j==0){this.iniR.children('img').eq(j).addClass(
									'animate5 rotateInUpRight');}
								else if(j==1){this.iniR.children('img').eq(j).addClass(
								'animate6 rotateInUpLeft');}
								else if(j==2){this.iniR.children('img').eq(j).addClass(
									'animate7 rotateInDownLeft');}
								else if(j>2){this.iniR.children('img').eq(j).addClass(
								'animate0 rotateInUpRight');}
									
							}
							for(var i=0; i<this.liLength; i++){
								 
								if(i==0){
									$('.ju_pagination').append('<li class="ju_active"></li>');
								}else{
									$('.ju_pagination').append(' <li class="ju_passive"></li>');
									
								}
							}
							
						};

					};

					var slider = new Slider();
					slider.init();
					slider.next_btn.click(function(e) {
						e.preventDefault();
						slider.next();
						slider.clearClass();
					});

					slider.prev_btn.click(function(e) {
						e.preventDefault();
						slider.prev();
						slider.clearClass();
					});

					if (o.auto === true) {

						var timer = function() {
							slider.next();
							slider.clearClass();
						};

						var interval = setInterval(timer, o.speed);

						// Pause when hovering image
						e.hover(function() {
							clearInterval(interval);
						}, function() {
							interval = setInterval(timer, o.speed);
						});

					}
				});
	};

})(jQuery);