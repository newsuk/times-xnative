# coding: utf-8
require 'json'

package = JSON.parse(File.read("./packages/ios-app/package.json"))
react_native_version = package["react-native"]
podspec_version = package["version"]

Pod::Spec.new do |s|
  s.name         = "TimesReactIOS"
  s.version      = podspec_version
  s.summary      = "Times iOS React components"
  s.description  = "All the things for Times iOS React components including dependancies"
  s.homepage     = "https://www.news.co.uk"
  s.license      = { type: 'MIT', file: 'LICENSE' }
  s.author       = "News UK"
  s.platform     = :ios
  s.source       = { :git => 'https://github.com/newsuk/times-xnative.git', :tag => '@thetimes/ios-app@0.0.1'}
  #s.source       = { :git => 'https://github.com/facebook/react-native.git', :tag => "v0.54.2" }
  

  s.requires_arc = true
  s.ios.deployment_target = '9.0'
  s.swift_version = '3.0'
  #s.resources   = "./packages/ios-app/assets/js/index.ios.bundle"
  #s.resource_bundles = {'TimesReactIOSBundle' => './packages/ios-app/assets/js/index.ios.bundle'}
  
  # React is split into a set of subspecs, these are the essentials
  
  #s.dependency 'React/Core', react_native_version
  #s.dependency 'React/CxxBridge', react_native_version
  #s.dependency 'React/RCTAnimation', react_native_version
  #s.dependency 'React/RCTImage', react_native_version
  #s.dependency 'React/RCTLinkingIOS', react_native_version
  #s.dependency 'React/RCTNetwork', react_native_version
  #s.dependency 'React/RCTText', react_native_version
  #s.dependency 'React/RCTWebSocket', react_native_version
  #s.dependency 'React/DevSupport', react_native_version
  #s.dependency 'React/ART', react_native_version
  
  s.dependency 'React/Core'
  s.dependency 'React/CxxBridge'
  s.dependency 'React/RCTAnimation'
  s.dependency 'React/RCTImage'
  s.dependency 'React/RCTLinkingIOS'
  s.dependency 'React/RCTNetwork'
  s.dependency 'React/RCTText'
  s.dependency 'React/RCTWebSocket'
  s.dependency 'React/DevSupport'
  s.dependency 'React/ART'

  # React's dependencies

  s.dependency 'yoga'
  s.dependency 'DoubleConversion'
  s.dependency 'Folly'
  s.dependency 'glog'

end
