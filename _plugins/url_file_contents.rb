require 'open-uri'

module Jekyll
  module UrlFileContentsFilter
    def url_file_contents(url)
      URI(url).open.read
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlFileContentsFilter)
