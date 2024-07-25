Rails.application.routes.draw do
  root 'dashboard#index'

  get 'work', to: 'work#index'
  get 'about', to: 'about#index'
  get 'blog', to: 'blog#index'
  get 'contact', to: 'contact#index'

  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index]
    end
  end
end