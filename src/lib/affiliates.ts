const affiliates: Record<string, string> = {
  "riaya-plus": "https://riayaplus.com",
  gain: "https://gain.sa",
  clinicy: "https://clinicy.com.sa",
  athir: "https://athir.com.sa",
  "sals-erp": "https://saliserp.com",
  ghayat: "https://ghayatltd.com",
  "ecare-plus": "https://nitcotek.com",
  medinous: "https://medinous.com",
  simplepractice: "https://simplepractice.com",
  cliniko: "https://cliniko.com",
  drchrono: "https://drchrono.com",
  tebra: "https://tebra.com",
};

export function getAffiliateUrl(id: string): string {
  return affiliates[id] || "";
}
