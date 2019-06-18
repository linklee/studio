class MMailer < ApplicationMailer
  default from: "nevernight721@gmail.com"

  def send_email(email, text)
  	@text = text
    mail(to: email, subject: 'Деньги, бро!')
  end
end
