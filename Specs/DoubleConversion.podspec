# coding: utf-8
require 'json'
key = "DoubleConversion:version"
version = JSON.parse(File.read('localpodversions.json'))["#{key}"]
#version = "1.1.5"

print "#{key} #{version}"

Pod::Spec.new do |spec|
  spec.name = 'DoubleConversion'
  spec.version = version
  spec.license = { :type => 'BSD' }
  spec.homepage = 'https://github.com/google/double-conversion'
  spec.summary = 'Efficient binary-decimal and decimal-binary conversion routines for IEEE doubles'
  spec.authors = 'Google'
  spec.prepare_command = 'mv src double-conversion'
  spec.source = { :git => 'https://github.com/google/double-conversion.git',
                  :tag => "v#{spec.version}" }
  spec.module_name = 'DoubleConversion'
  spec.source_files = 'double-conversion/*.{h,cc}'

  # Pinning to the same version as React.podspec.
  spec.platforms = { :ios => "8.0", :tvos => "9.2" }

end
