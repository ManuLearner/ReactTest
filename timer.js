var counter =0;
var timeleft=40;
var startTime=0;
var currentTime=0;
fuction convertSeconds(s){
	var min= floor(s/60);
	var sec=s%60;
	return nf(min,2)+ ':'+nf(sec,2);
}
fuction Setup()
{
	noCanVas();
	startTime= millis();
	var params=getURLParams();
	console.log(params);
	if (params.minute) {
		var min=params.minute;
		timeleft=min*60;
	}
	var timer = select('#timer');
	timer.html(convertSeconds(timeleft-currentTime));
var interval= setInterval(timeIt,1000);

	fuction timeIt()
	{
		//counter++;
		currentTime=floor((millis()-startTime)/1000);
		timer.html(convertSeconds(timeleft-currentTime));
		if (currentTime==timeleft) {
			clearInterval(interval);
			counter=0;
		}
	}
}