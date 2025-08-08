# /create-article Command

**Purpose:** Complete article creation workflow with comprehensive research and systematic implementation

## Command Syntax
```
/create-article [article-type] [topic/state] [target-url]
```

## 🚨 CRITICAL: MDX ACORN PARSING ERROR PREVENTION

**CONFIRMED ROOT CAUSES & MANDATORY TESTING PROTOCOL**

⚠️ **KEY INSIGHT**: When MDX acorn parsing errors persist despite structural fixes, the issue is content-level corruption requiring complete rebuild, not incremental debugging.

### **Mandatory Pre-Creation Validation:**
Before ANY content creation:
1. **Run full deployment tests**: `npm run test:netlify` (NOT just `npm run build`)
2. **Use template-based rebuilds** when fixing MDX errors (copy working blog structure completely)
3. **NEVER incrementally debug** MDX acorn errors - rebuild from working template
4. **Validate all MDX files**: `npm run test:mdx` before claiming completion

### **Confirmed Solution Pattern for MDX Errors:**
- **Complete template rebuild** using proven working blog structure
- **Fresh content creation** rather than fixing corrupted content  
- **Copy exact patterns** from `content/blog/the-hidden-costs-in-your-commercial-auto-insurance-policy.mdx`

### **✅ SAFE COMPONENTS** (Confirmed working in production):
```jsx
import { Callout } from '@/components/ui/Callout'
import { Stats } from '@/components/ui/Stats'
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table'
import { CTABox } from '@/components/ui/CTABox'
import { Checklist } from '@/components/ui/Checklist'
import { GetQuoteCTA } from '@/components/ui/GetQuoteCTA'
```

### **❌ NEVER USE** (Confirmed to cause acorn errors):
```jsx
import { BlogFAQ } from '@/components/blog/BlogFAQ'           // ❌
import { BlogCTA } from '@/components/blog/BlogCTA'           // ❌  
import { BlogQuoteBox } from '@/components/blog/BlogQuoteBox' // ❌
import { BlogInfographic } from '@/components/blog/BlogInfographic' // ❌
```

### **FAQ FORMATTING** (Simple markdown only):
```markdown
## Frequently Asked Questions

**Q: Your question here?**
A: Your answer here.

**Q: Another question?**
A: Another answer here.
```

## Article Types
- `state-guide` - State-specific contractor insurance guide
- `topic-guide` - General insurance topic guide  
- `cost-analysis` - Premium and cost analysis articles
- `regulation-guide` - Compliance and regulation articles

## Usage Examples
```bash
/create-article state-guide florida "/blog/2024/06/20/florida-contractor-insurance-guide"
/create-article topic-guide "decoding-policy-statements" "/blog/2023/12/29/decoding-policy-statements"
/create-article cost-analysis "premium-calculation-factors" "/blog/2023/12/29/insurance-premium-calculation-factors"
```

## Workflow Stages

### Stage 1: Research Phase (Days 1-3)
1. **Topic Research** - Market analysis, competitor content, industry trends
2. **SEO Research** - Keyword analysis, semantic keywords, geo-targeting
3. **Link Research** - High-authority external links, internal linking opportunities
4. **Process Research** - Forms, certifications, actionable steps
5. **Content Audit** - Existing blog inventory and gap analysis
6. **Visual Planning** - Infographic concepts, image requirements
7. **FAQ Research** - Reddit, forums, customer questions (minimum 20 FAQs)

### Stage 2: Draft Creation (Days 4-5)
1. **Outline Generation** - Structure based on research findings
2. **Content Writing** - Full article draft with all sections
3. **🚨 DEPLOYMENT TESTING** - Run `npm run test:netlify` (comprehensive validation)
4. **SEO Optimization** - Meta tags, headers, keyword density
5. **Internal Linking** - Connect to existing and planned content

### Stage 3: Review & Enhancement (Days 6-7)
1. **Research Validation** - Ensure all research elements are incorporated
2. **Content Refinement** - Improve readability, accuracy, value
3. **Visual Integration** - Add charts, tables, infographics (safe components only)
4. **FAQ Enhancement** - Simple markdown Q:/A: format (NEVER components)
5. **🧪 MDX VALIDATION** - Run `npm run test:mdx` to catch parsing errors

### Stage 4: Publication (Day 8)
1. **Final Article Generation** - Complete MDX file using working blog template
2. **🔍 Component Validation** - Ensure only safe components are imported
3. **🛠️ MDX Error Prevention** - Apply `/fix-mdx-errors` process if any validation issues arise
4. **🚀 Pre-Deploy Check** - Run `node scripts/pre-deploy-check.js`
5. **Quality Assurance** - All validation tests must pass before deployment
6. **Live Review** - Post-publication optimization opportunities

### **🛠️ Integrated MDX Error Resolution Process**
If any MDX validation failures occur during creation:
1. **Immediately apply `/fix-mdx-errors` command process**
2. **PRESERVE all content, keywords, and SEO work** - only fix technical parsing issues
3. **Use template-based rebuild** from proven working blog structure
4. **Maintain 5000+ word count** and all research elements
5. **Re-test with full validation suite** before proceeding

## Research Folder Structure
```
/.claude/research/[article-slug]/
├── 01-topic-research.md
├── 02-seo-research.md  
├── 03-link-research.md
├── 04-process-research.md
├── 05-content-audit.md
├── 06-visual-planning.md
├── 07-faq-research.md
├── draft-outline.md
├── draft-article.mdx
├── review-notes.md
└── final-article.mdx
```

## Success Metrics
- [ ] All 7 research areas completed
- [ ] **Minimum 5,000 words comprehensive content** (never less than 5000 words)
- [ ] 20+ FAQ items in simple markdown Q:/A: format (NEVER components)
- [ ] 5+ internal links to existing/planned content
- [ ] 3+ high-authority external links
- [ ] Visual elements integrated (safe components only)
- [ ] SEO optimized (title, meta, headers)
- [ ] **🚨 CRITICAL: All deployment tests pass**:
  - [ ] `npm run test:netlify` - Netlify environment simulation
  - [ ] `npm run test:mdx` - MDX file validation
  - [ ] `node scripts/pre-deploy-check.js` - Comprehensive validation
  - [ ] **If validation fails**: Apply `/fix-mdx-errors` process while preserving all content
- [ ] Working blog template used (copy from confirmed working blog)
- [ ] Only safe components imported (no BlogFAQ, BlogCTA, etc.)
- [ ] Mobile-responsive and accessible
- [ ] **NEVER claim deployment ready without all tests passing**

## Integration Points
- Automatically updates blog tracking system
- Creates placeholder entries for referenced future articles
- Generates image prompts for visual team
- Updates internal linking opportunities database

---

*This command is part of the comprehensive blog management system for Contractors Choice Agency.*