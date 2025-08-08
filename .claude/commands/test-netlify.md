# Test Netlify Deployment

Run comprehensive tests that simulate Netlify's build environment to catch issues before deployment.

## Task Instructions

You are tasked with running a complete Netlify deployment simulation to identify potential build failures before they occur on the live deployment.

**CRITICAL CONTEXT**: Local `npm run build` success does NOT guarantee Netlify deployment success. This command prevents the recurring issue where local builds pass but Netlify deployments fail.

## Required Testing Steps

### 1. Environment Validation
Run the comprehensive pre-deployment check that simulates Netlify's exact environment:

```bash
node scripts/pre-deploy-check.js
```

This validates:
- Node.js version compatibility (Netlify uses Node 20)
- Dependency installation in production mode
- Environment variables and build configuration
- Component imports and availability

### 2. MDX File Validation
Run specific MDX parsing tests to catch acorn parsing errors:

```bash
npm run test:mdx
```

This catches:
- CRLF line endings (Windows/WSL compatibility issues)
- Problematic JSX components (BlogFAQ, BlogCTA, etc.)
- Frontmatter syntax errors
- Content corruption patterns
- Skips template files and JSX false positives

### 3. Netlify Environment Build
Run the build process with Netlify's exact environment variables:

```bash
npm run test:netlify
```

This simulates:
- Production NODE_ENV
- Node 20 environment
- Netlify-specific build optimizations

## Deployment Readiness Checklist

Only claim "deployment ready" if ALL these tests pass:

- [ ] ✅ `node scripts/pre-deploy-check.js` - All checks pass
- [ ] ✅ `npm run test:mdx` - All MDX files validate
- [ ] ✅ `npm run test:netlify` - Netlify simulation succeeds
- [ ] ✅ No CRLF line endings detected
- [ ] ✅ No problematic component imports found
- [ ] ✅ All required components exist and are importable

## Common Issues Caught

**CRLF Line Endings**: Windows/WSL systems often create CRLF line endings that break Netlify builds
```bash
# Fix automatically:
find content -name "*.mdx" -exec dos2unix {} \;
```

**JSX Tag Imbalances**: Missing closing tags or malformed JSX
```bash
# Manual review required - check MDX validation output
```

**Component Import Failures**: Missing or incorrect component imports
```bash
# Ensure all imported components exist in components/ directory
```

## Success Criteria

The deployment is ready when:
1. All validation scripts pass without errors
2. Build completes successfully in Netlify environment simulation
3. No warnings about problematic patterns or line endings
4. All MDX files parse correctly with proper frontmatter

## Emergency Protocol

If tests reveal issues:
1. **DO NOT deploy** until all tests pass
2. Fix identified issues systematically
3. Re-run full test suite after each fix
4. Document any new patterns discovered for future prevention

This comprehensive testing prevents the local vs Netlify build discrepancy that has caused deployment failures in the past.