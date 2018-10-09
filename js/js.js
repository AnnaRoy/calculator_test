

var rangeSlider = document.getElementById('range-line');

noUiSlider.create(rangeSlider, {				
	start: [8],
	step: 1,
	range: {
		'min': [0],
		'max': [15]
	},
	format: { 
		from: function(value) { 
			return parseInt(value); 
		}, 
		to: function(value) { 
			return parseInt(value); 
		} 
	}  
});	
var rangeSliderValueElement = document.getElementsByClassName('noUi-handle')[0];		

rangeSlider.noUiSlider.on('update', function (values) {
	var day = "день";				
	d = rangeSlider.noUiSlider.get().toString(10)
	b = d.substr(d.length - 1, 1)
	c = d.substr(d.length - 2, 1)
	if (c == 1 && d.length != 1){day = "дней"} 
		else {
			if (b == 1){day = " день"}
				else {
					if (b == 2 || b == 3 || b == 4){day = "дня"}
						else {
							day = "дней"
						}
					}
				}
				rangeSliderValueElement.innerHTML = values+' '+day;

			});

