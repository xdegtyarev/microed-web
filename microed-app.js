var app = {
	init: function(){
		app.progressBar = document.getElementById("course-progress");
		app.pageSelector = document.getElementById('pager');
		app.courseView = document.querySelector('course-view');
		app.profileView = document.querySelector('profile-view');
		app.body = document.querySelector('body');
		app.backButton = document.getElementById('backButton');

		page('/', app.showFeed);
		page('/account/:id', app.showProfile);
		page('/course/:id', app.showCourse);
		page('*',app.notFound);
		page({"hashbang":true});
	},

	showProfile: function(context){
		app.profileView.profileId = context.params.id;
		app.progressBar.style.display = 'none';
		app.backButton.style.display = 'inherit'
		app.pageSelector.select('2');
		app.body.style.backgroundColor = '#EEEEEE'
	},

	showFeed: function(){
		app.progressBar.style.display = 'none';
		app.backButton.style.display = 'none'
		app.pageSelector.select('0');
		app.body.style.backgroundColor = '#EEEEEE'
	},

	showCourse: function(context){
		app.progressBar.style.display = 'inherit';
		app.backButton.style.display = 'inherit';
	    app.pageSelector.select('1');
	    app.courseView.courseId = context.params.id;
	    app.body.style.backgroundColor = '#4285f4'
	},

	notFound: function(context){
		console.log(context);
		console.log('notFound');
	}

};


var currentCourse = {
	init: function(){
		this.progress = 0;
	}
}