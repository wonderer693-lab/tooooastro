export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface ProductPricing {
  id: string;
  name: string;
  tiers: PricingTier[];
}

export const pricingData: ProductPricing[] = [
  {
    id: "riaya-plus", name: "رعاية بلس",
    tiers: [
      { name: "الباقة الأساسية", price: "1,500", period: "ريال/شهر", features: ["مواعيد غير محدودة", "ملفات مرضى", "تقارير أساسية", "دعم فني"], cta: "اطلب عرض سعر" },
      { name: "الباقة المتقدمة", price: "2,500", period: "ريال/شهر", features: ["كل ميزات الأساسية", "تأمين ومطالبات", "ربط مع نفيس", "فاتورة إلكترونية"], highlighted: true, cta: "اطلب عرض سعر" },
      { name: "الباقة الشاملة", price: "4,000", period: "ريال/شهر", features: ["كل ميزات المتقدمة", "مخزون وصيدلية", "ربط مختبرات وأشعة", "عدد مستخدمين غير محدود"], cta: "اطلب عرض سعر" },
    ],
  },
  {
    id: "gain", name: "غين",
    tiers: [
      { name: "الباقة الفضية", price: "900", period: "ريال/شهر", features: ["مواعيد", "ملفات مرضى", "تذكيرات واتساب", "عدد مستخدمين غير محدود"], cta: "اطلب عرض سعر" },
      { name: "الباقة الذهبية", price: "1,500", period: "ريال/شهر", features: ["كل ميزات الفضية", "تأمين", "ربط مع نفيس", "فاتورة إلكترونية"], highlighted: true, cta: "اطلب عرض سعر" },
      { name: "الباقة البلاتينية", price: "2,500", period: "ريال/شهر", features: ["كل ميزات الذهبية", "تقارير متقدمة", "مخزون", "تطبيق مرضى"], cta: "اطلب عرض سعر" },
    ],
  },
  {
    id: "clinicy", name: "كلينيكي",
    tiers: [
      { name: "مجاني", price: "0", period: "ريال/شهر", features: ["مواعيد محدودة", "ملفات مرضى أساسية", "تطبيق مرضى", "تجربة كاملة"], cta: "ابدأ مجانًا" },
      { name: "احترافية", price: "500", period: "ريال/شهر", features: ["مواعيد غير محدودة", "تذكيرات", "تأمين", "تقارير"], highlighted: true, cta: "جرب مجانًا" },
      { name: "مؤسسات", price: "2,000", period: "ريال/شهر", features: ["كل الميزات", "عدد مستخدمين غير محدود", "ربط مختبرات", "دعم مخصص"], cta: "جرب مجانًا" },
    ],
  },
  {
    id: "athir", name: "أثير",
    tiers: [
      { name: "الباقة الأساسية", price: "1,200", period: "ريال/شهر", features: ["مواعيد", "ملفات مرضى", "فواتير", "دعم فني"], cta: "اطلب عرض سعر" },
      { name: "الباقة المتقدمة", price: "2,000", period: "ريال/شهر", features: ["كل ميزات الأساسية", "تأمين", "سباهي", "ربط مع نفيس"], highlighted: true, cta: "اطلب عرض سعر" },
      { name: "الباقة الشاملة", price: "3,000", period: "ريال/شهر", features: ["كل ميزات المتقدمة", "حوكمة مؤسسية", "تقارير متقدمة", "مخزون وصيدلية"], cta: "اطلب عرض سعر" },
    ],
  },
];
