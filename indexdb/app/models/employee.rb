class Employee < ActiveRecord::Base
  def self.getall()
    # puts self.connection.select_multiple("call employees_getall")
    return self.connection.select_all("call employees_getall")
    # self.execute_procedure("employees_getall")
  end
end