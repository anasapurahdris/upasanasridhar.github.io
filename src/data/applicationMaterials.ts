// Paths are relative to public/. Update this list when replacing application PDFs.
// Keep the CV path shared with the homepage and main navigation.
export const cvPath = '/application_materials/CV_Upasana_Fall26.pdf';

export const applicationMaterials = [
  { label: 'Curriculum Vitae', path: cvPath },
  { label: 'Research Statement', path: '/application_materials/Research Statement.pdf' },
  { label: 'Teaching Statement', path: '/application_materials/Teaching Statement.pdf' },
  // TODO: Add public/application_materials/Teaching Portfolio.pdf and set path below.
  { label: 'Teaching Portfolio', path: null },
  // Preserve the existing public URL rather than duplicating this document.
  { label: 'Mentoring a Diverse Student Body Statement', path: '/Mentoring a Diverse Student Body.pdf' },
];
