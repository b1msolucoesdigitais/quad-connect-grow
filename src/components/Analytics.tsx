import { useEffect } from 'react';
import { analyticsConfig } from '@/config/analytics';

// Google Analytics 4
const loadGoogleAnalytics = () => {
  if (!analyticsConfig.googleAnalytics.enabled || !analyticsConfig.googleAnalytics.measurementId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalytics.measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', analyticsConfig.googleAnalytics.measurementId);
};

// Google Tag Manager
const loadGoogleTagManager = () => {
  if (!analyticsConfig.googleTagManager.enabled || !analyticsConfig.googleTagManager.containerId) return;

  // GTM Script
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${analyticsConfig.googleTagManager.containerId}');
  `;
  document.head.appendChild(gtmScript);
};

// Facebook Pixel
const loadFacebookPixel = () => {
  if (!analyticsConfig.facebookPixel.enabled || !analyticsConfig.facebookPixel.pixelId) return;

  // Facebook Pixel Code
  const fbqScript = document.createElement('script');
  fbqScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${analyticsConfig.facebookPixel.pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(fbqScript);

  // Facebook Pixel Noscript
  const fbqNoscript = document.createElement('noscript');
  fbqNoscript.innerHTML = `
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=${analyticsConfig.facebookPixel.pixelId}&ev=PageView&noscript=1"/>
  `;
  document.head.appendChild(fbqNoscript);
};

// Hotjar
const loadHotjar = () => {
  if (!analyticsConfig.hotjar.enabled || !analyticsConfig.hotjar.hjid) return;

  const hotjarScript = document.createElement('script');
  hotjarScript.innerHTML = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${analyticsConfig.hotjar.hjid},hjsv:${analyticsConfig.hotjar.hjsv}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(hotjarScript);
};

// LinkedIn Insight Tag
const loadLinkedIn = () => {
  if (!analyticsConfig.linkedin.enabled || !analyticsConfig.linkedin.partnerId) return;

  const linkedinScript = document.createElement('script');
  linkedinScript.innerHTML = `
    _linkedin_partner_id = "${analyticsConfig.linkedin.partnerId}";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  `;
  document.head.appendChild(linkedinScript);

  const linkedinScript2 = document.createElement('script');
  linkedinScript2.async = true;
  linkedinScript2.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(linkedinScript2);

  const linkedinNoscript = document.createElement('noscript');
  linkedinNoscript.innerHTML = `
    <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${analyticsConfig.linkedin.partnerId}&fmt=gif" />
  `;
  document.head.appendChild(linkedinNoscript);
};

// Microsoft Clarity
const loadMicrosoftClarity = () => {
  if (!analyticsConfig.microsoftClarity.enabled || !analyticsConfig.microsoftClarity.projectId) return;

  const clarityScript = document.createElement('script');
  clarityScript.type = 'text/javascript';
  clarityScript.async = true;
  clarityScript.src = `https://c.clarity.ms/tag/${analyticsConfig.microsoftClarity.projectId}`;
  document.head.appendChild(clarityScript);
};

// Chatwoot
const loadChatwoot = () => {
  if (!analyticsConfig.chatwoot.enabled) return;

  const chatwootScript = document.createElement('script');
  chatwootScript.innerHTML = `
    window.chatwootSettings = {
      "position":"${analyticsConfig.chatwoot.position}",
      "type":"${analyticsConfig.chatwoot.type}",
      "launcherTitle":"${analyticsConfig.chatwoot.launcherTitle}"
    };
    (function(d,t) {
      var BASE_URL="${analyticsConfig.chatwoot.baseUrl}";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: '${analyticsConfig.chatwoot.websiteToken}',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  `;
  document.head.appendChild(chatwootScript);
};

export const Analytics = () => {
  useEffect(() => {
    // Carregar todos os scripts de analytics
    loadGoogleAnalytics();
    loadGoogleTagManager();
    loadFacebookPixel();
    loadHotjar();
    loadLinkedIn();
    loadMicrosoftClarity();
    loadChatwoot();
  }, []);

  return null;
};

// GTM NoScript (para ser usado no body)
export const GTMNoScript = () => {
  if (!analyticsConfig.googleTagManager.enabled || !analyticsConfig.googleTagManager.containerId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${analyticsConfig.googleTagManager.containerId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};
