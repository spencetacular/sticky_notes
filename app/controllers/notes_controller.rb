class NotesController < ApplicationController
  
  def index
  	@posts = Post.all
  end

  # def new
  #   @post = Post.new
  # end

  def create
    post = Post.create(note_params)
    render json: post
  end

  private

  def note_params
    params.require(:post).permit(:name, :description, :priority)
  end

end
