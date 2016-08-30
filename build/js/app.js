var app = new Vue({
	el: '#app',
	data: {
		items: '',
		checked: []
	},
	methods: {
		initializeApp: function(json){
			//console.log(json);
			this.items = json;
			//console.log(this.checked);
		},
		setAnswerAllay: function(){
			console.log('ok!');
			
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





