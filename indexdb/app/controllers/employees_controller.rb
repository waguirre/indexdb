require 'rest-client'
require 'json'
require 'foo/version'

class EmployeesController < ApplicationController
  def index

    @products = Employee.all
    respond_to do |format|
      format.html
      format.json { render json: @products }
    end

  end
end
