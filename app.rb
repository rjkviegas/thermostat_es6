require 'sinatra/base'

class Thermostat < Sinatra::Base

  get "/test" do
    "hello world"
  end

  get "/" do
    File.read('public/index.html')
  end
  
  run! if app_file == $0
end
