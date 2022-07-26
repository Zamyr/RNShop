import "dotenv/config";

export default {
  expo: {
    name: "RNShop",
    slug: "RNShop",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
      projectId: process.env.PROJECT_ID,
      storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    },
  },
};
