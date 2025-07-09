// Updated mock data with technician notes field
export const SERVICE_REPORT_DATA = {
  customerName: "John Smith",
  address: "456 Oak Street, Fort Greene, Brooklyn",
  date: "June 15, 2023",
  checkInTime: new Date(new Date().getTime() - 75 * 60000), // 1h 15m ago
  checkOutTime: new Date(), // now
  previousScore: 72,
  currentScore: 89,
  summary:
    "Today's pool service was completed successfully. The technician skimmed the pool surface, emptied skimmer and pump baskets, and checked equipment for leaks. Water chemistry was balanced with pH adjusted from 7.8 to 7.4 and chlorine levels increased to optimal range. The pool walls and steps were brushed to remove algae buildup, and debris was vacuumed from the bottom. All equipment is functioning properly with no leaks detected.",
  technicianNotes:
    "Checked the filter pressure gauge and it's reading slightly high. Recommended customer to schedule a filter cleaning in the next 2-3 weeks.",
  checklistItems: [
    { task: "Skim / Net Pool Surface", completed: true },
    { task: "Empty Skimmer Baskets", completed: true },
    { task: "Empty Pump Basket", completed: true },
    { task: "Check Equipment for Leaks", completed: true },
    { task: "Balance Water Chemistry", completed: true },
    { task: "Brush Pool Walls and Steps", completed: true },
    { task: "Vacuum Debris", completed: true },
    { task: "Add Chemicals as Needed", completed: true },
  ],

  beforeImages: [
    "https://picsum.photos/seed/pool-before-1/800/600",
    "https://picsum.photos/seed/pool-before-2/800/600",
  ],

  afterImages: [
    "https://picsum.photos/seed/pool-after-1/800/600",
    "https://picsum.photos/seed/pool-after-2/800/600",
  ],
};
