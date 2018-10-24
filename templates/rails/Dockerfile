FROM ruby:2.5.3
MAINTAINER jordano.moscoso@tektonlabs.com
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs netcat

RUN npm -g install yarn

RUN mkdir /app
WORKDIR /app

COPY start_rails ./
RUN /bin/chown root /app/start_rails
RUN /bin/chmod +x /app/start_rails

COPY package.json ./
RUN yarn install

COPY Gemfile ./
RUN gem install bundler --no-ri --no-rdoc
RUN gem install rails --no-ri --no-rdoc
RUN bundle install

EXPOSE 3000

CMD ["/bin/bash", "-c", "-l", "/bin/chmod +x /app/start_rails && /app/start_rails"]
