export type EducationRecord = {
  institution: string
  degree: string
  currentLevel: string
  expectedGraduation: string
  professionalDirection: string
}

export type AcademicRecognition = {
  title: string
  summary: string
  recordedTerms: readonly string[]
  verificationNote: string
}

export const education: EducationRecord = {
  institution: 'National University',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  currentLevel: '4th Year / Graduating Student',
  expectedGraduation: 'April–June 2027',
  professionalDirection: 'Network Engineering / Network Administration',
}

export const academicRecognition: AcademicRecognition = {
  title: 'Academic Recognition Across Multiple Terms',
  summary:
    'Recognition has been recorded across seven academic terms while Kevin progresses through the BSIT program.',
  recordedTerms: [
    'Term 01',
    'Term 02',
    'Term 03',
    'Term 04',
    'Term 05',
    'Term 06',
    'Term 07',
  ],
  verificationNote:
    'Official award titles will be added after verification from university records.',
}
