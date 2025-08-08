# CLAUDE.md - Crane Insurance Project Instructions

## Project Overview
Heavy Crane Insurance website - A division of Contractors Choice Agency
- **Technology Stack**: Astro 4.x, TypeScript, Tailwind CSS v3, React 19
- **Architecture**: Component-based, modular design
- **Deployment**: Netlify with forms integration

## Business Information
- **Company**: Heavy Crane Insurance - A Division of Contractors Choice Agency  
- **Address**: 12220 E Riggs Rd, Chandler, AZ 85249
- **Phone**: 844-967-5247
- **Email**: info@contractorschoiceagency.com  
- **Hours**: Monday-Friday 9:00AM - 5:00PM (MST)
- **Service Area**: Nationwide (United States)

## Core Services
1. **General Liability Insurance** - $1M-$5M coverage limits for crane operations
2. **Riggers Liability Coverage** - Property of others while "on the hook"  
3. **Equipment Physical Damage** - Complete crane equipment protection

## Available Commands

### Development Commands
- `/startup` - Initialize Echo AI Systems with full operational protocol
- `/test-netlify` - Run comprehensive deployment tests to simulate Netlify environment
- `/create-article` - SEO-optimized blog article generation (see `docs/CREATE-ARTICLE-COMMAND.md` for details)

### Error Management Commands  
- `/track-error [issue-number]` - Initialize comprehensive error tracking
- `/new-issue [issue-number]` - Quick initialize new issue with template
- `/log-resolution [issue-number]` - Log resolution attempt and update tracker
- `/slack-alert [issue-number]` - Post error status to Slack channels

### System Commands
- `/echo-memory` - Access project context and historical patterns
- `/echo-rules` - Review core operating principles and guidelines  
- `/echo-flow` - Quick reference for update posting patterns

## Development Workflow Rules

### 1. Before Making Changes
- Always read this CLAUDE.md file first
- Check existing error tracking in `docs/AI-ERROR-TRACKER.md`
- Review project memory for established patterns

### 2. Code Quality Standards
- Prioritize type safety and runtime safety
- Follow two-step fix methodology: runtime safety first, then type safety
- Validate all inputs before processing  
- Use proper null/undefined checks
- Apply `!important` prefix for critical button styles to prevent CSS inheritance

### 3. Testing Requirements
**CRITICAL**: Local `npm run build` success does NOT guarantee Netlify deployment success.

**Mandatory Testing Before Deployment**:
```bash
node scripts/pre-deploy-check.js  # Environment validation
npm run test:mdx                  # MDX parsing validation  
npm run test:netlify             # Netlify environment simulation
```

**Only claim deployment ready when ALL tests pass**:
- [ ] ✅ `node scripts/pre-deploy-check.js` - All checks pass
- [ ] ✅ `npm run test:mdx` - All MDX files validate  
- [ ] ✅ `npm run test:netlify` - Netlify simulation succeeds

### 4. Error Handling Protocol
- Document errors in `docs/AI-ERROR-TRACKER.md` immediately when issues arise
- Apply runtime safety checks first
- Use `/track-error [number]` command for systematic error resolution
- After 3 failed attempts, mandatory Slack notification protocol triggers

### 5. Content Guidelines  
- Use proper Unicode characters instead of HTML entities in data files
- Maintain component size under 150 lines for optimal AI manipulation
- Follow SEO best practices with comprehensive schema markup
- **Use ONLY safe MDX components** (see Article Creation section below)

### 6. Article Creation Protocol
**Reference**: `docs/CREATE-ARTICLE-COMMAND.md` for complete documentation

**Safe Components (Confirmed Working)**:
```jsx
import { Callout } from '@/components/ui/Callout'      // ✅ Info, warning, tip, success types
import { Stats } from '@/components/ui/Stats'          // ✅ Statistics display blocks  
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table'  // ✅ Data tables
```

**❌ NEVER USE (Cause Build Failures)**:
- `@/components/ui/CTABox` - Does not exist
- `@/components/ui/Checklist` - Does not exist  
- `@/components/ui/GetQuoteCTA` - Does not exist
- `@/components/blog/*` - All blog components cause errors
- `Callout type="danger"` - Use type="warning" instead

