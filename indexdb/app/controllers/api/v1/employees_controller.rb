#class Api::V1::EventsController < Api::ApiController
=begin

  Metodo abreviado
  Api el namesopace
  V1 namespace version
  es igual a realizarlo de la forma de abajo

  Metodo largo

  module Api
    module V1
      class EmployeesController < ApiApplicationController

      end
    end
  end
=end

class Api::V1::EmployeesController < ApplicationController

  # respond_to :html, :json
  # respond_to :json

  def index
    # @employees = Employee.all.limit(params[:$top])
    # @employees = Salary.all()
    @employees = Employee.getall()
    respond_to do |format|
      format.html
      format.xml { render xml: @employees }
      format.json { render json: @employees}
    end
  end
end