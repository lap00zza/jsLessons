/**
 * Created by Jewel Mahanta (@lap00zza) on 25-07-2016.
 */
alert('We are starting the Zombie Apocalypse');
var weapon_choice = prompt('Please enter your choice of weapon:');
var rng = Math.round(Math.random());
console.log(weapon_choice * rng);
if (rng) {
    alert(weapon_choice + ' was a really good choice coz\' you just won!!!');
}
else {
    alert('You lose :(');
}
