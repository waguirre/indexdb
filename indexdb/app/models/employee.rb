class Employee < ActiveRecord::Base
  def self.getall()
    self.execute_procedure("employees_getall")
  end
end