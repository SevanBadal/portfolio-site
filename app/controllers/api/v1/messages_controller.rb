# app/controllers/api/v1/stories_controller.rb
class Api::V1::MessagesController < Api::V1::BaseController
  def create
    @message = Message.new(message_params)
    if @message.save
      render json: {status: 'success'}
    else
      render :json: {:errors => @message.errors.full_messages }, :status: 422
    end
  end
end
