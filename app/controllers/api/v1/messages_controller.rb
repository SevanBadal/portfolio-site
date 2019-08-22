# app/controllers/api/v1/stories_controller.rb
class Api::V1::MessagesController < Api::V1::BaseController
  def create
    @message = Message.new({name: params[:name], text: params[:text], email: params[:email]})
    puts @message
    if @message.save
      # Tell the AdminMailer to send an email after save
      AdminMailer.with(message: @message).new_message.deliver_later
      render json: {status: 'success'}
    else
      render_error
    end
  end
end
