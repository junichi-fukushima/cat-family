FROM ruby:2.6.5
WORKDIR /app

RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

RUN gem install bundler -v 2.1.4
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
# nokogiriとubuntuの競合回避
RUN bundle config set force_ruby_platform true
RUN bundle install
COPY . /app

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
