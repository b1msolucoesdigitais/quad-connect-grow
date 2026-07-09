declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    chatwootSDK: {
      run: (config: any) => void;
    };
    chatwootSettings: {
      position: string;
      type: string;
      launcherTitle: string;
    };
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: string;
      hjsv: string;
    };
    _linkedin_data_partner_ids: string[];
    clarity: (...args: any[]) => void;
  }
}

export {};
