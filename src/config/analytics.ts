export const analyticsConfig = {
  // Google Analytics 4
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Substitua pelo seu GA4 ID
    enabled: true
  },

  // Google Tag Manager
  googleTagManager: {
    containerId: "GTM-XXXXXXX", // Substitua pelo seu GTM ID
    enabled: true
  },

  // Facebook Pixel
  facebookPixel: {
    pixelId: "XXXXXXXXXX", // Substitua pelo seu Pixel ID
    enabled: true
  },

  // Chatwoot (já configurado)
  chatwoot: {
    enabled: true,
    websiteToken: 'twkLymYsvmXmUWk5G86HYLPm',
    baseUrl: 'https://chat.vipatende.com.br',
    position: 'right',
    type: 'standard',
    launcherTitle: 'Converse conosco'
  },

  // Hotjar
  hotjar: {
    hjid: "XXXXXXXXXX", // Substitua pelo seu Hotjar ID
    hjsv: "6",
    enabled: false
  },

  // LinkedIn Insight Tag
  linkedin: {
    partnerId: "XXXXXXXXXX", // Substitua pelo seu LinkedIn Partner ID
    enabled: false
  },

  // Microsoft Clarity
  microsoftClarity: {
    projectId: "XXXXXXXXXX", // Substitua pelo seu Clarity Project ID
    enabled: false
  }
};
