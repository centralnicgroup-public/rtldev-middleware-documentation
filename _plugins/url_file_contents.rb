require 'net/http'
require 'uri'

module Jekyll
  module UrlFileContentsFilter
    def url_file_contents(url)
      Net::HTTP.get(URI.parse(url))
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlFileContentsFilter)
