var Post = React.createClass({
	getInitialState: function(){
		return{ post: this.props.posts};
	},

	getDefaultState: function(){
		return{posts: [] };
	},

	// createPostIt: function(){
	// 	alert('works');
	// },

	submitPost: function(e){
		e.preventDefault();
		var self = this;
		var name = this.state.postName;
		var description = this.state.postDescription;
		var priority = this.state.postPriority;
		$.ajax({
			url: '/notes',
			type: 'POST',
			data: {post: {name: name, description: description, priority: priority}},
			success: function(item){
				var items = self.state.post;
				// var items = self.state.posts;
				items.push({name: item.postName, description: item.postDescription, priority: item.postPriority});
				// self.setState({items: items, showAdd: false, itemName: null});
			},
			error: function() {
				debugger
			}
		});
	},

	addPostName: function(e){
		this.setState({postName: e.currentTarget.value})
	},

	addPostDescription: function(e){
		this.setState({postDescription: e.currentTarget.value})
	},

	addPostPriority: function(e){
		this.setState({postPriority: e.currentTarget.value})

	},

	deleteNote: function(e){
		debugger
	},

	displayPosts: function() {
	
		var posts = [];
		for(var i=0; i<this.state.post.length; i++) {
			posts.push(<div className='card'>
										<div className='card-content'>
											<p> Title: </p>
											{this.state.post[i].name}
											<br/>
											<br/>
											{this.state.post[i].description}
											<p> Priority: </p>
											{this.state.post[i].priority}
											<br/>
											<button onClick={deleteNote()}> Remove </button>
										</div>
									</div>
				);
		};
		return posts;
	},

	render: function(){
		return (<div>
							<form onSubmit={this.submitPost}>
								<div className='input-field'>
									<input autoFocus='true' placeholder='Post Title' type='text' onChange={this.addPostName}/>
									<input  placeholder='Post Description' type='text' onChange={this.addPostDescription}/>

								</div>
								<label>Priority</label>
								<p className='range-field'>
									<input type='range' min='0' max='10' onChange={this.addPostPriority}/>
								</p>
								<button className ='waves-effect waves-light btn' type='submit'>Create Post it</button>
							</form>	
						 {this.displayPosts()}
						</div>
			);
	}

});