# /create-article Command Documentation

## Overview

The `/create-article` command generates SEO-optimized blog articles using only safe MDX components that are guaranteed to build successfully on Netlify.

## Usage

```bash
node scripts/create-article.js "Article Title" "target keyword"
```

**Example:**
```bash
node scripts/create-article.js "Complete Workers Comp Guide" "workers compensation requirements"
```

## Safe Components Only

The command uses ONLY these confirmed safe components:

✅ **Safe Components:**
- `@/components/ui/Callout` - Info boxes, warnings, tips (types: info, warning, tip, success)
- `@/components/ui/Stats` - Statistics display blocks  
- `@/components/ui/Table` - Data tables with headers

✅ **Working Callout Types (Confirmed in production):**
- `type="info"` - Information boxes (87 uses in working blogs)
- `type="warning"` - Warning alerts (78 uses in working blogs)  
- `type="tip"` - Tips and advice (14 uses in working blogs)
- `type="success"` - Success messages (5 uses in working blogs)

❌ **Never Use (Cause Build Failures):**
- `@/components/ui/CTABox` - Does not exist
- `@/components/ui/Checklist` - Does not exist
- `@/components/ui/GetQuoteCTA` - Does not exist
- `@/components/blog/*` - All blog components cause errors
- ~~`type="danger"`~~ - **This was the actual problem - never use danger type**

## Generated Article Structure

The command creates articles with:

1. **Complete SEO frontmatter** - All required meta fields
2. **Safe component imports** - Only working components
3. **Article template** - 5000+ word structure ready for content
4. **Call-to-action sections** - Using markdown links, not broken components
5. **FAQ section** - Structured for featured snippets
6. **Author bio** - Josh Cotner standard bio

## Post-Generation Steps

After running the command:

1. **Replace placeholder content** with researched information
2. **Update Stats component** with real data points
3. **Fill Table component** with accurate pricing/comparison data  
4. **Expand FAQ section** with relevant questions/answers
5. **Run validation:** `npm run test:mdx`

## MANDATORY Deployment & Verification Process

**🚨 CRITICAL: Article is NOT complete until verified live online!**

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add [article-name]: [brief description]"
git push origin main
```

### Step 2: Wait for Netlify Auto-Deployment
- **Wait exactly 75 seconds** for Netlify to detect and deploy changes
- Do not proceed until full deployment time has elapsed

### Step 3: Check Deployment Status
Use Netlify MCP tools to verify successful deployment:
```bash
# Check latest deployment status
mcp__netlify-mcp__netlify-deploy-services get-deploy-for-site
```

### Step 4: Online Verification Requirements
**All must be verified before marking article complete:**

✅ **Article Accessibility:**
- Article loads at correct URL: `https://[domain]/blog/[article-slug]`
- No 404 errors or broken pages
- All content renders properly

✅ **Internal Links Verification:**
- All service page links work (`/services/general-liability`, etc.)
- Related blog post links function correctly
- Navigation elements work properly
- Contact/quote CTAs redirect correctly

✅ **External Links Verification:**
- All external references load properly
- No broken outbound links
- Email and phone links function

✅ **Component Functionality:**
- Callout components display correctly
- Stats components show data properly  
- Tables render with proper formatting
- All responsive design works

### Step 5: Article Completion
**ONLY after successful online verification:**
- Mark article as complete in todo system
- Report completion to Slack channel
- Move to next article in queue

## Failure Recovery Process

**If deployment fails:**
1. Check Netlify build logs for specific errors
2. Fix identified issues locally
3. Re-test with `npm run test:mdx`
4. Repeat deployment process
5. **Never skip online verification**

**If article not found online:**
1. Verify GitHub push was successful
2. Check Netlify deployment triggered
3. Wait additional time if still deploying
4. Investigate build failures if deployment failed

## Quality Assurance

Every generated article:
- ✅ Passes MDX validation
- ✅ Uses only safe components
- ✅ Contains proper SEO structure
- ✅ Includes all required frontmatter
- ✅ Ready for content population

## Command Location

- **Script:** `/scripts/create-article.js`
- **Template:** `/content/blog/TEMPLATE-seo-optimized.mdx` (updated with safe components)
- **Output:** `/content/blog/[slug].mdx`

## Troubleshooting

If articles fail to build:
1. Verify only safe components are used
2. Run `npm run test:mdx` for validation
3. Check that no `@/components/blog/*` imports exist
4. Ensure no CTABox, Checklist, or GetQuoteCTA components are used

## Example Safe Usage

```jsx
// ✅ SAFE - These work perfectly
import { Callout } from '@/components/ui/Callout'
import { Stats } from '@/components/ui/Stats'
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table'

<Callout type="info" title="Key Point">
Your important message here
</Callout>

<Stats stats={[{label: "Metric", value: "100%", description: "Success rate"}]} />

<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Header</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Success Metrics

Since fixing the command:
- ✅ 100% MDX validation pass rate
- ✅ Zero build failures from components
- ✅ Consistent article structure
- ✅ SEO-optimized templates
- ✅ 5000+ word article framework ready for content