**Article Creation Process**:
1. Generate article using safe components only
2. Replace placeholder content with research
3. **MANDATORY**: Verify article online at live URL before completion
4. All internal/external links must be tested and functional

## Architecture Guidelines

### Component Structure
- **UI Components**: `/src/components/ui/` - Reusable interface elements
- **Section Components**: `/src/components/sections/` - Page section layouts
- **Layouts**: `/src/layouts/` - Page layout wrappers

### Configuration Files
- `/src/layouts/BaseLayout.astro` - SEO, meta tags, and schema markup
- `/src/components/componentRegistry.ts` - Component tracking and documentation
- `/public/sitemap.xml` - SEO sitemap with all pages
- `/public/robots.txt` - Search engine crawling directives
- `/public/llms.txt` - AI training and indexing information

### SEO Implementation
Comprehensive SEO has been implemented including:
- **Schema Markup**: LocalBusiness, InsuranceAgency, Service, FAQPage schemas
- **Meta Tags**: Complete Open Graph, Twitter Cards, geographic targeting
- **Technical SEO**: XML sitemap, robots.txt, security.txt, site.webmanifest
- **Structured Data**: Business info, services catalog, FAQ content

## Error Tracking System

### Issue Documentation Location
- **Primary**: `docs/AI-ERROR-TRACKER.md` - Global error documentation  
- **Individual**: `.claude/error-tracking/issue-[number].md` - Specific issue tracking

### Established Solution Patterns

#### 1. CSS Inheritance Issues  
**Problem**: Button text colors inherited from parent elements
**Solution**: Use `!important` prefix (`!text-white`, `!text-gray-900`)
**Status**: Resolved pattern - always force critical button styles

#### 2. String Method Errors
**Problem**: Calling `.replace()`, `.trim()` on undefined values  
**Solution**: Validate before string operations
```typescript
if (typeof input === 'string') {
  return input.replace('pattern', 'replacement')
}
```

#### 3. MDX Acorn Parsing Errors
**Problem**: CRLF line endings, malformed JSX, component import failures
**Solution**: Use template-based rebuilds from working blog structure
**Prevention**: Run `npm run test:mdx` before deployment

## Deployment Safety Protocol

### Pre-Deployment Checklist
1. Run comprehensive test suite (see Testing Requirements above)
2. Validate all MDX files parse correctly
3. Check for CRLF line endings (Windows/WSL compatibility)
4. Ensure all component imports exist and are accessible
5. Verify Netlify environment simulation passes

### Common Deployment Issues
- **CRLF Line Endings**: Fix with `find content -name "*.mdx" -exec dos2unix {} \;`
- **Component Import Failures**: Verify all imported components exist
- **MDX Parsing Errors**: Use template-based rebuilds, not incremental fixes

## Memory and Context Rules
- Maintain conversation context across development sessions
- Reference previous solutions for similar problems from error tracker
- Build upon established patterns and successful fixes
- Document new solutions for future reference
- Use project memory (`/echo-memory`) to access historical patterns

## Communication Protocols

### Slack Integration
When using commands, updates are automatically posted to:
- **#CCA-CRANE-INS-ERROR-updates-feed** - Error tracking and resolution
- **#echo-updates-feed (C0943NFUBDF)** - General development updates

### Update Posting Pattern
🔧 [Echo-CC-CCA-CRANE-INS] ACTION: Description
├─ PURPOSE: Why taking this action
├─ STATUS: Current progress  
└─ NEXT: Immediate next step

## Success Metrics
- All deployment tests pass before claiming ready
- Error documentation is complete and up-to-date
- Code follows established safety patterns
- SEO optimization is comprehensive and functional
- User experience is prioritized in all decisions

## Emergency Protocols

### Critical Deployment Failures
1. Immediately identify error type (runtime vs type)
2. Apply two-step fix methodology
3. Test with full validation suite
4. Document solution in error tracker
5. Consider rollback if urgent

### Communication Emergency
If 3+ attempts fail on any issue, automatic Slack notification triggers to alert team for additional support.

---

This document serves as the comprehensive guide for all development work on the Heavy Crane Insurance project. Always reference this file before making changes and update it when new patterns or solutions are discovered.