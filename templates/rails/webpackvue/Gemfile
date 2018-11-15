source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'rails', '~> 5.2.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.5'

gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Added gems
gem 'sassc-rails', '~> 2.0'
gem 'devise', '~> 4.5'
gem 'normalize-rails', '~> 4.1', '>= 4.1.1'
gem 'webpacker', '~> 3.5', '>= 3.5.5'

group :development, :test do
  gem 'rspec-rails', '~> 3.8', '>= 3.8.1'
  gem 'rspec-collection_matchers'
  gem 'rspec-retry', '~> 0.6.1'
  gem 'factory_bot_rails', '~> 4.11', '>= 4.11.1'
end

group :development do
  gem "better_errors"
  gem "binding_of_caller"
  gem 'bullet', '~> 5.7', '>= 5.7.6'
end
group :test do
  gem 'capybara', '~> 3.10'
  gem 'capybara-screenshot', '~> 1.0', '>= 1.0.22'
  gem 'shoulda-matchers', '~> 4.0.0.rc1'
  gem 'selenium-webdriver', '~> 3.14', '>= 3.14.1'
  gem 'chromedriver-helper', '~> 2.1'
  gem 'faker', '~> 1.9', '>= 1.9.1'
  gem 'database_cleaner', '~> 1.7'
end

