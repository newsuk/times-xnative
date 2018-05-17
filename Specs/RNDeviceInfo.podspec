# coding: utf-8
require 'json'
key = "RNDeviceInfo:version"
version = JSON.parse(File.read('localpodversions.json'))["#{key}"]
#version = "0.9.3"

print "#{key} #{version}"

Pod::Spec.new do |s|
  s.name         = "RNDeviceInfo"
  s.version      = "#{version}"
  s.summary      = "Device Information for react-native"

  s.homepage     = "https://github.com/rebeccahughes/react-native-device-info"

  s.license      = "MIT"
  s.authors      = { "Rebecca Hughes" => "rebecca@learnium.net" }
  s.platform     = :ios, "7.0"

  s.source       = { :git => "https://github.com/rebeccahughes/react-native-device-info.git" }

  s.source_files  = "RNDeviceInfo/*.{h,m}"

  s.dependency 'React'
end
