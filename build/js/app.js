var app = new Vue({
	el: '#app',
	data: {
		items: ''
	},
	methods: {
		initializeApp: function(json){
			console.log(json);
			this.items = json;
		}
	},
	ready: function(){
		this.$http.get('/build/json/app.json').then((response) => {
			this.initializeApp(response.data);
		}, (response) => {
			console.log('false');
		});
	}
});
