class SalariesController < ApplicationController
  #GET /salaries
  def index
    @salaries = Salary.all
  end

  def show
    @salary = Salary.find(params[:id])
  end
end
