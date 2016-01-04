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
		$.ajax({
			url: 'posts',
			type: 'POST',
			data: {post: {name: this.state.itemName}},
			success: function(item){
				var items = self.state.items;
				items.push({name: item.name, complete: item.complete});
				self.setState({items: items, showAdd: false, itemName: null});
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
								<a className ='waves-effect waves-light btn' type='submit'>Create Post it</a>
							</form>	
						</div>

			);

	}

});