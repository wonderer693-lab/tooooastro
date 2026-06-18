export interface Spec {
  category: string;
  items: { feature: string; key: string }[];
}

export interface ProductSpecs {
  [productId: string]: Record<string, string | boolean>;
}

export const specCategories: Spec[] = [
  {
    category: "إدارة المواعيد",
    items: [
      { feature: "جدولة ذكية", key: "schedule" },
      { feature: "تذكيرات واتساب", key: "whatsapp" },
      { feature: "حجز أونلاين", key: "online_booking" },
      { feature: "إلغاء وإعادة جدولة", key: "reschedule" },
    ],
  },
  {
    category: "ملفات مرضى",
    items: [
      { feature: "سجلات إلكترونية", key: "ehr" },
      { feature: "وصفات إلكترونية", key: "prescriptions" },
      { feature: "ربط مختبرات", key: "lab" },
      { feature: "ربط أشعة", key: "radiology" },
    ],
  },
  {
    category: "التأمين والفواتير",
    items: [
      { feature: "ربط مع نفيس", key: "nafis" },
      { feature: "أكواد CCHI/CPT", key: "cchi" },
      { feature: "توافق سباهي", key: "spahi" },
      { feature: "فاتورة إلكترونية", key: "e_invoice" },
      { feature: "مطالبات تأمينية", key: "claims" },
    ],
  },
  {
    category: "التقنية",
    items: [
      { feature: "نظام سحابي", key: "cloud" },
      { feature: "تطبيق أطباء", key: "doctor_app" },
      { feature: "تطبيق مرضى", key: "patient_app" },
      { feature: "دعم بالعربية", key: "arabic" },
    ],
  },
  {
    category: "التكامل",
    items: [
      { feature: "محاسبة", key: "accounting" },
      { feature: "مخزون", key: "inventory" },
      { feature: "مختبرات", key: "lab_integration" },
      { feature: "صيدلية", key: "pharmacy" },
    ],
  },
];

export const productSpecs: ProductSpecs = {
  "riaya-plus": {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: true, cchi: true, spahi: true, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: false, arabic: true,
    accounting: true, inventory: true, lab_integration: true, pharmacy: true,
  },
  gain: {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: false,
    nafis: true, cchi: true, spahi: false, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: true, arabic: true,
    accounting: true, inventory: true, lab_integration: true, pharmacy: true,
  },
  clinicy: {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: false, radiology: false,
    nafis: true, cchi: false, spahi: false, e_invoice: true, claims: "يدعم جزئيًا",
    cloud: true, doctor_app: true, patient_app: true, arabic: true,
    accounting: true, inventory: false, lab_integration: false, pharmacy: false,
  },
  athir: {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: true, cchi: true, spahi: true, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: false, arabic: true,
    accounting: true, inventory: true, lab_integration: true, pharmacy: true,
  },
  "sals-erp": {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: false, radiology: false,
    nafis: true, cchi: true, spahi: false, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: false, arabic: true,
    accounting: true, inventory: true, lab_integration: false, pharmacy: true,
  },
  ghayat: {
    schedule: true, whatsapp: true, online_booking: false, reschedule: false,
    ehr: true, prescriptions: true, lab: false, radiology: false,
    nafis: false, cchi: false, spahi: false, e_invoice: true, claims: false,
    cloud: true, doctor_app: false, patient_app: false, arabic: true,
    accounting: true, inventory: false, lab_integration: false, pharmacy: false,
  },
  "ecare-plus": {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: true, cchi: true, spahi: true, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: false, arabic: true,
    accounting: true, inventory: true, lab_integration: true, pharmacy: true,
  },
  medinous: {
    schedule: true, whatsapp: true, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: true, cchi: true, spahi: true, e_invoice: true, claims: true,
    cloud: true, doctor_app: true, patient_app: false, arabic: true,
    accounting: true, inventory: true, lab_integration: true, pharmacy: true,
  },
  simplepractice: {
    schedule: true, whatsapp: false, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: false, radiology: false,
    nafis: false, cchi: false, spahi: false, e_invoice: false, claims: false,
    cloud: true, doctor_app: true, patient_app: true, arabic: "جزئي",
    accounting: false, inventory: false, lab_integration: false, pharmacy: false,
  },
  cliniko: {
    schedule: true, whatsapp: false, online_booking: true, reschedule: true,
    ehr: true, prescriptions: false, lab: false, radiology: false,
    nafis: false, cchi: false, spahi: false, e_invoice: false, claims: false,
    cloud: true, doctor_app: true, patient_app: true, arabic: true,
    accounting: false, inventory: false, lab_integration: false, pharmacy: false,
  },
  drchrono: {
    schedule: true, whatsapp: false, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: false, cchi: false, spahi: false, e_invoice: false, claims: false,
    cloud: true, doctor_app: true, patient_app: true, arabic: false,
    accounting: false, inventory: false, lab_integration: true, pharmacy: false,
  },
  tebra: {
    schedule: true, whatsapp: false, online_booking: true, reschedule: true,
    ehr: true, prescriptions: true, lab: true, radiology: true,
    nafis: false, cchi: false, spahi: false, e_invoice: false, claims: false,
    cloud: true, doctor_app: true, patient_app: true, arabic: false,
    accounting: false, inventory: false, lab_integration: true, pharmacy: false,
  },
};

export function getProductName(id: string): string {
  const names: Record<string, string> = {
    "riaya-plus": "رعاية بلس", gain: "غين", clinicy: "كلينيكي",
    athir: "أثير", "sals-erp": "سلس", ghayat: "غايات",
    "ecare-plus": "إي كير بلاس", medinous: "ميدينوس",
    simplepractice: "SimplePractice", cliniko: "Cliniko",
    drchrono: "DrChrono", tebra: "Tebra",
  };
  return names[id] || id;
}
