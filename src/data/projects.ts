export type ProjectMediaItem = {
  id: string
  label: string
  code: string
  description: string
  alt: string
  src: string | null
  plannedSource: string
}

export type ProjectTechGroup = {
  label: string
  items: readonly string[]
}

export type ProjectContributionGroup = {
  code: string
  title: string
  summary: string
  items: readonly string[]
}

export type ProjectWorkflowStep = {
  code: string
  title: string
  description: string
}

export type ProjectSystemLayer = {
  code: string
  title: string
  detail: string
}

export type FeaturedProjectData = {
  id: string
  index: string
  name: string
  subtitle: string
  type: string
  role: string
  roleFocus: readonly string[]
  status: string
  overview: string
  ownershipNote: string
  media: readonly ProjectMediaItem[]
  technology: readonly ProjectTechGroup[]
  contributions: readonly ProjectContributionGroup[]
  workflow: readonly ProjectWorkflowStep[]
  integration: {
    title: string
    summary: string
    layers: readonly ProjectSystemLayer[]
    checkpoints: readonly string[]
  }
  repository: {
    label: string
    note: string
  }
}

export const featuredProjects: readonly FeaturedProjectData[] = [
  {
    id: 'affordahomes',
    index: '001',
    name: 'AFFORDAHOMES',
    subtitle: 'Web-Based Property, Client, and Sales Management Platform for Fiesta Communities',
    type: 'Academic Capstone Project',
    role: 'Front-End Developer & System Integrator',
    roleFocus: ['Frontend Development', 'API Integration', 'QA & Runtime Testing'],
    status: 'Flagship Capstone',
    overview:
      'AFFORDAHOMES is a web-based real estate management platform developed around Fiesta Communities workflows. It connects homebuyers, property agents, and administrators in one system, centralizing property-sales and client-service work that might otherwise be split across separate or manual processes.',
    ownershipNote:
      'Kevin contributed selected frontend workflows, cross-role integrations, and runtime quality work as part of a wider team-built system.',
    media: [
      {
        id: 'public-property',
        label: 'Public Property',
        code: 'VIEW / 01',
        description: 'Property discovery and detail experience',
        alt: 'Public property browsing interface in AFFORDAHOMES',
        src: '/images/projects/affordahomes/public-property.png',
        plannedSource: '/images/projects/affordahomes/public-property.png',
      },
      {
        id: 'client-dashboard',
        label: 'Client Dashboard',
        code: 'VIEW / 02',
        description: 'Client requests and appointment visibility',
        alt: 'Client dashboard in AFFORDAHOMES',
        src: '/images/projects/affordahomes/client-dashboard.png',
        plannedSource: '/images/projects/affordahomes/client-dashboard.png',
      },
      {
        id: 'site-visit',
        label: 'Site Visit',
        code: 'FLOW / 03',
        description: 'Site-visit request workflow',
        alt: 'AFFORDAHOMES site-visit request interface',
        src: '/images/projects/affordahomes/site-visit.png',
        plannedSource: '/images/projects/affordahomes/site-visit.png',
      },
      {
        id: 'cas',
        label: 'CAS',
        code: 'FLOW / 04',
        description: 'Client Appointment Slip lifecycle',
        alt: 'AFFORDAHOMES Client Appointment Slip interface',
        src: '/images/projects/affordahomes/cas-slip.png',
        plannedSource: '/images/projects/affordahomes/cas-slip.png',
      },
      {
        id: 'agent-property',
        label: 'Agent Property',
        code: 'OPS / 05',
        description: 'Property and gallery management',
        alt: 'Agent property management interface in AFFORDAHOMES',
        src: '/images/projects/affordahomes/agent-property.png',
        plannedSource: '/images/projects/affordahomes/agent-property.png',
      },
      {
        id: 'agent-dashboard',
        label: 'Agent Dashboard',
        code: 'OPS / 06',
        description: 'Client, listing, reservation, and site-visit overview',
        alt: 'Agent dashboard interface in AFFORDAHOMES',
        src: '/images/projects/affordahomes/agent-dashboard.png',
        plannedSource: '/images/projects/affordahomes/agent-dashboard.png',
      },
      {
        id: 'admin-dashboard',
        label: 'Admin Dashboard',
        code: 'OPS / 07',
        description: 'Administrative workflow overview',
        alt: 'AFFORDAHOMES administrator dashboard interface',
        src: '/images/projects/affordahomes/admin-dashboard.png',
        plannedSource: '/images/projects/affordahomes/admin-dashboard.png',
      },
    ],
    technology: [
      {
        label: 'Frontend',
        items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Router', 'TanStack Query'],
      },
      {
        label: 'Backend',
        items: ['PHP', 'Laravel', 'REST APIs'],
      },
      {
        label: 'Database',
        items: ['MariaDB', 'MySQL'],
      },
      {
        label: 'Delivery',
        items: ['Git', 'GitHub', 'Feature Branches', 'Pull Requests', 'Runtime Testing'],
      },
      {
        label: 'Wider System',
        items: ['Nexia Chatbot', 'Gemini-Powered Functionality'],
      },
    ],
    contributions: [
      {
        code: 'BUILD / 01',
        title: 'Property & Client Workflows',
        summary: 'Implemented user-facing flows that connect property discovery with client service.',
        items: [
          'Agent property creation, updates, guarded deletion, and gallery management',
          'Client Inquiry and Request Site Visit workflows',
          'Client appointments, history, detail views, and CAS handling',
          'Accomplishment information and signed-copy visibility',
        ],
      },
      {
        code: 'LINK / 02',
        title: 'Cross-Role Integration',
        summary: 'Connected shared lifecycle data across client, agent, and administrator surfaces.',
        items: [
          'Agent appointment and CAS integration',
          'Admin Appointments and Agent Management',
          'Admin property guarded deletion and leaderboards',
          'Protected-route and REST API integration',
        ],
      },
      {
        code: 'VERIFY / 03',
        title: 'Resilience & QA',
        summary: 'Helped make integrated workflows understandable and dependable at runtime.',
        items: [
          'Loading, error, empty, and success states',
          'TanStack Query cache management and invalidation',
          'Responsive desktop and mobile behavior',
          'Runtime, regression, and frontend/backend contract testing',
        ],
      },
    ],
    workflow: [
      {
        code: '01',
        title: 'Inquiry',
        description: 'A client starts a structured request from a property context.',
      },
      {
        code: '02',
        title: 'Site Visit',
        description: 'Visit intent and scheduling details move into agent handling.',
      },
      {
        code: '03',
        title: 'Appointment',
        description: 'Lifecycle details remain visible across client and agent views.',
      },
      {
        code: '04',
        title: 'CAS',
        description: 'CAS records, preview or print behavior, and signed-copy status close the loop.',
      },
    ],
    integration: {
      title: 'Keeping one workflow consistent across every layer.',
      summary:
        'The core challenge was not an isolated screen—it was preserving the same business state from typed frontend models through REST contracts to database-backed lifecycle rules.',
      layers: [
        {
          code: 'UI / 01',
          title: 'Frontend',
          detail: 'Typed models, protected routes, interface states, and query-driven updates.',
        },
        {
          code: 'API / 02',
          title: 'REST API',
          detail: 'Route audits, request and response contracts, validation, and business rules.',
        },
        {
          code: 'DATA / 03',
          title: 'Database',
          detail: 'Actual persisted state checked against appointment and CAS lifecycle behavior.',
        },
      ],
      checkpoints: [
        'Audited routes and response contracts',
        'Validated real API and database behavior',
        'Tested cache invalidation and refresh paths',
        'Reviewed runtime behavior and Git diffs before delivery',
      ],
    },
    repository: {
      label: 'Private Academic Repository',
      note: 'Source code availability is subject to project and team permissions.',
    },
  },
]

