#
#  Be sure to run `pod spec lint TimesReactIOS.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#

react_native_version = "0.54.2"
yoga_version = "0.54.2"

Pod::Spec.new do |s|
  s.name         = "TimesReactIOS"
  s.version      = "0.0.1"
  s.summary      = "Times iOS React components"
  s.description  = "All the things for Times iOS React components including dependancies"
  s.homepage     = "https://www.news.co.uk"
  s.license      = { type: 'MIT', file: 'LICENSE' }
  s.author       = "News UK"
  s.platform     = :ios
  s.source       = { :git => 'https://github.com/newsuk/times-xnative.git', :tag => '@thetimes/ios-app@0.0.1'}
  s.source       = { :git => 'https://github.com/facebook/react-native.git', :tag => "v0.54.2" }
  

  s.requires_arc = true
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
  
  #s.dependency 'Yoga'
  #s.dependency 'yoga', "#{yoga_version}.React"

  podspecs = [
    #'node_modules/react-native/React.podspec',
    #'node_modules/react-native/ReactCommon/yoga/yoga.podspec',
    'Specs/yoga.podspec',
    'Specs/BVLinearGradient.podspec',
    'node_modules/react-native-device-info/RNDeviceInfo.podspec',
    'node_modules/react-native-svg/RNSVG.podspec',
    'Specs/DoubleConversion.podspec',
    'node_modules/react-native/third-party-podspecs/Folly.podspec',
    'node_modules/react-native/third-party-podspecs/glog.podspec'
  ]
  podspecs.each do |podspec_path|
    spec = Pod::Specification.from_file podspec_path
   #print "#{s.dependency} #{spec.name} #{spec.version}"

    s.dependency spec.name, "#{spec.version}"
  end

end
