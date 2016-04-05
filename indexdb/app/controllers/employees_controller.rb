# require 'rest-client'
# require 'json'

class EmployeesController < ApplicationController
  def index

    @employees = Employee.getall()
    respond_to do |format|
      format.html
      format.json { render json: @employees }
    end

  end
end
