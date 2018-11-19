require_relative './system_helpers/auth'

RSpec.configure do |config|
  config.include SystemHelpers, type: :system
end