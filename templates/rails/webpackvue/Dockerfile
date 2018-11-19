FROM ruby:2.5.3
MAINTAINER jordano.moscoso@tektonlabs.com
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs netcat

RUN npm -g install yarn

RUN useradd -ms /bin/bash user
USER user

RUN mkdir /home/user/app
WORKDIR /home/user/app

COPY Gemfile ./
RUN gem install bundler --no-ri --no-rdoc
RUN gem install rails --no-ri --no-rdoc
RUN gem install foreman --no-ri --no-rdoc
RUN bundle install

COPY start_rails ./
USER root
RUN /bin/chown user start_rails
USER user

EXPOSE 3000

CMD ["/bin/bash", "-c", "-l", "/bin/chmod +x /home/user/app/start_rails && /home/user/app/start_rails"]
