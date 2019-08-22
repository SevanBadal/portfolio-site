class AdminMailer < ApplicationMailer
  def new_message
    @message = params[:message]
    mail(to: 'sgolnaza@gmail.com', subject: 'Sevan Portfolio - New Message')
  end
end
