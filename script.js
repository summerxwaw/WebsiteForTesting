menu.onclick = function myfunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
const url = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";
const vm = new Vue({
	el: '#app',
		data: {
			results: []

				},

mounted() {

	axios.get(url).then(response => {

	this.results = response.data

	})
	}
});