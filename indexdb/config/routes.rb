Rails.application.routes.draw do
	get 'employees/index'

	get 'employees/save'

	# The priority is based upon order of creation: first created -> highest priority.
	# See how all your routes lay out with "rake routes".
	root to: "salaries#index"
	#Algo parecido a lo anterior es tambien 
	#get '/salaries/index'
	resources :salaries
	#  resources :employees
	#resources :salaries do
	#=begin

	#  get "/salaries"

	#=end

	# You can have the root of your site routed with "root"
	# root 'welcome#index'
	# Example of regular route:
	#   get 'products/:id' => 'catalog#view'

	# Example of named route that can be invoked with purchase_url(id: product.id)
	#   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

	# Example resource route (maps HTTP verbs to controller actions automatically):
	#   resources :products

	# Example resource route with options:
	#   resources :products do
	#     member do
	#       get 'short'
	#       post 'toggle'
	#     end
	#
	#     collection do
	#       get 'sold'
	#     end
	#   end

	# Example resource route with sub-resources:
	#   resources :products do
	#     resources :comments, :sales
	#     resource :seller
	#   end

	# Example resource route with more complex sub-resources:
	#   resources :products do
	#     resources :comments
	#     resources :sales do
	#       get 'recent', on: :collection
	#     end
	#   end

	# Example resource route with concerns:
	#   concern :toggleable do
	#     post 'toggle'
	#   end
	#   resources :posts, concerns: :toggleable
	#   resources :photos, concerns: :toggleable

	# Example resource route within a namespace:
	#   namespace :admin do
	#     # Directs /admin/products/* to Admin::ProductsController
	#     # (app/controllers/admin/products_controller.rb)
	#     resources :products
	#   end

	# esto es para definir las acciones que uno quiera

	# namespace :api do
	#   namespace :v1 do
	#     resources :employees
	#   end
	# end

	scope '/api', module: 'api', as: 'api' do
		scope '/v1', module: 'v1', as: 'v1' do
			resources :employees, :defaults => {:format=>'json'}
		end
	end
	scope '/ui', module: 'ui', as:'ui' do
		resources :employees
	end
	# scope :module => 'ui' do
	# 	resources :employees
	# end

 # scope '/api' do
 #  scope '/v1' do
 #    resources :employees
 #  end
 # end

 # resources :employees, :defaults => {:format => 'xml'}

	 # resources :posts do
	 #   member do
	 #     get :status
	 #     put :update_status
	 #   end
	 #   collection do
	 #     get :search
	 #     post :new_search
	 #     get :show_search
	 #   end
	 # end


	#:member crea un path de la foma /:controller/:id/:my_method
	#:collection crea un path de la foma /:controller/:my_method
	#:new crea un path de la foma /:controller/:my_method/new
end


#indexdb::Application.routes.draw do
	# scope :module => 'ui' do
		# resources :employees
	# end
#end


# indexdb::Application.routes.draw do
#   get 'employees/index'

	# get 'employees/save'

#
# end

# Api::V1::Application.routes.draw do
#   get 'employees/index'

	# get 'employees/save'

#
# end


#indexdb::Application.routes.draw do
	# get 'employees/index'

	# get 'employees/save'

#  namespace :api do
#    namespace :v1 do
#      resources :products
#    end
#  end

#  resources :products
#  root to: 'products#index'
#end

#ApiConsumer::Application.routes.draw do
	# get 'employees/index'

	# get 'employees/save'

#  resources :employees
#end
