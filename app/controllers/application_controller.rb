class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  def index
  	render "pages/index"
  end
  def mobile 
  	render "pages/mobile"
  end
  def seo 
  	render "pages/seo"
  end
  def smm 
  	render "pages/smm"
  end
  def contacts 
  	render "pages/contacts"
  end
  def direct 
  	render "pages/direct"
  end
  def send_email
    text = "902 22 22 123"
    MMailer.send_email("nevernight721@gmail.com", text).deliver_now
    redirect_to "/thanks"
  end

  def send_long_email 
    text = params[:name] + " " + params[:contact] + " " + params[:info] + " " + params[:budget]
    MMailer.send_email("nevernight721@gmail.com", text).deliver_now
    redirect_to "/thanks"
  end
   def thanks
    render "pages/thanks"
  end
end
