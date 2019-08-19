# app/controllers/api/v1/stories_controller.rb
class Api::V1::MessagesController < Api::V1::BaseController
  def create
    @message = Message.new({name: params[:name], text: params[:text], email: params[:email]})
    if @message.save
      render json: {status: 'success'}
    else
      render_error
    end
  end
end
