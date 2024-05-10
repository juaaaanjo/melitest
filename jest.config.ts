import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
                                      
    'node_modules/(?!((jest-)?react-native|escape-string-regexp|expo-router|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)'
  ],
};

export default config;