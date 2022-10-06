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
  dsc_individual: { name: "DSC Individual", type: "digiserv" },
  dsc_individual_both: { name: "DSC Individual (Both)", type: "digiserv" },
  dsc_org: { name: "DSC Organization", type: "digiserv" },
  dsc_org_b: { name: "DSC Organization (Both)", type: "digiserv" },
  sbi_fastag: { name: "SBI FASTag", type: "fastag" },
  icici_fastag: { name: "ICICI FASTag", type: "fastag" },
  sbi_fastag_replacement: { name: "SBI FASTag (Replacement)", type: "fastag" },
  icici_fastag_replacement: {
    name: "ICICI FASTag (Replacement)",
    type: "fastag",
  },
  pan_new: { name: "PAN Card", type: "pan" },
  pan_correction: { name: "PAN Card - Correction", type: "pan" },
  pan_damaged: { name: "PAN Card - Damaged", type: "pan" },
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
