interface Identity {
  name: string;
  slug: string;
  domain: string;
  repo: string;
  released: boolean;
  version: string;
  download: string | null;
}
export const identity: Identity = {
  name: 'KeySplera',
  slug: 'keysplera',
  domain: 'https://keysplera.mosuzo.com',
  repo: 'https://github.com/mosuzo-studio/KeySplera',
  released: true,
  version: '0.1.0',
  download: 'https://github.com/mosuzo-studio/KeySplera/releases/download/v0.1.0/KeySplera_0.1.0_x64-setup.exe',
};
