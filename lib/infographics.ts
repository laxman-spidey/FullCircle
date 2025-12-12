// utils/infographics.ts
import img1 from '../public/infographics/1-EmergencySupport.jpeg';
import img2 from '../public/infographics/2-ChildrenAssistance.jpeg';
import img3 from '../public/infographics/3-Events.jpeg';
import img4 from '../public/infographics/4-EssentialErrands.jpeg';
import img5 from '../public/infographics/5-FinancialAdministration.jpeg';
import img6 from '../public/infographics/6-HealthSafety.jpeg';
import img7 from '../public/infographics/7-HomeShop.jpeg';
import img8 from '../public/infographics/8-ProductivityLifestyle.jpeg';
import img9 from '../public/infographics/9-PetCare.jpeg';
import img10 from '../public/infographics/10-TransportMobility.jpeg';
import img11 from '../public/infographics/11-GeneralAssistance.jpeg';
import img12 from '../public/infographics/12-CareCompanionship.jpeg';



export const getInfographicImages = (): Array<{ src: string }> => {
  // Import images as objects to work with Next.js Image component
  return [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img1,
    img8,
    img9,
    img10,
    img11,
    img12
  ];
};

// Alternative approach: dynamically import images (this would require build-time resolution)
export const importAllInfographics = async () => {
  // This would be the preferred approach if we can import images dynamically
  // For now, returning static paths
  return [
    { url: img1.src, name: 'Emergency Support' },
    { url: img2.src, name: 'Children Assistance' },
    { url: img3.src, name: 'Events Support' },
    { url: img4.src, name: 'Essential Errands' },
    { url: img5.src, name: 'Financial Administration' },
    { url: img6.src, name: 'Health & Safety' },
    { url: img7.src, name: 'Home & Shop Support' },
    { url: img8.src, name: 'Personal Productivity & Lifestyle' },
    { url: img9.src, name: 'Pet Care Services' },
    { url: img10.src, name: 'Transport & Mobility' },
    { url: img11.src, name: 'General On-field Assistance' },
    { url: img12.src, name: 'Care & Companionship' }
  ];
};
