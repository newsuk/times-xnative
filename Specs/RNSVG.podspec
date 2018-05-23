# coding: utf-8
require 'json'
key = "RNSVG:version"
version = JSON.parse(File.read('localpodversions.json'))["#{key}"]

print "#{key} = #{version}\n"

Pod::Spec.new do |s|
  s.name             = 'RNSVG'
  s.version          = version
  s.summary          = "SVG library for react-native"
  s.license          = "MIT"
  s.homepage         = 'https://github.com/magicismight/react-native-svg'
  s.authors          = 'Horcrux Chen'
  s.source           = { :git => 'https://github.com/magicismight/react-native-svg.git', :tag => "#{version}" }
  s.source_files     = 'ios/**/*.{h,m}'
  s.requires_arc     = true
  s.platforms        = { :ios => "8.0", :tvos => "9.2" }
  s.dependency         'React'  
end