export type SelectedProjectProminence = 'primary' | 'supporting'
export type SelectedProjectAccent = 'cyan' | 'blue'
export type SelectedProjectMediaComposition = 'standard' | 'portrait-showcase'

export type SelectedProjectMediaItem = {
  id: string
  label: string
  alt: string
  src: string
  width: number
  height: number
}

export type SelectedProjectData = {
  id: string
  index: string
  title: string
  context: string
  category: string
  description: string
  focus: string
  technologies: readonly string[]
  highlights: readonly string[]
  workflow: readonly string[]
  endpoints?: readonly string[]
  prominence: SelectedProjectProminence
  accent: SelectedProjectAccent
  media: {
    mark: string
    alt: string
    src: string | null
    plannedSource: string
    composition?: SelectedProjectMediaComposition
    items?: readonly SelectedProjectMediaItem[]
  }
  repositoryUrl: string | null
  demoUrl: string | null
}

export const selectedProjects: readonly SelectedProjectData[] = [
  {
    id: 'networking-security-lab',
    index: '002',
    title: 'Enterprise Networking & Security Lab',
    context: 'Hands-On Enterprise Lab',
    category: 'Cisco Packet Tracer • Network Engineering • Cybersecurity',
    description:
      'Designed and configured a multi-site enterprise network in Cisco Packet Tracer spanning headquarters, remote branches, a data center, DMZ, and Operational Technology environment, with dynamic routing, secure device administration, segmentation, firewall policies, centralized logging, and end-to-end validation.',
    focus: 'Multi-Site Routing · Firewall Segmentation · Infrastructure Hardening',
    technologies: [
      'Cisco Packet Tracer',
      'OSPF',
      'IPv4 Addressing',
      'VLANs',
      '802.1Q',
      'Cisco ASA',
      'ISA-3000',
      'Purdue Model Segmentation',
      'Extended ACLs',
      'DHCP',
      'SSH',
      'Port Security',
      'Syslog / SIEM',
      'Serial WAN',
      'Network Troubleshooting',
    ],
    highlights: [
      'Configured multi-site OSPF dynamic routing and point-to-point serial WAN links across enterprise networks',
      'Implemented VLAN segmentation, 802.1Q subinterfaces, and DHCP services for remote branch environments',
      'Deployed Cisco ASA firewall for enterprise DMZ segmentation and ISA-3000 firewall for Operational Technology protection',
      'Applied Purdue Model security segmentation, extended ACL enforcement, and ICMP inspection rules',
      'Hardened network devices using SSHv2, RSA keys, local authentication, switch Port Security, and PortFast',
      'Established centralized syslog logging through a SIEM server, integrated honeypot and historian servers, and validated end-to-end policies',
    ],
    workflow: [
      'Addressing & Segmentation',
      'Routing & WAN Connectivity',
      'Device Hardening',
      'Firewall & Access Control',
      'Verification & Troubleshooting',
    ],
    prominence: 'primary',
    accent: 'cyan',
    media: {
      mark: 'NET/LAB',
      alt: 'Cisco Packet Tracer enterprise network topology showing headquarters, remote branches, data center, ASA DMZ firewall, ISA-3000 OT firewall, SIEM, honeypot, historian, servers, switches, routers, and endpoints.',
      src: '/images/projects/networking/network-lab.png',
      plannedSource: '/images/projects/networking/network-lab.png',
    },
    repositoryUrl: null,
    demoUrl: null,
  },
  {
    id: 'campusfind',
    index: '003',
    title: 'CampusFind — Campus Lost & Found App',
    context: 'Solo Academic Final Project',
    category: 'Mobile Development / Firebase',
    description:
      'A Flutter Android lost-and-found application designed for campus use, combining authenticated reporting, real-time Firestore data, search and filtering, possible item matching, AI-assisted match explanations, and a role-based claiming workflow through the Campus Security Office.',
    focus: 'Report · Match · Claim · Resolve',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
      'Provider',
      'Firestore Security Rules',
    ],
    highlights: [
      'Built authenticated Lost and Found reporting flows with Firebase Authentication and Cloud Firestore persistence',
      'Used Provider and real-time Firestore streams to keep report data and interface state synchronized',
      'Added search and All / Lost / Found filters, rule-based possible matches, and Firebase-based AI-assisted match explanations',
      'Enforced owner and Campus Security Admin boundaries with Firestore Security Rules, including Recovered and Returned status updates; built and tested a release Android APK',
    ],
    workflow: ['Register', 'Report', 'Browse', 'Match', 'Claim', 'Resolve'],
    prominence: 'primary',
    accent: 'blue',
    media: {
      mark: 'CF/APP',
      alt: 'CampusFind home screen with Lost and Found actions, search, and recent items',
      src: '/images/projects/campusfind/campusfind-home.png',
      plannedSource: '/images/projects/campusfind/campusfind-home.png',
      composition: 'portrait-showcase',
      items: [
        {
          id: 'campusfind-home',
          label: 'Home / Dashboard',
          alt: 'CampusFind home screen with Lost and Found actions, search, and recent items',
          src: '/images/projects/campusfind/campusfind-home.png',
          width: 488,
          height: 1082,
        },
        {
          id: 'campusfind-report-item',
          label: 'Lost Item Reporting',
          alt: 'CampusFind Lost Item reporting form',
          src: '/images/projects/campusfind/campusfind-report-item.png',
          width: 488,
          height: 1084,
        },
        {
          id: 'campusfind-item-details',
          label: 'Item Details / Lost Report',
          alt: 'CampusFind active Lost Item details screen with possible matches',
          src: '/images/projects/campusfind/campusfind-item-details.png',
          width: 488,
          height: 1081,
        },
        {
          id: 'campusfind-ai-match',
          label: 'AI Match Assistant',
          alt: 'CampusFind AI Match Assistant displaying a possible Lost and Found match',
          src: '/images/projects/campusfind/campusfind-ai-match.png',
          width: 389,
          height: 863,
        },
        {
          id: 'campusfind-admin-workflow',
          label: 'Campus Security Admin Workflow',
          alt: 'CampusFind Campus Security Admin workflow for claiming and returning a Found item',
          src: '/images/projects/campusfind/campusfind-admin-workflow.png',
          width: 386,
          height: 856,
        },
      ],
    },
    repositoryUrl: 'https://github.com/Gennnnjii/campusfind-lost-found',
    demoUrl: null,
  },
]
