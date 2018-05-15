#
#  Be sure to run `pod spec lint TimesReactiOS.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#

react_native_version = "0.54.2"
yoga_version = "0.54.2"

Pod::Spec.new do |s|
  s.name         = "TimesReactIOS"
  s.version      = "0.0.2"
  s.summary      = "Times iOS React components"
  s.description  = "All the things for Times iOS React components including dependancies"
  s.homepage     = "http://www.thetimes.co.uk"
  s.license      = "MIT"
  s.author       = "The Times"
  s.platform     = :ios
  s.source       = { :git => 'http://example.com' }
  #s.resources   = "./packages/ios-app/assets/js/index.ios.bundle"
  #s.resource_bundles = {'TimesReactIOSBundle' => './packages/ios-app/assets/js/index.ios.bundle'}
  
  # React is split into a set of subspecs, these are the essentials
  
  s.dependency 'React/Core', react_native_version
  s.dependency 'React/CxxBridge', react_native_version
  s.dependency 'React/RCTAnimation', react_native_version
  s.dependency 'React/RCTImage', react_native_version
  #s.dependency 'React/RCTLinkingIOS', react_native_version
  s.dependency 'React/RCTNetwork', react_native_version
  s.dependency 'React/RCTText', react_native_version
  s.dependency 'React/RCTWebSocket', react_native_version
  s.dependency 'React/DevSupport', react_native_version
  
  # React's dependencies
  
  s.dependency 'yoga', "#{yoga_version}.React"
  
  podspecs = [
    'node_modules/react-native-linear-gradient/BVLinearGradient.podspec',
    'node_modules/react-native-device-info/RNDeviceInfo.podspec',
    'node_modules/react-native-svg/RNSVG.podspec',
    'node_modules/react-native/third-party-podspecs/DoubleConversion.podspec',
    'node_modules/react-native/third-party-podspecs/Folly.podspec',
    'node_modules/react-native/third-party-podspecs/glog.podspec'
  ]
  podspecs.each do |podspec_path|
    spec = Pod::Specification.from_file podspec_path
    s.dependency spec.name, "#{spec.version}"
  end

end