import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/renderer'

Font.register({
  family: 'Geist Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Medium.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-SemiBold.ttf',
      fontWeight: 600,
    },
  ],
})

const c = {
  text: '#171717',
  secondary: '#858585',
  tertiary: '#a3a3a3',
  border: '#cfcfcf',
  borderSubtle: '#ededed',
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Geist Sans',
    fontSize: 9,
    color: c.text,
    paddingTop: 36,
    paddingBottom: 32,
    paddingHorizontal: 40,
    lineHeight: 1.45,
  },

  // Header
  header: {
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: c.border,
    borderBottomStyle: 'dashed',
  },
  headerName: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: -0.5,
    lineHeight: 1.3,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 10,
    fontWeight: 400,
    color: c.secondary,
    marginBottom: 8,
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    fontSize: 8.5,
    color: c.tertiary,
  },
  headerLink: {
    color: c.tertiary,
    textDecoration: 'none',
  },

  // Sections
  section: {
    marginTop: 14,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 14,
  },
  colLeft: {
    flex: 55,
  },
  colRight: {
    flex: 45,
  },
  colSection: {
    marginTop: 0,
  },
  sectionHeading: {
    fontSize: 8,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: c.tertiary,
    marginBottom: 6,
  },

  // Summary
  summaryText: {
    fontSize: 9,
    lineHeight: 1.55,
    color: c.text,
  },

  // Experience
  experienceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 3.5,
  },
  experienceItemBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 3.5,
    borderTopWidth: 1,
    borderTopColor: c.borderSubtle,
    borderTopStyle: 'dashed',
  },
  experienceLeft: {
    flex: 1,
  },
  experienceRole: {
    fontWeight: 500,
    fontSize: 9,
    letterSpacing: -0.1,
  },
  experienceCompany: {
    color: c.secondary,
    fontSize: 8.5,
    marginTop: 1,
  },
  experienceDate: {
    fontSize: 8,
    color: c.tertiary,
    textAlign: 'right',
    flexShrink: 0,
    paddingTop: 1,
  },

  // Projects
  projectItem: {
    paddingVertical: 4,
  },
  projectItemBorder: {
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: c.borderSubtle,
    borderTopStyle: 'dashed',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  projectTitle: {
    fontWeight: 500,
    fontSize: 9,
    letterSpacing: -0.1,
  },
  projectRole: {
    fontSize: 8,
    color: c.tertiary,
  },
  projectDesc: {
    fontSize: 8.5,
    color: c.secondary,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  projectTag: {
    fontSize: 7,
    color: c.tertiary,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    borderRadius: 2,
  },

  // Clients
  clientsText: {
    fontSize: 9,
    color: c.secondary,
    lineHeight: 1.5,
  },

  // Skills
  skillsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 3.5,
  },
  skillsRowBorder: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 3.5,
    borderTopWidth: 1,
    borderTopColor: c.borderSubtle,
    borderTopStyle: 'dashed',
  },
  skillsLabel: {
    fontWeight: 500,
    fontSize: 8.5,
    width: 70,
    color: c.text,
    flexShrink: 0,
  },
  skillsValue: {
    fontSize: 8.5,
    color: c.secondary,
    flex: 1,
    lineHeight: 1.5,
  },

  // Footer
  footer: {
    marginTop: 'auto',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: c.border,
    borderTopStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 7.5,
    color: c.tertiary,
  },
  footerLink: {
    color: c.tertiary,
    textDecoration: 'none',
    fontSize: 7.5,
  },
})

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`
}

function formatDateRange(start: string, end: string | null): string {
  return `${formatDate(start)} — ${end ? formatDate(end) : 'Present'}`
}

interface Position {
  role: string
  company: string
  type: string
  startDate: string
  endDate: string | null
}

interface Project {
  title: string
  tags: string[]
  details: {
    description: string
    role: string
  }
}

interface Client {
  name: string
}

interface Tool {
  name: string
  category: string
}

interface ResumeDocumentProps {
  about: {
    name: string
    title: string
    location: string
    bio: string
    email: string
    links: { label: string; url: string }[]
  }
  positions: Position[]
  projects: Project[]
  clients: Client[]
  tools: Tool[]
  generationDate: string
  documentId: string
}

const EXCLUDED_TOOLS = ['Spotify', 'Arc', 'Raycast', 'Granola', 'Notion Calendar']

export default function ResumeDocument({
  about,
  positions,
  projects,
  clients,
  tools,
  generationDate,
}: ResumeDocumentProps) {
  const portfolioUrl = 'andyryanweir.com'

  const designSkills = Array.from(
    new Set(projects.flatMap(p => p.tags))
  )

  const professionalTools = tools
    .filter(t => !EXCLUDED_TOOLS.includes(t.name))
    .map(t => t.name)

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerName}>Andy Weir</Text>
          <Text style={styles.headerTitle}>{about.title}</Text>
          <View style={styles.headerMeta}>
            <Text>{about.location}</Text>
            <Text>{'  ·  '}</Text>
            <Link src={`mailto:${about.email}`} style={styles.headerLink}>
              {about.email}
            </Link>
            <Text>{'  ·  '}</Text>
            <Link src={`https://${portfolioUrl}`} style={styles.headerLink}>
              {portfolioUrl}
            </Link>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Summary</Text>
          <Text style={styles.summaryText}>
            {about.bio.split('\n\n')[0]}
          </Text>
        </View>

        {/* Experience + Selected Projects — side by side */}
        <View style={styles.twoCol}>
          <View style={styles.colLeft}>
            <Text style={styles.sectionHeading}>Experience</Text>
            {positions.map((pos, i) => (
              <View key={i} style={i === 0 ? styles.experienceItem : styles.experienceItemBorder}>
                <View style={styles.experienceLeft}>
                  <Text style={styles.experienceRole}>{pos.role}</Text>
                  <Text style={styles.experienceCompany}>
                    {pos.company} · {pos.type}
                  </Text>
                </View>
                <Text style={styles.experienceDate}>
                  {formatDateRange(pos.startDate, pos.endDate)}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.colRight}>
            <Text style={styles.sectionHeading}>Selected Projects</Text>
            {projects.map((proj, i) => {
              const desc = proj.details.description.split('\n\n')[0]
              const shortDesc = desc.length > 120
                ? desc.slice(0, 120).replace(/\s+\S*$/, '') + '...'
                : desc
              return (
                <View key={i} style={i === 0 ? styles.projectItem : styles.projectItemBorder}>
                  <Text style={styles.projectTitle}>{proj.title}</Text>
                  <Text style={styles.projectRole}>{proj.details.role}</Text>
                  <Text style={styles.projectDesc}>{shortDesc}</Text>
                  <View style={styles.projectTags}>
                    {proj.tags.map((tag, j) => (
                      <Text key={j} style={styles.projectTag}>{tag}</Text>
                    ))}
                  </View>
                </View>
              )
            })}
          </View>
        </View>

        {/* Notable Clients */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Notable Clients</Text>
          <Text style={styles.clientsText}>
            {clients.map(c => c.name).join('  ·  ')}
          </Text>
        </View>

        {/* Skills & Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Skills & Tools</Text>
          <View style={styles.skillsRow}>
            <Text style={styles.skillsLabel}>Design</Text>
            <Text style={styles.skillsValue}>
              {designSkills.join(', ')}
            </Text>
          </View>
          <View style={styles.skillsRowBorder}>
            <Text style={styles.skillsLabel}>Tools</Text>
            <Text style={styles.skillsValue}>
              {professionalTools.join(', ')}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Generated {generationDate}</Text>
          <Link src={`https://${portfolioUrl}`} style={styles.footerLink}>
            {portfolioUrl}
          </Link>
        </View>
      </Page>
    </Document>
  )
}
