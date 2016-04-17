require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  include ActionController::MimeResponds
  include ActionController::ImplicitRender


  respond_to :html, :xml, :json

  protect_from_forgery with: :exception
end
