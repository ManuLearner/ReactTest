const container= document.querySelector('.counter');
const buttonsDiv= document.querySelector('.buttons');
const secInput= document.getElementById('seconds');
var seconds;
var remseconds;
var minutes;
var toCount = true;
function toSubmit(){
	display('start');
	remove('seconds');
	remove('ok');
	seconds= Number(secInput.value);
	counting();
}
function dispaly(e){
	document.getElementById(e).style.dispaly='block';
}
function remove(e){
	document.getElementById(e).style.dispaly='none';
}
function check(stat){
	toCount = this.value;
	if (stat.id== "start") {
		dispaly("stop");
		remove("stat");
	}
	else if (stat.id=="stop") {
		dispaly("continue");
		remove("stop");

	}
	else{
		dispaly("stop");
		remove("continue")
	}
}

function count(){
	if (seconds>0) {
		if (toCount==true) {
			seconds--;
			remseconds=seconds%60;
			minutes=Math.floor(seconds/60);
			if (minutes<10) {
			minutes="0" + minutes;
			}
			if (seconds<10) {
			seconds="0" + seconds;
			}

		container.innerHTML = minutes+ ":" +remseconds;
		setInterval(count,1000);
		}
	}
	else{
		container.innerHTML="DONE!";
	}
}
function counting(){
	remseconds=seconds%60;
	minutes=Math.floor(seconds/60);
	if (minutes<10) {
		minutes="0" + minutes;
	}
	if (seconds<10) {
		seconds="0" + seconds;
	}

	container.innerHTML = minutes+ ":" +remseconds;
	setInterval(count,1000);
}
