ARG VARIANT=2.7
FROM ruby:${VARIANT}

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

COPY Gemfile just-the-docs.gemspec ./
RUN gem install bundler
RUN bundle install

WORKDIR /usr/src/app

EXPOSE 4000
VOLUME [ "/usr/src/app" ]