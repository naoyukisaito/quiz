var app = new Vue({
	el: '#app',
	data: {
		items: ''
	},
	methods: {
		initializeApp: function(json){
			console.log(json);
			//for(var i = 0; i > json.length; i++){
			//	console.log('ok');
			//}
			this.items = json;

		}
	},
	ready: function(){
		this.$http.get('/build/json/app.json').then((response) => {
			console.log(response);
			this.initializeApp(response.data);
		}, (data) => {
			console.log('false');
		});
	}
});
