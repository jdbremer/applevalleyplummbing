export type Coupon = {
  value: string;
  title: string;
  body: string;
  code: string;
};

export const coupons: Coupon[] = [
  {
    value: "$25 OFF",
    title: "Any Service Call",
    body: "New customer? Save $25 on your first visit. One-time use, cannot be combined with other offers.",
    code: "NEWCUSTOMER25",
  },
  {
    value: "$75 OFF",
    title: "Water Heater Install",
    body: "Save $75 on a standard tank or tankless water heater installation. Mention the coupon when scheduling.",
    code: "HOTWATER75",
  },
  {
    value: "$50 OFF",
    title: "Main Line Drain Cleaning",
    body: "Save $50 on professional main sewer line cleaning with complimentary camera inspection.",
    code: "DRAIN50",
  },
  {
    value: "10% OFF",
    title: "Seniors & Veterans",
    body: "A small thank-you to our seniors and those who served. Ten percent off any plumbing service call.",
    code: "THANKYOU10",
  },
];
