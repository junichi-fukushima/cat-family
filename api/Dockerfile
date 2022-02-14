FROM ruby:2.6.5
WORKDIR /cat_family/api

RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

RUN gem install bundler -v 2.1.4
COPY Gemfile /cat_family/api/Gemfile
COPY Gemfile.lock /cat_family/api/Gemfile.lock
# nokogiriとubuntuの競合回避
RUN bundle config set force_ruby_platform true
RUN bundle install
# COPY . /cat_family/api

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
