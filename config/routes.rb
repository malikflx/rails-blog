Rails.application.routes.draw do
  get 'blog', to: 'blog#index'

  root 'dashboard#index'
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index]
    end
  end
end