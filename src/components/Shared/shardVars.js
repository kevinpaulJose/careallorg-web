export const items = [
  {
    name: "FASTag",
    value: "fastag",
  },
  {
    name: "PAN Card",
    value: "pancard",
  },
  {
    name: "DSC",
    value: "dsc",
  },
  {
    name: "Track Order",
    value: "track",
  },
  {
    name: "Contact Us",
    value: "contact",
  },
];

export const application_type = {
  dsc_individual: { name: "DSC Individual", type: "digiserv_individual" },
  dsc_individual_both: { name: "DSC Individual (Both)", type: "digiserv_both" },
  dsc_org: { name: "DSC Organization", type: "digiserv_individual" },
  dsc_org_b: { name: "DSC Organization (Both)", type: "digiserv_both" },
  sbi_fastag: { name: "SBI FASTag", type: "fastag_sbi" },
  icici_fastag: { name: "ICICI FASTag", type: "fastag_icici" },
  sbi_fastag_replacement: {
    name: "SBI FASTag (Replacement)",
    type: "fastag_sbi",
  },
  icici_fastag_replacement: {
    name: "ICICI FASTag (Replacement)",
    type: "fastag_icici",
  },
  pan_new: { name: "PAN Card", type: "pan_1" },
  pan_correction: { name: "PAN Card - Correction", type: "pan_1" },
  pan_damaged: { name: "PAN Card - Damaged", type: "pan_1" },
};

export const gender = ["Mr", "Mrs", "Ms"];

export function getApp(order_id) {
  let temp = order_id.slice(0, 3);
  // console.log(temp);
  switch (temp.toUpperCase()) {
    case "PAN":
      return "pan";
    case "FAS":
      return "fastag";
    case "DIG":
      return "digiserv";
    default:
      return "fastag";
  }
}
